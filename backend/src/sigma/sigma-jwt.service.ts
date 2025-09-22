import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as jwt from 'jsonwebtoken';
import * as uuid from 'uuid';

export interface SigmaJWTClaims {
  // Required claims
  sub: string;        // User email address (RFC-1035 compliant)
  jti: string;        // Unique JWT ID for replay protection
  iat: number;        // Issued at time (seconds from epoch)
  exp: number;        // Expiration time (max 30 days from iat)
  
  // Header claims
  alg: 'HS256';       // Algorithm (must be HS256)
  kid: string;        // Client ID (embed client ID)
  
  // Optional claims
  iss?: string;       // Issuer (embed client ID)
  aud?: string;       // Audience (must be 'sigmacomputing' for ver 1.1)
  ver?: '1.0' | '1.1'; // JWT version (defaults to 1.0)
  
  // User management claims (for embed users only)
  first_name?: string;
  last_name?: string;
  user_attributes?: Record<string, string>;
  account_type?: string;
  teams?: string[];
  
  // Connection claims (for ver 1.1 only)
  oauth_token?: string;                    // Encrypted OAuth token
  connection_oauth_tokens?: Record<string, string>; // Encrypted connection tokens
  eval_connection_id?: string;             // Connection ID override
}

export interface JWTGenerationOptions {
  sessionLength?: number;
  isEmbedUser?: boolean;
  firstName?: string;
  lastName?: string;
  userAttributes?: Record<string, string>;
  accountType?: string;
  teams?: string[];
  oauthToken?: string;
  connectionTokens?: Record<string, string>;
  evalConnectionId?: string;
}

@Injectable()
export class SigmaJWTService {
  constructor(private configService: ConfigService) {}

  async generateJWT(userEmail: string, options: JWTGenerationOptions = {}): Promise<string> {
    // Validate email format (RFC-1035 compliant)
    this.validateEmail(userEmail);

    const clientId = this.configService.get<string>('SIGMA_CLIENT_ID');
    const clientSecret = this.configService.get<string>('SIGMA_CLIENT_SECRET');
    
    if (!clientId || !clientSecret) {
      throw new Error('Sigma embed credentials not configured. Please set SIGMA_CLIENT_ID and SIGMA_CLIENT_SECRET environment variables.');
    }
    
    const now = Math.floor(Date.now() / 1000);
    const sessionLength = Math.min(options.sessionLength || 3600, 2592000); // Max 30 days
    const expirationTime = now + sessionLength;
    
    const claims: SigmaJWTClaims = {
      sub: userEmail,
      jti: uuid.v4(), // Unique JWT ID for replay protection
      iat: now,
      exp: expirationTime,
      alg: 'HS256',
      kid: clientId,
      iss: clientId,
      ver: '1.1',
      aud: 'sigmacomputing'
    };

    // Add optional claims for embed users
    // BREAKTHROUGH PATTERN: Use isEmbedUser: false for internal users to trigger real Sigma login
    if (options.isEmbedUser) {
      if (options.firstName) claims.first_name = options.firstName;
      if (options.lastName) claims.last_name = options.lastName;
      if (options.userAttributes) claims.user_attributes = options.userAttributes;
      if (options.accountType) claims.account_type = options.accountType;
      if (options.teams && options.teams.length > 0) claims.teams = options.teams;
    } else {
      // For internal users (isEmbedUser: false), we still include user info for enhanced experience
      // This enables the breakthrough pattern where internal users get real Sigma login with 2FA
      if (options.firstName) claims.first_name = options.firstName;
      if (options.lastName) claims.last_name = options.lastName;
      // Don't include accountType or teams for internal users - they use their real Sigma account
    }

    // Add connection tokens if provided (for ver 1.1)
    if (options.oauthToken) {
      claims.oauth_token = await this.encryptOAuthToken(options.oauthToken, clientSecret);
    }

    if (options.connectionTokens) {
      const encryptedTokens: Record<string, string> = {};
      for (const [connectionId, token] of Object.entries(options.connectionTokens)) {
        encryptedTokens[connectionId] = await this.encryptOAuthToken(token, clientSecret);
      }
      claims.connection_oauth_tokens = encryptedTokens;
    }

    if (options.evalConnectionId) {
      claims.eval_connection_id = options.evalConnectionId;
    }

    return jwt.sign(claims, clientSecret, {
      algorithm: 'HS256',
      header: {
        kid: clientId,
        alg: 'HS256'
      }
    });
  }

  private validateEmail(email: string): void {
    // Standard email validation - allow underscores in domain names
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!emailRegex.test(email)) {
      throw new Error('Invalid email format. Please provide a valid email address.');
    }

    // Only check for spaces (underscores are valid in email addresses)
    if (email.includes(' ')) {
      throw new Error('Email cannot contain spaces.');
    }
  }

  private async encryptOAuthToken(token: string, secret: string): Promise<string> {
    // For now, we'll use a simple encryption method
    // In production, you should use Sigma's Node.js Embed SDK
    const crypto = require('crypto');
    const cipher = crypto.createCipher('aes-256-cbc', secret);
    let encrypted = cipher.update(token, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
  }

  validateJWT(token: string): any {
    const clientSecret = this.configService.get<string>('SIGMA_CLIENT_SECRET');
    if (!clientSecret) {
      throw new Error('SIGMA_CLIENT_SECRET not configured');
    }

    try {
      return jwt.verify(token, clientSecret);
    } catch (error) {
      throw new Error(`Invalid JWT: ${error.message}`);
    }
  }
}
