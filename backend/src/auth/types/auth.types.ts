export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface AuthUser {
  id: string;
  username: string;
  email: string;
  is_admin: boolean;
  is_verified: boolean;
  is_active: boolean;
}

export interface JwtPayload {
  sub: string;
  username: string;
  email: string;
  is_admin: boolean;
  iat?: number;
  exp?: number;
}
