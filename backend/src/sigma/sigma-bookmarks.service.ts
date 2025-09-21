import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SigmaApiService } from './sigma-api.service';

@Injectable()
export class SigmaBookmarksService {
  private readonly logger = new Logger(SigmaBookmarksService.name);

  constructor(
    private readonly configService: ConfigService,
    private readonly sigmaApiService: SigmaApiService,
  ) {}

  /**
   * Create a bookmark for a workbook
   */
  async createBookmark(userEmail: string, workbookUrlId: string, exploreKey: string, name: string): Promise<any> {
    try {
      // Get workbook metadata first
      const metadata = await this.getWorkbookMetadata(userEmail, workbookUrlId);
      const { workbookId, workbookVersion } = metadata;

      if (!workbookId || typeof workbookVersion !== 'number') {
        throw new Error('Failed to retrieve workbookId or workbookVersion');
      }

      const payload = {
        workbookVersion,
        name,
        isShared: true,
        exploreKey,
      };

      this.logger.debug(`Creating bookmark for workbook ${workbookId}:`, payload);

      const response = await fetch(
        `https://aws-api.sigmacomputing.com/v2/workbooks/${workbookId}/bookmarks`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${await this.sigmaApiService.getAccessToken()}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );

      let json;
      try {
        json = await response.json();
      } catch (err) {
        const text = await response.text();
        throw new Error(`Sigma API ${response.status}: ${text}`);
      }

      if (!response.ok) {
        throw new Error(
          `Sigma API error ${response.status}: ${JSON.stringify(json)}`
        );
      }

      return {
        bookmarkId: json.bookmarkId ?? json.id,
        name: json.name,
        exploreKey: json.exploreKey,
      };
    } catch (error) {
      this.logger.error(`Error creating bookmark: ${error.message}`);
      throw error;
    }
  }

  /**
   * List all bookmarks for a workbook
   */
  async listBookmarksForWorkbook(workbookId: string): Promise<any[]> {
    try {
      const url = `https://aws-api.sigmacomputing.com/v2/workbooks/${workbookId}/bookmarks`;
      this.logger.debug(`Fetching bookmarks from: ${url}`);

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${await this.sigmaApiService.getAccessToken()}`,
          'Accept': 'application/json',
        },
      });

      const text = await response.text();
      this.logger.debug(`Raw Sigma response: ${text}`);

      if (!response.ok) {
        throw new Error(`Bookmark fetch failed: ${response.status} ${response.statusText}`);
      }

      let data;
      try {
        data = JSON.parse(text);
      } catch (err) {
        throw new Error('Invalid JSON from Sigma: ' + err.message);
      }

      this.logger.debug(`Parsed bookmark entries: ${data.entries?.length || 0}`);
      return data.entries || [];
    } catch (error) {
      this.logger.error(`Error listing bookmarks: ${error.message}`);
      throw error;
    }
  }

  /**
   * Delete a bookmark
   */
  async deleteBookmark(workbookId: string, bookmarkId: string): Promise<void> {
    try {
      const url = `https://aws-api.sigmacomputing.com/v2/workbooks/${workbookId}/bookmarks/${bookmarkId}`;
      this.logger.debug(`Deleting bookmark: ${url}`);

      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${await this.sigmaApiService.getAccessToken()}`,
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Bookmark deletion failed: ${response.status} ${response.statusText}`);
      }

      this.logger.debug(`Successfully deleted bookmark ${bookmarkId}`);
    } catch (error) {
      this.logger.error(`Error deleting bookmark: ${error.message}`);
      throw error;
    }
  }

  /**
   * Get workbook metadata (simplified version)
   */
  private async getWorkbookMetadata(userEmail: string, workbookUrlId: string): Promise<any> {
    try {
      // Get all workbooks accessible to the user
      const workbooks = await this.sigmaApiService.getUserWorkbooks(userEmail);
      
      // Find the workbook by URL ID
      const workbook = workbooks.find(wb => 
        wb.url?.endsWith(`/workbook/${workbookUrlId}`)
      );

      if (!workbook) {
        throw new Error(`Workbook not found for workbookUrlId: ${workbookUrlId}`);
      }

      const urlParts = workbook.url.split('/');
      const orgSlug = urlParts[3];

      return {
        orgSlug,
        workbookName: workbook.name.replace(/\s+/g, '_'),
        workbookUrlId,
        workbookId: workbook.id,
        workbookVersion: workbook.latestVersion,
      };
    } catch (error) {
      this.logger.error(`Error getting workbook metadata: ${error.message}`);
      throw error;
    }
  }
}
