import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

export interface SigmaMember {
  memberId: string;
  memberType: string;
  email: string;
  firstName: string;
  lastName: string;
}

@Injectable()
export class SigmaMemberService {
  private readonly logger = new Logger(SigmaMemberService.name);

  constructor(
    private configService: ConfigService,
    private httpService: HttpService,
  ) {}

  async getSigmaAccessToken(): Promise<string> {
    const authURL = this.configService.get<string>('SIGMA_AUTH_URL');
    const clientId = this.configService.get<string>('SIGMA_CLIENT_ID');
    const clientSecret = this.configService.get<string>('SIGMA_CLIENT_SECRET');

    if (!authURL || !clientId || !clientSecret) {
      throw new Error('Sigma authentication credentials not configured');
    }

    try {
      const requestData = new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: clientId,
        client_secret: clientSecret,
      });

      this.logger.log(`Requesting Sigma access token from: ${authURL}`);
      
      const response = await firstValueFrom(
        this.httpService.post(authURL, requestData, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        })
      );

      this.logger.log('Sigma access token obtained successfully');
      return response.data.access_token;
    } catch (error) {
      this.logger.error('Failed to obtain Sigma access token:', error.response?.data || error.message);
      throw new Error('Failed to obtain Sigma access token');
    }
  }

  async memberExists(email: string, accessToken: string): Promise<boolean> {
    const baseURL = this.configService.get<string>('SIGMA_BASE_URL');
    const requestURL = `${baseURL}/members?search=${encodeURIComponent(email)}`;
    
    try {
      this.logger.log(`Checking if member exists: ${email}`);
      
      const response = await firstValueFrom(
        this.httpService.get(requestURL, {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Accept': 'application/json',
          },
        })
      );

      const members = response.data.entries || [];
      const exists = members.some((member: any) => 
        member.email.toLowerCase() === email.toLowerCase()
      );

      this.logger.log(`Member check result: ${exists ? 'Exists' : 'Does not exist'}`);
      return exists;
    } catch (error) {
      this.logger.error('Error checking member existence:', error.response?.data || error.message);
      throw new Error('Failed to check member existence');
    }
  }

  async createSigmaMember(userData: {
    email: string;
    firstName: string;
    lastName: string;
    memberType: 'creator' | 'explorer' | 'viewer' | 'admin';
  }): Promise<SigmaMember> {
    const accessToken = await this.getSigmaAccessToken();
    const baseURL = this.configService.get<string>('SIGMA_BASE_URL');

    if (!baseURL) {
      throw new Error('SIGMA_BASE_URL not configured');
    }

    // Check if member already exists
    const exists = await this.memberExists(userData.email, accessToken);
    if (exists) {
      this.logger.warn(`Member with email ${userData.email} already exists`);
      throw new Error('Member already exists in Sigma');
    }

    const requestURL = `${baseURL}/members`;
    const payload = {
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      memberType: userData.memberType,
      isGuest: false,
    };

    try {
      this.logger.log(`Creating Sigma member: ${userData.email} (${userData.memberType})`);
      
      const response = await firstValueFrom(
        this.httpService.post(requestURL, payload, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
          },
        })
      );

      const result: SigmaMember = {
        memberId: response.data.memberId,
        memberType: response.data.memberType,
        email: response.data.email,
        firstName: response.data.firstName,
        lastName: response.data.lastName,
      };

      this.logger.log(`✅ Sigma member created successfully: ${result.memberId} (${result.memberType})`);
      return result;
    } catch (error) {
      this.logger.error('Error creating Sigma member:', error.response?.data || error.message);
      throw new Error('Failed to create Sigma member');
    }
  }

  async getMemberDetails(memberId: string): Promise<SigmaMember> {
    const accessToken = await this.getSigmaAccessToken();
    const baseURL = this.configService.get<string>('SIGMA_BASE_URL');
    const requestURL = `${baseURL}/members/${memberId}`;

    try {
      const response = await firstValueFrom(
        this.httpService.get(requestURL, {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Accept': 'application/json',
          },
        })
      );

      return {
        memberId: response.data.memberId,
        memberType: response.data.memberType,
        email: response.data.email,
        firstName: response.data.firstName,
        lastName: response.data.lastName,
      };
    } catch (error) {
      this.logger.error('Error getting member details:', error.response?.data || error.message);
      throw new Error('Failed to get member details');
    }
  }

  async getMemberByEmail(email: string): Promise<SigmaMember | null> {
    const accessToken = await this.getSigmaAccessToken();
    const baseURL = this.configService.get<string>('SIGMA_BASE_URL');
    const requestURL = `${baseURL}/members?search=${encodeURIComponent(email)}`;
    
    try {
      this.logger.log(`Searching for member by email: ${email}`);
      
      const response = await firstValueFrom(
        this.httpService.get(requestURL, {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Accept': 'application/json',
          },
        })
      );

      const members = response.data.entries || [];
      const member = members.find((m: any) => 
        m.email.toLowerCase() === email.toLowerCase()
      );

      if (member) {
        return {
          memberId: member.memberId,
          memberType: member.memberType,
          email: member.email,
          firstName: member.firstName,
          lastName: member.lastName,
        };
      }

      return null;
    } catch (error) {
      this.logger.error('Error searching for member by email:', error.response?.data || error.message);
      throw new Error('Failed to search for member by email');
    }
  }
}

