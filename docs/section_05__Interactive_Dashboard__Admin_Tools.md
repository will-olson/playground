# Section 5: 🎛️ Interactive Dashboard & Admin Tools

**Lines:** 1024-1597 (573 lines)

**Code Blocks:** 12

**Key Patterns:** 10

**Implementation Steps:** 5

---

## **5. 🎛️ Interactive Dashboard & Admin Tools**

### **PRD Alignment**: Phase 2 - "Administrative Curation" + Phase 3 - "Polish & Expansion"

### **Current State**: ✅ **BREAKTHROUGH** - Debug-embed page provides comprehensive admin debugging patterns
- **Working Pattern**: Universal debug component with dual-mode testing
- **Real-Time Monitoring**: Live API testing and validation
- **Comprehensive Logging**: Full error handling and debugging information

### **🚀 Critical Implementation Based on Debug-Embed Success**
```typescript
// Apply debug-embed pattern to admin dashboard
const adminDashboardDebug = {
  testAllFeatures: async (userEmail: string) => {
    const features = [
      'workbook-embedding',
      'user-management', 
      'workbook-discovery',
      'sharing-features',
      'analytics'
    ];
    
    const results = {};
    for (const feature of features) {
      results[feature] = await this.testFeature(feature, userEmail);
    }
    
    return results;
  },
  
  testFeature: async (feature: string, userEmail: string) => {
    const config = userTypeDetection.getJWTConfig(userEmail);
    
    switch (feature) {
      case 'workbook-embedding':
        return this.testWorkbookEmbedding(userEmail, config);
      case 'user-management':
        return this.testUserManagement(userEmail, config);
      case 'workbook-discovery':
        return this.testWorkbookDiscovery(userEmail, config);
      case 'sharing-features':
        return this.testSharingFeatures(userEmail, config);
      case 'analytics':
        return this.testAnalytics(userEmail, config);
      default:
        return { success: false, error: 'Unknown feature' };
    }
  }
};

// Admin Dashboard with Debug-Embed Pattern
function AdminDashboardDebug({ userEmail, showDebugMode = true }) {
  const [systemStatus, setSystemStatus] = useState(null);
  const [isTesting, setIsTesting] = useState(false);

  const runSystemTest = async () => {
    setIsTesting(true);
    try {
      const results = await adminDashboardDebug.testAllFeatures(userEmail);
      setSystemStatus(results);
    } finally {
      setIsTesting(false);
    }
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      
      {showDebugMode && (
        <div className="debug-panel">
          <Button onClick={runSystemTest} disabled={isTesting}>
            {isTesting ? 'Running Tests...' : 'Run System Test'}
          </Button>
          
          {systemStatus && (
            <div className="system-status">
              <h3>System Status</h3>
              {Object.entries(systemStatus).map(([feature, result]) => (
                <div key={feature} className="feature-status">
                  <h4>{feature.replace('-', ' ').toUpperCase()}</h4>
                  <p>Status: {result.success ? '✅ Working' : '❌ Failed'}</p>
                  {result.error && <p>Error: {result.error}</p>}
                  {result.embedURL && (
                    <div className="embed-test">
                      <p>Test URL: {result.embedURL}</p>
                      <iframe src={result.embedURL} width="100%" height="200" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      
      <div className="admin-controls">
        <div className="control-section">
          <h3>User Management</h3>
          <UserManagementDebug userId="admin" showDebugMode={showDebugMode} />
        </div>
        
        <div className="control-section">
          <h3>Workbook Management</h3>
          <WorkbookDiscoveryDebug workbooks={[]} userEmail={userEmail} showDebugMode={showDebugMode} />
        </div>
        
        <div className="control-section">
          <h3>System Monitoring</h3>
          <div className="monitoring-panel">
            <p>JWT Configuration: {JSON.stringify(userTypeDetection.getJWTConfig(userEmail), null, 2)}</p>
            <p>User Type: {userTypeDetection.isInternalUser(userEmail) ? 'Internal' : 'External'}</p>
            <p>Last Test: {new Date().toISOString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### **Expedited Opportunity**: Build comprehensive admin and user dashboards

**Key Resources**:
- `@external/quickstarts-public/recipe-portal/` - Complete portal example with Next.js
- `@external/quickstarts-public/embedding_qs_series_2_api_use_cases/` - Admin API patterns
- `@external/sigma-sample-api/batch_update_users.py` - User management tools
- `@external/quickstarts-public/embedding_qs_series_2_api_use_cases/helpers/local-bookmark-store.js` - Local data management

**Detailed Implementation**:
```javascript
// Backend: Admin dashboard API
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

