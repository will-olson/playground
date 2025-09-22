# Section 9: 🔐 Security & Access Control Framework

**Lines:** 2176-2392 (216 lines)

**Code Blocks:** 1

**Key Patterns:** 5

**Implementation Steps:** 5

---

## **9. 🔐 Security & Access Control Framework**

### **PRD Alignment**: Phase 1 MVP - "User Accounts & Profiles" + Phase 2 - "Community Engagement"

### **Current State**: Basic JWT authentication without comprehensive security framework

### **Expedited Opportunity**: Implement enterprise-grade security and access control

**Key Resources**:
- `@sigmaEmbed/generateEmbedClientCredentials.md` - Client credentials management
- `@sigmaEmbed/jwtClaimsReference.md` - JWT claims and security
- `@external/quickstarts-public/embedding_qs_series_2_api_use_cases/helpers/get-embed-user-token.js` - User token management

**Detailed Implementation**:
```typescript
// Security and access control framework
interface SecurityConfig {
  clientId: string;
  clientSecret: string;
  jwtAudience: string;
  sessionLength: number;
  tokenRefreshThreshold: number;
}

interface UserPermissions {
  canView: boolean;
  canEdit: boolean;
  canAdmin: boolean;
  canEmbed: boolean;
  teams: string[];
  accountType: 'view' | 'build' | 'admin';
}

class SecurityManager {
  private config: SecurityConfig;
  private tokenCache: Map<string, { token: string; expiry: number }> = new Map();

  constructor(config: SecurityConfig) {
    this.config = config;
  }

  async generateSecureJWT(userEmail: string, permissions: UserPermissions, workbookId: string): Promise<string> {
    const now = Math.floor(Date.now() / 1000);
    const payload = {
      iss: this.config.clientId,
      sub: userEmail,
      aud: this.config.jwtAudience,
      iat: now,
      exp: now + this.config.sessionLength,
      jti: this.generateJTI(),
      scope: 'embed',
      embed: {
        url: this.buildEmbedUrl(workbookId),
        permissions: this.mapPermissions(permissions)
      },
      // Additional security claims
      user_attributes: {
        account_type: permissions.accountType,
        teams: permissions.teams,
        first_name: permissions.firstName,
        last_name: permissions.lastName
      }
    };

    return this.signJWT(payload);
  }

  async validateUserAccess(userEmail: string, workbookId: string): Promise<boolean> {
    try {
      const userPermissions = await this.getUserPermissions(userEmail);
      const workbookPermissions = await this.getWorkbookPermissions(workbookId);
      
      return this.checkAccess(userPermissions, workbookPermissions);
    } catch (error) {
      console.error('Access validation failed:', error);
      return false;
    }
  }

  async refreshTokenIfNeeded(userEmail: string): Promise<string | null> {
    const cached = this.tokenCache.get(userEmail);
    const now = Math.floor(Date.now() / 1000);
    
    if (cached && now < cached.expiry - this.config.tokenRefreshThreshold) {
      return cached.token;
    }

    // Generate new token
    const newToken = await this.generateSecureJWT(userEmail, await this.getUserPermissions(userEmail), '');
    this.tokenCache.set(userEmail, {
      token: newToken,
      expiry: now + this.config.sessionLength
    });

    return newToken;
  }

  private async getUserPermissions(userEmail: string): Promise<UserPermissions> {
    // Implementation to fetch user permissions from Sigma API
    const response = await this.apiClient.get(`/members?search=${userEmail}`);
    const user = response.data.entries[0];
    
    return {
      canView: true,
      canEdit: user.accountType === 'build' || user.accountType === 'admin',
      canAdmin: user.accountType === 'admin',
      canEmbed: true,
      teams: user.teams || [],
      accountType: user.accountType
    };
  }

  private async getWorkbookPermissions(workbookId: string): Promise<any> {
    // Implementation to fetch workbook permissions
    const response = await this.apiClient.get(`/workbooks/${workbookId}/permissions`);
    return response.data;
  }

  private checkAccess(userPermissions: UserPermissions, workbookPermissions: any): boolean {
    // Implement access control logic
    return userPermissions.canView && 
           (workbookPermissions.isPublic || 
            workbookPermissions.sharedWith.includes(userPermissions.teams));
  }

  private mapPermissions(permissions: UserPermissions): string[] {
    const perms = ['view'];
    if (permissions.canEdit) perms.push('build');
    if (permissions.canAdmin) perms.push('admin');
    return perms;
  }

  private generateJTI(): string {
    return crypto.randomUUID();
  }

  private signJWT(payload: any): string {
    // Implementation to sign JWT with client secret
    return jwt.sign(payload, this.config.clientSecret, {
      algorithm: 'HS256',
      header: { kid: this.config.clientId }
    });
  }
}

// Security middleware
function withSecurity(handler: Function) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization?.replace('Bearer ', '');
      if (!token) {
        return res.status(401).json({ error: 'No token provided' });
      }

      const decoded = jwt.verify(token, process.env.CLIENT_SECRET);
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ error: 'Invalid token' });
    }
  };
}

// Access control component
function AccessControl({ user, workbook, children }) {
  const [hasAccess, setHasAccess] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAccess = async () => {
      try {
        const access = await securityManager.validateUserAccess(user.email, workbook.id);
        setHasAccess(access);
      } catch (error) {
        console.error('Access check failed:', error);
        setHasAccess(false);
      } finally {
        setLoading(false);
      }
    };

    checkAccess();
  }, [user.email, workbook.id]);

  if (loading) {
    return <div className="access-loading">Checking access...</div>;
  }

  if (!hasAccess) {
    return (
      <div className="access-denied">
        <h3>Access Denied</h3>
        <p>You don't have permission to view this workbook.</p>
        <button onClick={() => requestAccess(workbook.id)}>
          Request Access
        </button>
      </div>
    );
  }

  return children;
}
```

**Advanced Features Available**:
- **JWT Security**: Secure token generation with proper claims and expiration
- **Access Control**: Granular permission checking and validation
- **Token Management**: Automatic token refresh and caching
- **User Impersonation**: Admin ability to view embeds as other users
- **Audit Logging**: Track all access attempts and security events
- **Rate Limiting**: Prevent abuse with request rate limiting
- **Session Management**: Secure session handling and timeout

**Impact**: Ensures enterprise-grade security and access control for the platform

---
