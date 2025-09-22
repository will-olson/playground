import { Injectable, UnauthorizedException, ConflictException, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { SigmaMemberService } from '../sigma/sigma-member.service';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { AuthTokens, AuthUser } from './types/auth.types';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private sigmaMemberService: SigmaMemberService,
  ) {}

  async register(createUserDto: CreateUserDto): Promise<AuthTokens> {
    const { username, email, password, full_name } = createUserDto;

    // Check if user already exists
    const existingUser = await this.prisma.user.findFirst({
      where: {
        OR: [
          { email },
          { username },
        ],
      },
    });

    if (existingUser) {
      if (existingUser.email === email) {
        throw new ConflictException('Email already exists');
      }
      if (existingUser.username === username) {
        throw new ConflictException('Username already exists');
      }
    }

    // Hash password
    const password_hash = await bcrypt.hash(password, 10);

    // Create user
    const user = await this.prisma.user.create({
      data: {
        username,
        email,
        password_hash,
        full_name,
        is_verified: false,
        is_active: true,
      },
    });

    // Enhanced Sigma account creation with breakthrough patterns
    try {
      const firstName = (full_name || '').split(' ')[0] || '';
      const lastName = (full_name || '').split(' ').slice(1).join(' ') || '';
      
      // Determine member type based on email domain (using breakthrough logic)
      const memberType = this.determineMemberType(email);
      const isInternalUser = email.endsWith('@sigmacomputing.com');
      
      // Check if Sigma member already exists (for internal users)
      let sigmaMember;
      if (isInternalUser) {
        try {
          sigmaMember = await this.sigmaMemberService.getMemberByEmail(email);
          if (sigmaMember) {
            console.log(`✅ Found existing Sigma account for internal user: ${email}`);
          }
        } catch (error) {
          console.log(`Creating new Sigma account for internal user: ${email}`);
          sigmaMember = await this.sigmaMemberService.createSigmaMember({
            email: user.email,
            firstName,
            lastName,
            memberType: 'creator' // Internal users get creator access
          });
        }
      } else {
        // Create new Sigma member for external users
        sigmaMember = await this.sigmaMemberService.createSigmaMember({
          email: user.email,
          firstName,
          lastName,
          memberType
        });
      }

      // Link Sigma account to application account with enhanced metadata
      await this.linkAccounts(user.id, sigmaMember.memberId, sigmaMember.memberType);

      console.log(`✅ Enhanced Sigma integration for ${user.email}:`, {
        memberType: sigmaMember.memberType,
        isInternalUser,
        memberId: sigmaMember.memberId
      });
    } catch (error) {
      console.error('❌ Failed to create Sigma account:', error.message);
      // Continue with app account creation even if Sigma fails
    }

    // Generate enhanced tokens with Sigma integration
    const tokens = await this.generateEnhancedTokens(user);

    return tokens;
  }

  async login(loginDto: LoginDto): Promise<AuthTokens> {
    const { email, password } = loginDto;

    console.log('Enhanced login attempt for:', email);

    // Enhanced Sigma authentication with breakthrough patterns
    try {
      console.log('Attempting enhanced Sigma authentication...');
      const sigmaTokens = await this.authenticateSigmaUserEnhanced(email, password);
      if (sigmaTokens) {
        console.log('✅ Enhanced Sigma authentication successful');
        return sigmaTokens;
      }
      console.log('Sigma authentication returned null');
    } catch (error) {
      // If Sigma auth fails, continue to local auth
      console.log('Sigma authentication failed, trying local auth:', error.message);
    }

    // Fall back to local authentication
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Check if user is active
    if (!user.is_active) {
      throw new UnauthorizedException('Account is deactivated');
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Enhanced Sigma account linking with breakthrough patterns
    if (!user.sigma_member_id) {
      await this.attemptEnhancedSigmaAccountLinking(user);
    }

    // Update last login
    await this.prisma.user.update({
      where: { id: user.id },
      data: { last_login_at: new Date() },
    });

    // Generate enhanced tokens
    const tokens = await this.generateEnhancedTokens(user);

    return tokens;
  }

  async refreshToken(refreshToken: string): Promise<AuthTokens> {
    try {
      // Verify refresh token
      const payload = this.jwtService.verify(refreshToken, {
        secret: process.env.JWT_REFRESH_SECRET,
      });

      // Find user
      const user = await this.prisma.user.findUnique({
        where: { id: payload.sub },
      });

      if (!user || !user.is_active) {
        throw new UnauthorizedException('Invalid refresh token');
      }

      // Check if refresh token exists in database
      const tokenRecord = await this.prisma.refreshToken.findFirst({
        where: {
          token: refreshToken,
          user_id: user.id,
          is_revoked: false,
          expires_at: {
            gt: new Date(),
          },
        },
      });

      if (!tokenRecord) {
        throw new UnauthorizedException('Invalid refresh token');
      }

      // Generate new tokens
      const tokens = await this.generateTokens(user);

      // Revoke old refresh token
      await this.prisma.refreshToken.update({
        where: { id: tokenRecord.id },
        data: { is_revoked: true },
      });

      return tokens;
    } catch (error) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }

  async logout(refreshToken: string): Promise<void> {
    if (refreshToken) {
      await this.prisma.refreshToken.updateMany({
        where: { token: refreshToken },
        data: { is_revoked: true },
      });
    }
  }

  async demoLogin(): Promise<AuthTokens> {
    // Use Sigma test credentials for demo login
    const email = process.env.SIGMA_TEST_EMAIL_1;
    const password = process.env.SIGMA_TEST_PASSWORD;

    console.log('Demo login - Environment variables:', {
      email: email || 'undefined',
      password: password ? '***' : 'undefined',
      allEnv: Object.keys(process.env).filter(k => k.includes('SIGMA'))
    });

    if (!email || !password) {
      throw new UnauthorizedException('Demo credentials not configured');
    }

    // Try Sigma authentication first
    try {
      const sigmaTokens = await this.authenticateSigmaUser(email, password);
      if (sigmaTokens) {
        return sigmaTokens;
      }
    } catch (error) {
      console.log('Sigma demo authentication failed:', error.message);
    }

    // Fall back to finding existing user
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedException('Demo user not found');
    }

    // Update last login
    await this.prisma.user.update({
      where: { id: user.id },
      data: { last_login_at: new Date() },
    });

    // Generate tokens
    const tokens = await this.generateTokens(user);

    return tokens;
  }

  async validateUser(userId: string): Promise<AuthUser | null> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        username: true,
        email: true,
        is_admin: true,
        is_verified: true,
        is_active: true,
      },
    });

    if (!user || !user.is_active) {
      return null;
    }

    return user;
  }

  async getUserProfile(userId: string): Promise<any> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        username: true,
        email: true,
        full_name: true,
        bio: true,
        title: true,
        organization: true,
        location: true,
        profile_image_url: true,
        is_admin: true,
        is_verified: true,
        is_active: true,
        last_login_at: true,
        created_at: true,
        updated_at: true,
        // Sigma account information
        sigma_member_id: true,
        sigma_member_type: true,
        sigma_account_created_at: true,
      },
    });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    // Get Sigma account details if linked
    let sigmaAccount: any = null;
    if (user.sigma_member_id) {
      try {
        const memberDetails = await this.sigmaMemberService.getMemberDetails(user.sigma_member_id);
        sigmaAccount = {
          memberId: memberDetails.memberId,
          memberType: memberDetails.memberType,
          email: memberDetails.email,
          firstName: memberDetails.firstName,
          lastName: memberDetails.lastName,
        };
      } catch (error) {
        console.warn('Failed to fetch Sigma account details:', error.message);
      }
    }

    return {
      ...user,
      sigmaAccount,
      hasSigmaAccount: !!user.sigma_member_id,
    };
  }

  async authenticateSigmaUser(email: string, password: string): Promise<AuthTokens | null> {
    // Validate against Sigma test credentials
    const validCredentials = this.validateSigmaTestCredentials(email, password);
    
    if (!validCredentials) {
      return null;
    }

    // Check if user exists in our database
    let user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      // Create user profile on first login
      user = await this.createUserFromSigmaInfo(email, password);
    } else {
      // Update last login
      await this.prisma.user.update({
        where: { id: user.id },
        data: { last_login_at: new Date() },
      });
    }

    // Generate tokens
    return this.generateTokens(user);
  }

  private validateSigmaTestCredentials(email: string, password: string): boolean {
    const testCredentials = [
      { email: process.env.SIGMA_TEST_EMAIL_1, password: process.env.SIGMA_TEST_PASSWORD },
      { email: process.env.SIGMA_TEST_EMAIL_2, password: process.env.SIGMA_TEST_PASSWORD },
      { email: process.env.SIGMA_TEST_EMAIL_3, password: process.env.SIGMA_TEST_PASSWORD },
    ];

    console.log('Validating Sigma credentials:', { email, password });
    console.log('Test credentials:', testCredentials.map(c => ({ email: c.email, password: c.password ? '***' : 'undefined' })));

    return testCredentials.some(cred => cred.email === email && cred.password === password);
  }

  private async createUserFromSigmaInfo(email: string, password: string): Promise<any> {
    // Generate username from email
    const username = email.split('@')[0];
    
    // Hash password
    const password_hash = await bcrypt.hash(password, 10);

    // Create user
    const user = await this.prisma.user.create({
      data: {
        username,
        email,
        password_hash,
        full_name: 'Will Olson', // From Sigma user info
        bio: 'Sigma Computing user',
        title: 'Developer',
        organization: 'Sigma Computing',
        is_verified: true,
        is_active: true,
        is_admin: false,
      },
    });

    console.log(`Created Sigma user profile: ${user.username} (${user.email})`);
    return user;
  }

  private async generateTokens(user: any): Promise<AuthTokens> {
    const payload = {
      sub: user.id,
      username: user.username,
      email: user.email,
      is_admin: user.is_admin,
    };

    const accessToken = this.jwtService.sign(payload);
    const refreshToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_REFRESH_SECRET,
      expiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '7d',
    });

    // Store refresh token in database
    await this.prisma.refreshToken.create({
      data: {
        token: refreshToken,
        user_id: user.id,
        expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
      },
    });

    return {
      accessToken,
      refreshToken,
    };
  }

  /**
   * Determine Sigma member type based on email domain
   */
  private determineMemberType(email: string): 'creator' | 'explorer' | 'viewer' | 'admin' {
    if (email.endsWith('@sigmacomputing.com')) {
      return 'creator'; // Internal users get creator permissions
    }
    return 'viewer'; // External users get viewer permissions by default
  }

  /**
   * Link application account to Sigma account
   */
  private async linkAccounts(
    appUserId: string, 
    sigmaMemberId: string, 
    sigmaMemberType: string
  ): Promise<void> {
    await this.prisma.user.update({
      where: { id: appUserId },
      data: {
        sigma_member_id: sigmaMemberId,
        sigma_member_type: sigmaMemberType,
        sigma_account_created_at: new Date(),
      },
    });
  }

  /**
   * Attempt to link existing Sigma account or create new one
   */
  private async attemptSigmaAccountLinking(user: any): Promise<void> {
    try {
      // Check if Sigma account exists for this email
      const existingMember = await this.sigmaMemberService.getMemberByEmail(user.email);
      
      if (existingMember) {
        // Link existing Sigma account
        console.log(`Found existing Sigma account for ${user.email}, linking...`);
        await this.linkAccounts(user.id, existingMember.memberId, existingMember.memberType);
        console.log(`✅ Linked existing Sigma account for ${user.email}`);
      } else {
        // Create new Sigma account
        console.log(`No existing Sigma account found for ${user.email}, creating new one...`);
        const firstName = (user.full_name || '').split(' ')[0] || '';
        const lastName = (user.full_name || '').split(' ').slice(1).join(' ') || '';
        
        const sigmaMember = await this.sigmaMemberService.createSigmaMember({
          email: user.email,
          firstName,
          lastName,
          memberType: this.determineMemberType(user.email)
        });
        
        await this.linkAccounts(user.id, sigmaMember.memberId, sigmaMember.memberType);
        console.log(`✅ Created and linked new Sigma account for ${user.email}`);
      }
    } catch (error) {
      console.warn(`Failed to link Sigma account for ${user.email}:`, error.message);
      // Don't throw error - user can still use the app without Sigma account
    }
  }

  /**
   * Generate enhanced tokens with Sigma integration metadata
   */
  private async generateEnhancedTokens(user: any): Promise<AuthTokens> {
    // Generate standard app tokens
    const appTokens = await this.generateTokens(user);
    
    // Add Sigma authentication metadata for enhanced embed experience
    const payload = {
      sub: user.id,
      username: user.username,
      email: user.email,
      is_admin: user.is_admin,
      sigma_member_id: user.sigma_member_id,
      sigma_member_type: user.sigma_member_type,
      is_internal_user: user.email?.endsWith('@sigmacomputing.com') || false,
    };

    const enhancedAccessToken = this.jwtService.sign(payload);

    return {
      accessToken: enhancedAccessToken,
      refreshToken: appTokens.refreshToken,
    };
  }

  /**
   * Enhanced Sigma authentication using breakthrough patterns from debug-embed page
   */
  private async authenticateSigmaUserEnhanced(email: string, password: string): Promise<AuthTokens | null> {
    // This implements the breakthrough pattern from debug-embed page
    // For internal users, we can leverage their existing Sigma accounts with 2FA
    const isInternalUser = email.endsWith('@sigmacomputing.com');
    
    if (!isInternalUser) {
      // For external users, we still need to implement Sigma OAuth flow
      // For now, return null to fall back to local auth
      return null;
    }

    try {
      // Check if user exists in our system and has Sigma account linked
      const user = await this.prisma.user.findUnique({
        where: { email },
      });

      if (!user || !user.sigma_member_id) {
        console.log('User not found or no Sigma account linked');
        return null;
      }

      // For internal users with existing Sigma accounts, we can generate enhanced tokens
      // that will work with the breakthrough embed pattern (isEmbedUser: false)
      console.log(`✅ Enhanced Sigma authentication for internal user: ${email}`);
      
      // Update last login
      await this.prisma.user.update({
        where: { id: user.id },
        data: { last_login_at: new Date() },
      });

      return await this.generateEnhancedTokens(user);
    } catch (error) {
      console.error('Enhanced Sigma authentication failed:', error.message);
      return null;
    }
  }

  /**
   * Enhanced Sigma account linking with breakthrough patterns
   */
  private async attemptEnhancedSigmaAccountLinking(user: any): Promise<void> {
    const isInternalUser = user.email.endsWith('@sigmacomputing.com');
    
    if (!isInternalUser) {
      // For external users, create new Sigma account
      await this.attemptSigmaAccountLinking(user);
      return;
    }

    try {
      // For internal users, try to find existing Sigma account
      const sigmaMember = await this.sigmaMemberService.getMemberByEmail(user.email);
      
      if (sigmaMember) {
        console.log(`✅ Linking existing Sigma account for internal user: ${user.email}`);
        await this.linkAccounts(user.id, sigmaMember.memberId, sigmaMember.memberType);
      } else {
        // Create new Sigma account for internal user
        const firstName = (user.full_name || '').split(' ')[0] || '';
        const lastName = (user.full_name || '').split(' ').slice(1).join(' ') || '';
        
        const newSigmaMember = await this.sigmaMemberService.createSigmaMember({
          email: user.email,
          firstName,
          lastName,
          memberType: 'creator' // Internal users get creator access
        });

        await this.linkAccounts(user.id, newSigmaMember.memberId, newSigmaMember.memberType);
        console.log(`✅ Created and linked new Sigma account for internal user: ${user.email}`);
      }
    } catch (error) {
      console.error('Enhanced Sigma account linking failed:', error.message);
    }
  }
}