// Local database for admin features
const adapter = new FileSync('data/admin.json');
const adminDb = low(adapter);
adminDb.defaults({ 
  featuredItems: [], 
  analytics: {}, 
  userActivity: [],
  contentModeration: []
}).write();

// Admin API endpoints
app.get('/api/admin/dashboard', async (req, res) => {
  const stats = {
    totalUsers: await getTotalUsers(),
    totalWorkbooks: await getTotalWorkbooks(),
    featuredWorkbooks: await getFeaturedWorkbooks(),
    recentActivity: await getRecentActivity(),
    topAuthors: await getTopAuthors()
  };
  
  res.json(stats);
});

// Content curation
app.post('/api/admin/feature-workbook', async (req, res) => {
  const { workbookId, featureType, adminId } = req.body;
  
  const featuredItem = {
    id: uuidv4(),
    item_id: workbookId,
    item_type: 'workbook',
    feature_type: featureType,
    featured_date: new Date().toISOString().split('T')[0],
    curated_by_admin_id: adminId,
    created_at: new Date().toISOString()
  };
  
  adminDb.get('featuredItems').push(featuredItem).write();
  
  res.json({ success: true, featuredItem });
});

// User management
app.get('/api/admin/users', async (req, res) => {
  const { page = 1, limit = 20, search = '' } = req.query;
  
  const users = await getUsersWithPagination({
    page: parseInt(page),
    limit: parseInt(limit),
    search
  });
  
  res.json(users);
});

// Analytics tracking
app.post('/api/analytics/track', (req, res) => {
  const { event, userId, workbookId, metadata } = req.body;
  
  const activity = {
    id: uuidv4(),
    event,
    userId,
    workbookId,
    metadata,
    timestamp: new Date().toISOString()
  };
  
  adminDb.get('userActivity').push(activity).write();
  
  res.json({ success: true });
});
```

**Frontend: Admin Dashboard**:
```typescript
// Admin dashboard (inspired by recipe-portal)
function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [users, setUsers] = useState([]);
  const [featuredItems, setFeaturedItems] = useState([]);
  const [activeTab, setActiveTab] = useState('overview');
  
  useEffect(() => {
    fetchAdminStats().then(setStats);
    fetchUsers().then(setUsers);
    fetchFeaturedItems().then(setFeaturedItems);
  }, []);
  
  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h1>Sigma Playground Admin</h1>
        <div className="admin-actions">
          <button onClick={() => setActiveTab('curation')}>Content Curation</button>
          <button onClick={() => setActiveTab('users')}>User Management</button>
          <button onClick={() => setActiveTab('analytics')}>Analytics</button>
        </div>
      </header>
      
      <div className="admin-content">
        {activeTab === 'overview' && <OverviewTab stats={stats} />}
        {activeTab === 'curation' && <CurationTab featuredItems={featuredItems} />}
        {activeTab === 'users' && <UserManagementTab users={users} />}
        {activeTab === 'analytics' && <AnalyticsTab />}
      </div>
    </div>
  );
}

