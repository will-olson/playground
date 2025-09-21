import { Injectable, UnauthorizedException, ConflictException, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { AuthTokens, AuthUser } from './types/auth.types';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
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

    // Generate tokens
    const tokens = await this.generateTokens(user);

    return tokens;
  }

  async login(loginDto: LoginDto): Promise<AuthTokens> {
    const { email, password } = loginDto;

    console.log('Login attempt for:', email);

    // First try Sigma authentication
    try {
      console.log('Attempting Sigma authentication...');
      const sigmaTokens = await this.authenticateSigmaUser(email, password);
      if (sigmaTokens) {
        console.log('Sigma authentication successful');
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

    // Update last login
    await this.prisma.user.update({
      where: { id: user.id },
      data: { last_login_at: new Date() },
    });

    // Generate tokens
    const tokens = await this.generateTokens(user);

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
}

