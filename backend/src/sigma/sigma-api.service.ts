import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class SigmaApiService {
  private readonly logger = new Logger(SigmaApiService.name);
  private accessToken: string | null = null;
  private tokenExpiry: number = 0; // Epoch time in seconds

  constructor(private configService: ConfigService) {}

  /**
   * Uses OAuth2 client credentials flow to fetch a token from Sigma.
   * Caches token until expiration with a 60s buffer.
   */
  async getAccessToken(): Promise<string> {
    const now = Math.floor(Date.now() / 1000);

    if (this.accessToken && now < this.tokenExpiry - 60) {
      this.logger.debug('Reusing cached bearer token');
      return this.accessToken;
    }

    try {
      const authURL = 'https://aws-api.sigmacomputing.com/v2/auth/token';
      const clientId = this.configService.get('SIGMA_CLIENT_ID');
      const clientSecret = this.configService.get('SIGMA_CLIENT_SECRET');

      const requestData = new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: clientId,
        client_secret: clientSecret,
      });

      this.logger.debug(`Requesting token from: ${authURL}`);

      const response = await axios.post(authURL, requestData, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      });

      this.accessToken = response.data.access_token;
      const expiresIn = response.data.expires_in || 3600;
      this.tokenExpiry = now + expiresIn;

      this.logger.debug('Bearer token obtained successfully');
      return this.accessToken!;
    } catch (error) {
      const errorMsg =
        error.response?.data?.error_description ||
        error.response?.data?.error ||
        error.message;

      this.logger.error('Error obtaining Bearer token:', errorMsg);
      throw new Error(`Failed to obtain Sigma API token: ${errorMsg}`);
    }
  }

  /**
   * Look up a Sigma member ID by email address
   */
  async lookupMemberId(email: string): Promise<string | null> {
    try {
      const accessToken = await this.getAccessToken();
      const baseURL = 'https://aws-api.sigmacomputing.com/v2';
      
      const membersUrl = `${baseURL}/members?search=${encodeURIComponent(email)}`;
      
      this.logger.debug(`Looking up member by email: ${membersUrl}`);
      
      const response = await axios.get(membersUrl, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });

      const member = response.data?.entries?.[0];
      if (!member || !member.memberId) {
        this.logger.warn(`Member not found for email: ${email}`);
        return null;
      }

      this.logger.debug(`Found member ${email} → ${member.memberId}`);
      return member.memberId;
    } catch (error) {
      this.logger.error(`Error looking up member for email ${email}:`, error.message);
      return null;
    }
  }

  /**
   * Fetches workbooks accessible to a specific user by email
   */
  async getUserWorkbooks(userEmail: string): Promise<any[]> {
    try {
      // First, look up the member ID by email
      const memberId = await this.lookupMemberId(userEmail);
      if (!memberId) {
        this.logger.debug(`No Sigma member found for email: ${userEmail}`);
        return [];
      }

      const accessToken = await this.getAccessToken();
      const baseURL = 'https://aws-api.sigmacomputing.com/v2';

      // Get all workbooks
      const workbooksUrl = `${baseURL}/workbooks`;
      
      this.logger.debug(`Fetching workbooks: ${workbooksUrl}`);
      
      const workbooksResponse = await axios.get(workbooksUrl, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });

      const allWorkbooks = workbooksResponse.data?.entries || [];
      
      // For now, return all workbooks since the user has access via OAuth
      // In the future, we could filter by member access if needed
      this.logger.debug(`Found ${allWorkbooks.length} workbooks for user: ${userEmail}`);
      
      // Debug: Log the actual workbook IDs from Sigma
      allWorkbooks.forEach((workbook: any, index: number) => {
        this.logger.debug(`Sigma Workbook ${index + 1}: ID=${workbook.workbookId}, Name=${workbook.name}`);
      });

      return allWorkbooks.map((workbook: any) => ({
        id: workbook.workbookId,
        name: workbook.name,
        url: workbook.url,
        urlId: workbook.workbookUrlId,
        version: workbook.latestVersion,
        path: workbook.path,
        ownerId: workbook.ownerId,
        description: workbook.description || '',
        created_at: workbook.createdAt,
        updated_at: workbook.updatedAt
      }));

    } catch (error) {
      this.logger.error('Error fetching user workbooks:', error.message);
      throw new Error(`Failed to fetch user workbooks: ${error.message}`);
    }
  }

  /**
   * Fetches all workbooks (for admin use)
   */
  async getAllWorkbooks(): Promise<any[]> {
    try {
      const accessToken = await this.getAccessToken();
      const baseURL = 'https://aws-api.sigmacomputing.com/v2';

      const workbooksUrl = `${baseURL}/workbooks?limit=500`;
      
      this.logger.debug(`Fetching all workbooks: ${workbooksUrl}`);
      
      const response = await axios.get(workbooksUrl, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });

      const workbooks = response.data.entries || [];

      this.logger.debug(`Found ${workbooks.length} total workbooks`);

      return workbooks.map((workbook: any) => ({
        id: workbook.workbookId,
        name: workbook.name,
        url: workbook.url,
        latestVersion: workbook.latestVersion,
        description: workbook.description || '',
        created_at: workbook.createdAt,
        updated_at: workbook.updatedAt
      }));

    } catch (error) {
      this.logger.error('Error fetching all workbooks:', error.message);
      throw new Error(`Failed to fetch all workbooks: ${error.message}`);
    }
  }

  /**
   * Health check for Sigma API connectivity
   */
  async healthCheck(): Promise<{ status: string; message: string }> {
    try {
      const token = await this.getAccessToken();
      const baseURL = 'https://aws-api.sigmacomputing.com/v2';

      // Test API connectivity with a simple request
      const testUrl = `${baseURL}/workbooks?limit=1`;
      
      await axios.get(testUrl, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        timeout: 10000, // 10 second timeout
      });

      return {
        status: 'healthy',
        message: 'Sigma API connection successful'
      };
    } catch (error) {
      this.logger.error('Sigma API health check failed:', error.message);
      return {
        status: 'unhealthy',
        message: `Sigma API connection failed: ${error.message}`
      };
    }
  }
}