// Content curation interface
function CurationTab({ featuredItems }) {
  const [workbooks, setWorkbooks] = useState([]);
  const [selectedWorkbook, setSelectedWorkbook] = useState(null);
  
  return (
    <div className="curation-tab">
      <h2>Content Curation</h2>
      
      {/* Viz of the Day Selection */}
      <section className="viz-of-day">
        <h3>Viz of the Day</h3>
        <WorkbookSelector 
          workbooks={workbooks}
          onSelect={setSelectedWorkbook}
        />
        {selectedWorkbook && (
          <div className="preview-section">
            <WorkbookPreview workbook={selectedWorkbook} />
            <button 
              onClick={() => featureWorkbook(selectedWorkbook.id, 'viz_of_the_day')}
              className="feature-button"
            >
              Set as Viz of the Day
            </button>
          </div>
        )}
      </section>
      
      {/* Featured Authors */}
      <section className="featured-authors">
        <h3>Featured Authors</h3>
        <AuthorSelector onSelect={(author) => featureAuthor(author.id)} />
      </section>
      
      {/* Current Featured Items */}
      <section className="current-featured">
        <h3>Currently Featured</h3>
        <div className="featured-list">
          {featuredItems.map(item => (
            <FeaturedItemCard 
              key={item.id} 
              item={item}
              onRemove={() => removeFeaturedItem(item.id)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

// User management interface
function UserManagementTab({ users }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([]);
  
  const filteredUsers = users.filter(user => 
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="user-management-tab">
      <h2>User Management</h2>
      
      <div className="user-controls">
        <input 
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        
        <div className="bulk-actions">
          <button 
            onClick={() => bulkUpdateUsers(selectedUsers, 'suspend')}
            disabled={selectedUsers.length === 0}
          >
            Suspend Selected
          </button>
          <button 
            onClick={() => bulkUpdateUsers(selectedUsers, 'activate')}
            disabled={selectedUsers.length === 0}
          >
            Activate Selected
          </button>
        </div>
      </div>
      
      <div className="users-table">
        <table>
          <thead>
            <tr>
              <th><input type="checkbox" onChange={handleSelectAll} /></th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Workbooks</th>
              <th>Last Active</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(user => (
              <UserRow 
                key={user.id}
                user={user}
                onSelect={handleUserSelect}
                onUpdate={handleUserUpdate}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// User dashboard
function UserDashboard({ userId }) {
  const [userData, setUserData] = useState(null);
  const [userWorkbooks, setUserWorkbooks] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [activity, setActivity] = useState([]);
  
  return (
    <div className="user-dashboard">
      <header className="user-header">
        <h1>My Dashboard</h1>
        <div className="user-stats">
          <div className="stat">
            <span className="stat-number">{userWorkbooks.length}</span>
            <span className="stat-label">Workbooks</span>
          </div>
          <div className="stat">
            <span className="stat-number">{favorites.length}</span>
            <span className="stat-label">Favorites</span>
          </div>
          <div className="stat">
            <span className="stat-number">{userData?.followers || 0}</span>
            <span className="stat-label">Followers</span>
          </div>
        </div>
      </header>
      
      <div className="dashboard-content">
        <div className="dashboard-grid">
          <section className="my-workbooks">
            <h2>My Workbooks</h2>
            <WorkbookGrid workbooks={userWorkbooks} />
          </section>
          
          <section className="favorites">
            <h2>Favorites</h2>
            <WorkbookGrid workbooks={favorites} />
          </section>
          
          <section className="activity-feed">
            <h2>Recent Activity</h2>
            <ActivityFeed activities={activity} />
          </section>
          
          <section className="profile-settings">
            <h2>Profile Settings</h2>
            <ProfileEditor user={userData} onUpdate={handleProfileUpdate} />
          </section>
        </div>
      </div>
    </div>
  );
}
```

**Advanced Features Available**:
- **Content Curation**: Admin interface for "Viz of the Day" and featured authors
- **User Management**: Bulk operations, user search, status management
- **Analytics Dashboard**: Usage statistics, popular content, user engagement
- **Content Moderation**: Flag inappropriate content, user reports
- **Activity Tracking**: Monitor user interactions and engagement
- **Profile Management**: User profile editing and customization
- **Permission Management**: Granular access control for admin features
- **Data Export**: Export user data, analytics, and content reports

**Impact**: Delivers complete PRD Phase 2 and 3 functionality with professional admin tools

---

## **🚀 Implementation Priority & Timeline**

### **Week 1-2: Foundation**
1. **Advanced Workbook Interaction** - Replace basic embeds with React SDK
2. **Dynamic Workbook Discovery** - Implement API-driven workbook fetching

### **Week 3-4: Community Features**
3. **User Management & Access Control** - Integrate Sigma user system
4. **Advanced Sharing Features** - Implement secure sharing and social features

### **Week 5-6: Admin Tools**
5. **Interactive Dashboard & Admin Tools** - Build comprehensive management interface

---

## **🎯 Success Metrics**

- **Week 2**: Interactive workbooks with responsive design
- **Week 4**: Full user management and sharing capabilities
- **Week 6**: Complete admin dashboard and community features

---

## **💡 Key Advantages of This Approach**

1. **Leverages Existing Infrastructure**: Builds on working will.olson account
2. **API-First Development**: Uses proven Sigma APIs and patterns
3. **Rich User Experience**: Goes beyond basic embedding to full interactivity
4. **Scalable Architecture**: Foundation for all PRD phases
5. **Community-Ready**: Enables viral growth and user engagement

---

## **🔧 Specific Implementation Examples**

### **1. React Embed SDK Integration**
```bash
# Install the React Embed SDK
npm install @sigmacomputing/react-embed-sdk

# Replace current SigmaEmbed component
# File: frontend/src/components/enhanced-sigma-embed.tsx
```

### **2. Workbook API Integration**
```bash
# Add workbook fetching endpoints
# File: backend/src/workbooks/workbook.service.ts
# File: backend/src/workbooks/workbook.controller.ts
```

### **3. User Management System**
```bash
# Add user provisioning
# File: backend/src/users/user-provision.service.ts
# File: backend/src/users/user.controller.ts
```

### **4. Admin Dashboard**
```bash
# Create admin interface
# File: frontend/src/app/admin/page.tsx
# File: frontend/src/components/admin/
```

### **5. Sharing Features**
```bash
# Add export scheduling
# File: backend/src/exports/export-schedule.service.ts
# File: frontend/src/components/sharing-modal.tsx
```

---

## **📋 Ready-to-Use Code Patterns**

### **JWT Generation Pattern** (from quickstarts)
```javascript
// helpers/create-jwt.js - Ready to copy
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");

function generateJwt({ embedUrl, mode, sub, permissions }) {
  const finalPermissions = permissions || 
    (mode === "admin" ? ["build", "view", "admin"] : 
     mode === "build" ? ["build"] : ["view"]);

  const payload = {
    iss: process.env.CLIENT_ID,
    sub,
    aud: process.env.JWT_AUDIENCE || "https://sigmacomputing.com/iam",
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 60 * 5,
    jti: uuidv4(),
    scope: "embed",
    embed: {
      url: embedUrl,
      permissions: finalPermissions,
    },
  };

  return jwt.sign(payload, process.env.SECRET, {
    algorithm: "HS256",
    header: { kid: process.env.CLIENT_ID },
  });
}
```

### **Workbook Carousel Pattern** (from quickstarts)
```html
<!-- Ready-to-use carousel HTML/CSS/JS -->
<!-- File: public/api-embed-carousel/index.html -->
```

### **Export Scheduling Pattern** (from quickstarts)
```javascript
// helpers/create-export-schedule.js - Ready to copy
// Complete export scheduling with cron jobs
```

### **User Provisioning Pattern** (from quickstarts)
```javascript
// helpers/provision.js - Ready to copy
// Complete user management with team assignment
```

---

## **🎯 Immediate Next Steps**

1. **Install React Embed SDK**: `npm install @sigmacomputing/react-embed-sdk`
2. **Copy JWT Helper**: Use `create-jwt.js` from quickstarts
3. **Implement Workbook API**: Use `get-workbooks.js` pattern
4. **Add User Provisioning**: Use `provision.js` pattern
5. **Create Admin Interface**: Use recipe-portal as template

---

---
