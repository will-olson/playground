# Section 2: 📊 User Management & Access Control System

**Lines:** 194-375 (181 lines)

**Code Blocks:** 3

**Key Patterns:** 8

**Implementation Steps:** 5

---

## **2. 📊 User Management & Access Control System**

### **PRD Alignment**: Phase 1 MVP - "User Accounts & Profiles" + Phase 2 - "Community Engagement"

### **Current State**: ✅ **BREAKTHROUGH** - Debug-embed page reveals critical JWT configuration patterns
- **Working Pattern**: Proper `isEmbedUser` detection based on email domain
- **Authentication Success**: Real 2FA integration working seamlessly
- **User Type Detection**: Internal vs external user handling proven

### **🚀 Critical Implementation Based on Debug-Embed Success**
```typescript
// Apply debug-embed authentication patterns to user management
const userTypeDetection = {
  isInternalUser: (email: string) => email.endsWith('@sigmacomputing.com'),
  
  getJWTConfig: (email: string) => ({
    sessionLength: 3600,
    isEmbedUser: !email.endsWith('@sigmacomputing.com'),
    ...(email.endsWith('@sigmacomputing.com') ? {} : {
      accountType: 'viewer',
      teams: ['test-team']
    })
  })
};

// Universal User Management with Debug-Embed Pattern
function UserManagementDebug({ userId, showDebugMode = false }) {
  const [user, setUser] = useState(null);
  const [jwtConfig, setJwtConfig] = useState(null);
  const [embedTest, setEmbedTest] = useState(null);

  const testUserEmbed = async (userEmail: string) => {
    const config = userTypeDetection.getJWTConfig(userEmail);
    const response = await fetch('/api/v1/sigma/embed', {
      method: 'POST',
      body: JSON.stringify({
        workbookPath: 'workbook/test-workbook',
        userEmail,
        options: { jwtOptions: config }
      })
    });
    
    const data = await response.json();
    setEmbedTest({
      success: data.success,
      embedURL: data.embedURL,
      config
    });
  };

  return (
    <div className="user-management-debug">
      {showDebugMode && (
        <div className="debug-panel">
          <h3>User Authentication Debug</h3>
          <div className="user-info">
            <p>Email: {user?.email}</p>
            <p>Type: {userTypeDetection.isInternalUser(user?.email) ? 'Internal' : 'External'}</p>
            <p>JWT Config: {JSON.stringify(jwtConfig, null, 2)}</p>
          </div>
          <Button onClick={() => testUserEmbed(user?.email)}>
            Test User Embed
          </Button>
          {embedTest && (
            <div className="embed-test-result">
              <h4>Embed Test Result</h4>
              <p>Success: {embedTest.success ? '✅' : '❌'}</p>
              <p>URL: {embedTest.embedURL}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
```

### **Expedited Opportunity**: Leverage Sigma's built-in user management APIs

**Key Resources**:
- `@external/sigma-sample-api/batch_update_users.py` - User management patterns
- `@sigmaEmbed/manageAccess.md` - Access control strategies
- `@external/quickstarts-public/sigma-api-recipes/members/` - Complete user API examples
- `@external/quickstarts-public/embedding_qs_series_2_api_use_cases/helpers/provision.js` - User provisioning

**Detailed Implementation**:
```javascript
// Backend: Complete user management system
const { provisionEmbedUser, lookupMemberId, getTeamIdByName } = require('./helpers/provision');

// User provisioning with team assignment
async function createSigmaUser(userData) {
  const { email, firstName, lastName, memberType = 'View' } = userData;
  
  try {
    // Check if user exists
    const existingMember = await lookupMemberId(email);
    return existingMember;
  } catch (error) {
    // Create new embed user
    const memberId = await provisionEmbedUser(email, firstName, lastName, memberType);
    return memberId;
  }
}

// Team-based access control
async function assignUserToTeam(email, teamName) {
  const teamId = await getTeamIdByName(teamName);
  const memberId = await lookupMemberId(email);
  
  // Add user to team via Sigma API
  await fetch(`${BASE_URL}/teams/${teamId}/members`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
    body: JSON.stringify({ memberId, isTeamAdmin: false })
  });
}

// JWT generation with proper claims
function generateUserJWT(userEmail, permissions = ['view']) {
  return jwt.sign({
    iss: process.env.CLIENT_ID,
    sub: userEmail,
    aud: "https://sigmacomputing.com/iam",
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 3600,
    jti: uuidv4(),
    scope: "embed",
    embed: {
      url: embedUrl,
      permissions: permissions
    }
  }, process.env.SECRET, { algorithm: 'HS256' });
}
```

**Frontend Integration**:
```typescript
// Enhanced user profile with Sigma data
function UserProfile({ userId }) {
  const [userData, setUserData] = useState(null);
  const [teams, setTeams] = useState([]);
  
  useEffect(() => {
    // Fetch user data from Sigma API
    fetchUserProfile(userId).then(setUserData);
    fetchUserTeams(userId).then(setTeams);
  }, [userId]);
  
  return (
    <div className="user-profile">
      <h2>{userData?.firstName} {userData?.lastName}</h2>
      <p>{userData?.email}</p>
      <div className="teams">
        <h3>Teams:</h3>
        {teams.map(team => (
          <span key={team.id} className="team-badge">{team.name}</span>
        ))}
      </div>
      <div className="permissions">
        <h3>Access Level:</h3>
        <span className={`permission-badge ${userData?.memberType?.toLowerCase()}`}>
          {userData?.memberType}
        </span>
      </div>
    </div>
  );
}
```

**Advanced Features Available**:
- **Automatic User Provisioning**: Create embed users on-demand
- **Team Management**: Assign users to teams for content access
- **Permission-Based UI**: Show/hide features based on user permissions
- **User Attributes**: Store custom user data in Sigma
- **Batch Operations**: Update multiple users via CSV import
- **Access Control**: Granular permissions per workbook/team

**Impact**: Enables PRD Phase 2 features like "Follow authors" and "Recent Activity" by leveraging Sigma's native user system

---
