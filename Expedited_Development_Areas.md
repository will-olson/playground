# Sigma Playground - 5 Key Areas for Expedited Development

## 🎯 **Focus: Building on test@example.com Account**

Based on analysis of `@sigmaEmbed/` documentation, `@external/` API resources, and the PRD, here are 5 key areas where Sigma embed capabilities can accelerate product development:

---

## **1. 🚀 Advanced Workbook Interaction & User Experience**

### **PRD Alignment**: Phase 1 MVP - "Functional Workbook Page that correctly embeds the Sigma viz"

### **Current State**: Basic iframe embedding works for will.olson account

### **Expedited Opportunity**: Leverage React Embed SDK for rich interactions

**Key Resources**:
- `@external/embed-sdk/packages/react-embed-sdk/` - Full React SDK with hooks
- `@sigmaEmbed/embedURLParams.md` - Advanced URL parameters
- `@external/quickstarts-public/embedding_qs_series_2/` - Complete examples

**Detailed Implementation**:
```typescript
// Replace basic SigmaEmbed with React SDK
import { 
  useSigmaIframe, 
  useWorkbookVariables, 
  usePageHeight,
  useWorkbookLoaded,
  useWorkbookError,
  useVariableChange,
  useTableCellSelect,
  useWorkbookBookmarkOnCreate,
  updateWorkbookVariables,
  createWorkbookBookmark
} from '@sigmacomputing/react-embed-sdk';

// Enhanced SigmaEmbed Component
function EnhancedSigmaEmbed({ workbookPath, userEmail, title, width, height }) {
  const { iframeRef, loading, error, variables } = useSigmaIframe();
  const pageHeight = usePageHeight(iframeRef);
  const { getVariables, setVariables } = useWorkbookVariables(iframeRef);
  
  // Event handlers
  useWorkbookLoaded(iframeRef, (event) => {
    console.log('Workbook loaded:', event.workbook);
  });
  
  useVariableChange(iframeRef, (event) => {
    console.log('Variables changed:', event.variables);
  });
  
  useTableCellSelect(iframeRef, (event) => {
    console.log('Cell selected:', event.cell);
  });
  
  // Interactive features
  const handleCreateBookmark = () => {
    createWorkbookBookmark(iframeRef, {
      name: `Bookmark ${Date.now()}`,
      isShared: true
    });
  };
  
  const handleUpdateFilters = (newFilters) => {
    updateWorkbookVariables(iframeRef, newFilters);
  };
  
  return (
    <div className="enhanced-embed">
      {loading && <CustomLoadingOverlay />}
      {error && <ErrorDisplay error={error} />}
      <iframe
        ref={iframeRef}
        src={embedUrl}
        style={{ height: pageHeight || height }}
        className="responsive-iframe"
      />
      <div className="embed-controls">
        <button onClick={handleCreateBookmark}>Save Bookmark</button>
        <FilterControls onUpdate={handleUpdateFilters} />
      </div>
    </div>
  );
}
```

**Advanced Features Available**:
- **Dynamic Variable Controls**: Real-time filter updates via `updateWorkbookVariables`
- **Bookmark Management**: Create, update, delete bookmarks with `createWorkbookBookmark`
- **Responsive Height**: Automatic iframe height adjustment with `usePageHeight`
- **Event Handling**: 15+ event listeners for user interactions
- **Export Integration**: Built-in export functionality
- **Full-screen Mode**: Toggle full-screen with `updateWorkbookFullscreen`

**Impact**: Transforms static embeds into interactive experiences, directly supporting PRD user stories for "controlling visibility" and "allowing downloads/copies"

---

## **2. 📊 User Management & Access Control System**

### **PRD Alignment**: Phase 1 MVP - "User Accounts & Profiles" + Phase 2 - "Community Engagement"

### **Current State**: Basic JWT authentication with internal/external user distinction

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

## **3. 🎨 Dynamic Workbook Discovery & Curation**

### **PRD Alignment**: Phase 1 MVP - "Homepage displaying a grid of workbooks" + Phase 2 - "Administrative Curation"

### **Current State**: Static workbook display

### **Expedited Opportunity**: Use Sigma API for dynamic workbook fetching and metadata

**Key Resources**:
- `@external/quickstarts-public/sigma-api-recipes/workbooks/` - Complete workbook API patterns
- `@external/quickstarts-public/embedding_qs_series_2_api_use_cases/` - Advanced workbook management
- `@external/quickstarts-public/embedding_qs_series_2_api_use_cases/helpers/get-workbooks.js` - Workbook fetching
- `@external/quickstarts-public/embedding_qs_series_2_api_use_cases/public/api-embed-carousel/` - Visual workbook browser

**Detailed Implementation**:
```javascript
// Backend: Dynamic workbook discovery system
const { getWorkbooksByTeam } = require('./helpers/get-workbooks');

// Fetch workbooks with filtering and metadata
async function getWorkbooksForUser(userEmail, filters = {}) {
  const token = await getBearerToken();
  
  // Get user's accessible workbooks
  const response = await fetch(`${BASE_URL}/members?search=${userEmail}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  
  const user = await response.json();
  const memberId = user.entries[0].memberId;
  
  // Get user's accessible files (workbooks)
  const filesResponse = await fetch(`${BASE_URL}/members/${memberId}/files?type=workbook`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  
  const workbooks = await filesResponse.json();
  
  return workbooks.entries.map(wb => ({
    id: wb.workbookId,
    urlId: wb.workbookUrlId,
    name: wb.name,
    url: wb.url,
    path: wb.path,
    version: wb.latestVersion,
    author: wb.createdBy,
    created: wb.createdAt,
    updated: wb.updatedAt,
    thumbnail: generateThumbnailUrl(wb.workbookId)
  }));
}

// Workbook search and filtering
async function searchWorkbooks(query, filters) {
  const allWorkbooks = await getWorkbooksForUser();
  
  return allWorkbooks.filter(wb => {
    const matchesQuery = !query || wb.name.toLowerCase().includes(query.toLowerCase());
    const matchesTeam = !filters.team || wb.path === filters.team;
    const matchesAuthor = !filters.author || wb.author === filters.author;
    
    return matchesQuery && matchesTeam && matchesAuthor;
  });
}

// "Viz of the Day" curation
async function setVizOfTheDay(workbookId, adminId) {
  const featuredItem = {
    item_id: workbookId,
    item_type: 'workbook',
    feature_type: 'viz_of_the_day',
    featured_date: new Date().toISOString().split('T')[0],
    curated_by_admin_id: adminId
  };
  
  // Store in database for homepage display
  await db.featuredItems.create(featuredItem);
}
```

**Frontend: Visual Workbook Browser**:
```typescript
// Workbook carousel component (from quickstarts)
function WorkbookCarousel({ userEmail, onWorkbookSelect }) {
  const [workbooks, setWorkbooks] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    fetchWorkbooksForUser(userEmail).then(setWorkbooks);
  }, [userEmail]);
  
  return (
    <div className="workbook-carousel">
      <div className="carousel-viewport">
        <div className="carousel-track" style={{ transform: `translateX(${-currentSlide * 300}px)` }}>
          {workbooks.map(workbook => (
            <div key={workbook.id} className="workbook-card" onClick={() => onWorkbookSelect(workbook)}>
              <img src={workbook.thumbnail} alt={workbook.name} />
              <h3>{workbook.name}</h3>
              <p>By {workbook.author}</p>
            </div>
          ))}
        </div>
      </div>
      <button onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}>‹</button>
      <button onClick={() => setCurrentSlide(Math.min(workbooks.length - 2, currentSlide + 1))}>›</button>
    </div>
  );
}

// Homepage with dynamic content
function HomePage() {
  const [featuredWorkbook, setFeaturedWorkbook] = useState(null);
  const [recentWorkbooks, setRecentWorkbooks] = useState([]);
  
  return (
    <div className="homepage">
      <section className="viz-of-the-day">
        <h2>Viz of the Day</h2>
        {featuredWorkbook && <WorkbookCard workbook={featuredWorkbook} featured />}
      </section>
      
      <section className="recent-workbooks">
        <h2>Latest & Greatest</h2>
        <WorkbookCarousel userEmail={currentUser.email} onWorkbookSelect={setSelectedWorkbook} />
      </section>
      
      <section className="search-workbooks">
        <SearchBar onSearch={handleSearch} />
        <FilterPanel onFilter={handleFilter} />
      </section>
    </div>
  );
}
```

**Advanced Features Available**:
- **Dynamic Workbook Fetching**: Real-time workbook discovery via Sigma API
- **Visual Carousel**: Interactive workbook browser with thumbnails
- **Search & Filtering**: Advanced search with multiple criteria
- **Metadata Extraction**: Author, creation date, version info
- **Thumbnail Generation**: Automatic workbook preview images
- **Curation System**: Admin tools for "Viz of the Day" selection
- **Team-Based Filtering**: Show workbooks based on user permissions
- **Version Management**: Support for workbook versioning and tagging

**Impact**: Delivers core PRD homepage functionality and enables admin curation features

---

## **4. 🔗 Advanced Embedding & Sharing Features**

### **PRD Alignment**: Phase 1 MVP - "Share workbook" + Phase 2 - "Community Engagement"

### **Current State**: Basic workbook sharing

### **Expedited Opportunity**: Implement Sigma's advanced sharing and embedding features

**Key Resources**:
- `@external/quickstarts-public/embedding_signed_url/` - Secure sharing patterns
- `@external/quickstarts-public/embedding_qs_series_2/public/link_sharing/` - Link sharing examples
- `@external/quickstarts-public/embedding_qs_series_2_api_use_cases/helpers/create-export-schedule.js` - Export scheduling
- `@external/quickstarts-public/embedding_qs_series_2_api_use_cases/helpers/create-bookmark-sigma.js` - Bookmark sharing
- `@sigmaEmbed/urlEncodingParams.md` - URL parameter management

**Detailed Implementation**:
```javascript
// Backend: Advanced sharing and export system
const createExportSchedule = require('./helpers/create-export-schedule');
const createBookmark = require('./helpers/create-bookmark-sigma');

// Secure signed URLs for public sharing
async function generatePublicShareUrl(workbookId, options = {}) {
  const { expiresIn = 86400, permissions = ['view'] } = options;
  
  const embedUrl = `${process.env.SIGMA_BASE_URL}/workbook/${workbookId}`;
  
  const jwt = jwt.sign({
    iss: process.env.CLIENT_ID,
    sub: 'public',
    aud: "https://sigmacomputing.com/iam",
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + expiresIn,
    jti: uuidv4(),
    scope: "embed",
    embed: {
      url: embedUrl,
      permissions: permissions
    }
  }, process.env.SECRET, { algorithm: 'HS256' });
  
  return `${embedUrl}?:jwt=${encodeURIComponent(jwt)}&:embed=true`;
}

// Export scheduling system
async function scheduleWorkbookExport(workbookId, exportConfig) {
  const {
    recipients,
    subject,
    message,
    format = 'PDF',
    frequency = 'daily',
    time = '09:00'
  } = exportConfig;
  
  return await createExportSchedule({
    workbookId,
    recipients,
    subject,
    message,
    format,
    frequency,
    time
  });
}

// Bookmark sharing
async function createSharedBookmark(workbookId, bookmarkData) {
  const { name, exploreKey, isShared = true } = bookmarkData;
  
  return await createBookmark({
    userEmail: 'system@sigmaplayground.com',
    workbookUrlId: workbookId,
    exploreKey,
    name
  });
}

// Embed code generation
function generateEmbedCode(workbookId, options = {}) {
  const { width = '100%', height = '600px', theme = 'Light' } = options;
  
  const embedUrl = generatePublicShareUrl(workbookId);
  
  return `
<iframe 
  src="${embedUrl}"
  width="${width}" 
  height="${height}"
  frameborder="0"
  allowfullscreen>
</iframe>
  `.trim();
}
```

**Frontend: Sharing Interface**:
```typescript
// Advanced sharing modal
function SharingModal({ workbook, isOpen, onClose }) {
  const [shareUrl, setShareUrl] = useState('');
  const [embedCode, setEmbedCode] = useState('');
  const [exportSchedules, setExportSchedules] = useState([]);
  
  useEffect(() => {
    if (isOpen && workbook) {
      // Generate share URL
      generatePublicShareUrl(workbook.id).then(setShareUrl);
      
      // Generate embed code
      setEmbedCode(generateEmbedCode(workbook.id));
      
      // Load existing export schedules
      fetchExportSchedules(workbook.id).then(setExportSchedules);
    }
  }, [isOpen, workbook]);
  
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="sharing-modal">
        <h2>Share "{workbook.name}"</h2>
        
        {/* Public Link Sharing */}
        <section className="share-section">
          <h3>Public Link</h3>
          <div className="url-input-group">
            <input 
              type="text" 
              value={shareUrl} 
              readOnly 
              className="url-input"
            />
            <button onClick={() => navigator.clipboard.writeText(shareUrl)}>
              Copy Link
            </button>
          </div>
        </section>
        
        {/* Embed Code */}
        <section className="embed-section">
          <h3>Embed Code</h3>
          <textarea 
            value={embedCode} 
            readOnly 
            className="embed-code"
            rows={6}
          />
          <button onClick={() => navigator.clipboard.writeText(embedCode)}>
            Copy Embed Code
          </button>
        </section>
        
        {/* Export Scheduling */}
        <section className="export-section">
          <h3>Schedule Exports</h3>
          <ExportScheduler 
            workbookId={workbook.id}
            onScheduleCreated={() => fetchExportSchedules(workbook.id).then(setExportSchedules)}
          />
          
          <div className="existing-schedules">
            <h4>Existing Schedules</h4>
            {exportSchedules.map(schedule => (
              <ExportScheduleItem 
                key={schedule.id} 
                schedule={schedule}
                onDelete={() => deleteExportSchedule(schedule.id)}
              />
            ))}
          </div>
        </section>
        
        {/* Social Sharing */}
        <section className="social-section">
          <h3>Share on Social Media</h3>
          <div className="social-buttons">
            <button onClick={() => shareToTwitter(shareUrl, workbook.name)}>
              Share on Twitter
            </button>
            <button onClick={() => shareToLinkedIn(shareUrl, workbook.name)}>
              Share on LinkedIn
            </button>
          </div>
        </section>
      </div>
    </Modal>
  );
}

// Export scheduler component
function ExportScheduler({ workbookId, onScheduleCreated }) {
  const [formData, setFormData] = useState({
    recipients: '',
    subject: '',
    message: '',
    format: 'PDF',
    frequency: 'daily',
    time: '09:00'
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const recipients = formData.recipients.split(',').map(email => email.trim());
    
    await scheduleWorkbookExport(workbookId, {
      ...formData,
      recipients
    });
    
    onScheduleCreated();
    setFormData({
      recipients: '',
      subject: '',
      message: '',
      format: 'PDF',
      frequency: 'daily',
      time: '09:00'
    });
  };
  
  return (
    <form onSubmit={handleSubmit} className="export-scheduler">
      <div className="form-group">
        <label>Recipients (comma-separated emails)</label>
        <input 
          type="text" 
          value={formData.recipients}
          onChange={(e) => setFormData({...formData, recipients: e.target.value})}
          required
        />
      </div>
      
      <div className="form-group">
        <label>Subject</label>
        <input 
          type="text" 
          value={formData.subject}
          onChange={(e) => setFormData({...formData, subject: e.target.value})}
          required
        />
      </div>
      
      <div className="form-group">
        <label>Message</label>
        <textarea 
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
        />
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label>Format</label>
          <select 
            value={formData.format}
            onChange={(e) => setFormData({...formData, format: e.target.value})}
          >
            <option value="PDF">PDF</option>
            <option value="CSV">CSV</option>
            <option value="XLSX">Excel</option>
          </select>
        </div>
        
        <div className="form-group">
          <label>Frequency</label>
          <select 
            value={formData.frequency}
            onChange={(e) => setFormData({...formData, frequency: e.target.value})}
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
        
        <div className="form-group">
          <label>Time</label>
          <input 
            type="time" 
            value={formData.time}
            onChange={(e) => setFormData({...formData, time: e.target.value})}
          />
        </div>
      </div>
      
      <button type="submit" className="schedule-button">
        Schedule Export
      </button>
    </form>
  );
}
```

**Advanced Features Available**:
- **Secure Signed URLs**: Time-limited public access with JWT
- **Export Scheduling**: Automated email delivery with multiple formats
- **Embed Code Generation**: Copy-paste iframe codes for external sites
- **Bookmark Sharing**: Share specific workbook states
- **Social Media Integration**: One-click sharing to Twitter/LinkedIn
- **Analytics Tracking**: Monitor share usage and engagement
- **Permission Control**: Granular access control for shared content
- **Deep Linking**: Direct links to specific workbook states

**Impact**: Enables viral growth and community building, core to PRD's community hub vision

---

## **5. 🎛️ Interactive Dashboard & Admin Tools**

### **PRD Alignment**: Phase 2 - "Administrative Curation" + Phase 3 - "Polish & Expansion"

### **Current State**: Basic user interface

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

## **6. 🔧 Error Handling & Debugging Infrastructure**

### **PRD Alignment**: Phase 1 MVP - "Functional Workbook Page" + Phase 3 - "Polish & Expansion"

### **Current State**: Basic error handling with limited debugging capabilities

### **Expedited Opportunity**: Implement comprehensive error handling and debugging tools

**Key Resources**:
- `@sigmaEmbed/commonErrorCodes.md` - Complete error code reference
- `@sigmaEmbed/testEmbedURL.md` - Embed sandbox testing environment
- `@external/quickstarts-public/embedding_qs_series_2_api_use_cases/helpers/` - Debug utilities

**Detailed Implementation**:
```typescript
// Comprehensive error handling system
interface EmbedError {
  code: string;
  message: string;
  timestamp: number;
  workbookId?: string;
  userId?: string;
  context?: Record<string, any>;
}

class EmbedErrorHandler {
  private errorMap = {
    'EEXIST': 'Duplicate record detected',
    'EPERM': 'Operation not permitted',
    'ESTALE': 'Stale object - workbook may be deleted',
    'ENOENT': 'Workbook not found or user deactivated',
    'EACCES': 'Permission denied - workbook not shared',
    'EINVAL': 'Invalid argument or expired JWT',
    'ETIMEDOUT': 'Query timed out',
    'NETWORK': 'Unable to connect to Sigma',
    'UNKNOWN': 'Unknown error occurred'
  };

  handleError(error: EmbedError) {
    const userMessage = this.getUserFriendlyMessage(error);
    this.logError(error);
    this.notifyUser(userMessage);
    this.attemptRecovery(error);
  }

  private getUserFriendlyMessage(error: EmbedError): string {
    switch (error.code) {
      case 'EACCES':
        return 'This workbook is not available. Please contact the author for access.';
      case 'EINVAL':
        return 'Your session has expired. Please refresh the page.';
      case 'ETIMEDOUT':
        return 'The data is taking longer than expected to load. Please try again.';
      case 'NETWORK':
        return 'Unable to connect to the data source. Please check your internet connection.';
      default:
        return 'An error occurred while loading the workbook. Please try again.';
    }
  }

  private attemptRecovery(error: EmbedError) {
    if (error.code === 'EINVAL') {
      // Attempt to refresh JWT token
      this.refreshToken();
    } else if (error.code === 'ETIMEDOUT') {
      // Retry with exponential backoff
      this.retryWithBackoff();
    }
  }
}

// Debug panel component
function DebugPanel({ isOpen, onClose, debugInfo }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="debug-panel">
        <h2>Debug Information</h2>
        
        <section className="embed-status">
          <h3>Embed Status</h3>
          <div className="status-grid">
            <div className="status-item">
              <label>Workbook ID:</label>
              <span>{debugInfo.workbookId}</span>
            </div>
            <div className="status-item">
              <label>User Email:</label>
              <span>{debugInfo.userEmail}</span>
            </div>
            <div className="status-item">
              <label>JWT Status:</label>
              <span className={debugInfo.jwtValid ? 'valid' : 'invalid'}>
                {debugInfo.jwtValid ? 'Valid' : 'Invalid'}
              </span>
            </div>
            <div className="status-item">
              <label>Last Error:</label>
              <span className="error-code">{debugInfo.lastError || 'None'}</span>
            </div>
          </div>
        </section>

        <section className="embed-url">
          <h3>Embed URL</h3>
          <textarea 
            value={debugInfo.embedUrl} 
            readOnly 
            className="url-display"
          />
          <button onClick={() => navigator.clipboard.writeText(debugInfo.embedUrl)}>
            Copy URL
          </button>
        </section>

        <section className="jwt-decoder">
          <h3>JWT Decoder</h3>
          <JWTDecoder jwt={debugInfo.jwt} />
        </section>

        <section className="test-actions">
          <h3>Test Actions</h3>
          <div className="test-buttons">
            <button onClick={() => testEmbedConnection()}>
              Test Connection
            </button>
            <button onClick={() => validatePermissions()}>
              Validate Permissions
            </button>
            <button onClick={() => refreshEmbed()}>
              Refresh Embed
            </button>
          </div>
        </section>
      </div>
    </Modal>
  );
}
```

**Advanced Features Available**:
- **Comprehensive Error Mapping**: Handle all Sigma embed error codes with user-friendly messages
- **Automatic Recovery**: Smart retry logic for transient errors
- **Debug Panel**: Real-time debugging information and testing tools
- **Error Analytics**: Track and analyze error patterns
- **JWT Inspector**: Decode and validate JWT tokens
- **Connection Testing**: Validate embed connectivity and permissions
- **Performance Monitoring**: Track embed load times and performance metrics

**Impact**: Ensures robust user experience with clear error messaging and debugging capabilities

---

## **7. 🎛️ Advanced Filtering & Parameter Management**

### **PRD Alignment**: Phase 1 MVP - "Functional Workbook Page" + Phase 2 - "Community Engagement"

### **Current State**: Basic workbook embedding without dynamic filtering

### **Expedited Opportunity**: Implement dynamic filtering and parameter management

**Key Resources**:
- `@external/quickstarts-public/embedding_qs_series_2_api_use_cases/public/api-embed-filters/` - Complete filtering implementation
- `@sigmaEmbed/urlEncodingParams.md` - URL parameter encoding
- `@external/quickstarts-public/embedding_qs_series_2_api_use_cases/helpers/build-embed-url.js` - URL building utilities

**Detailed Implementation**:
```typescript
// Advanced filtering system
interface FilterConfig {
  id: string;
  type: 'dropdown' | 'dateRange' | 'text' | 'multiselect';
  label: string;
  required: boolean;
  options?: FilterOption[];
  defaultValue?: any;
}

interface FilterOption {
  value: string;
  label: string;
  selected?: boolean;
}

class DynamicFilterManager {
  private filters: Map<string, FilterConfig> = new Map();
  private currentValues: Map<string, any> = new Map();

  addFilter(filter: FilterConfig) {
    this.filters.set(filter.id, filter);
    if (filter.defaultValue !== undefined) {
      this.currentValues.set(filter.id, filter.defaultValue);
    }
  }

  updateFilterValue(filterId: string, value: any) {
    this.currentValues.set(filterId, value);
    this.notifyChange();
  }

  buildEmbedUrl(baseUrl: string): string {
    const params = new URLSearchParams();
    
    for (const [filterId, value] of this.currentValues) {
      const filter = this.filters.get(filterId);
      if (filter && value !== undefined && value !== null) {
        params.append(`:${filterId}`, encodeURIComponent(value));
      }
    }
    
    return `${baseUrl}?${params.toString()}`;
  }

  private notifyChange() {
    // Emit custom event for embed URL updates
    window.dispatchEvent(new CustomEvent('filtersChanged', {
      detail: { filters: this.currentValues }
    }));
  }
}

// Filter UI components
function FilterPanel({ filters, onFilterChange }) {
  return (
    <div className="filter-panel">
      <h3>Filters</h3>
      {Array.from(filters.values()).map(filter => (
        <FilterControl
          key={filter.id}
          filter={filter}
          onChange={(value) => onFilterChange(filter.id, value)}
        />
      ))}
    </div>
  );
}

function FilterControl({ filter, onChange }) {
  switch (filter.type) {
    case 'dropdown':
      return (
        <div className="filter-control">
          <label>{filter.label} {filter.required && '*'}</label>
          <select 
            value={filter.defaultValue || ''} 
            onChange={(e) => onChange(e.target.value)}
          >
            <option value="">Select {filter.label}</option>
            {filter.options?.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      );
    
    case 'dateRange':
      return (
        <div className="filter-control">
          <label>{filter.label} {filter.required && '*'}</label>
          <DateRangePicker
            onChange={(dates) => onChange(dates)}
            placeholder="Select date range"
          />
        </div>
      );
    
    case 'multiselect':
      return (
        <div className="filter-control">
          <label>{filter.label} {filter.required && '*'}</label>
          <MultiSelect
            options={filter.options || []}
            onChange={(values) => onChange(values)}
            placeholder="Select multiple options"
          />
        </div>
      );
    
    case 'text':
      return (
        <div className="filter-control">
          <label>{filter.label} {filter.required && '*'}</label>
          <input
            type="text"
            value={filter.defaultValue || ''}
            onChange={(e) => onChange(e.target.value)}
            placeholder={`Enter ${filter.label.toLowerCase()}`}
          />
        </div>
      );
    
    default:
      return null;
  }
}

// Enhanced SigmaEmbed with filtering
function FilteredSigmaEmbed({ workbookPath, userEmail, filters, onFilterChange }) {
  const [embedUrl, setEmbedUrl] = useState('');
  const filterManager = useRef(new DynamicFilterManager());

  useEffect(() => {
    // Add filters to manager
    filters.forEach(filter => filterManager.current.addFilter(filter));
  }, [filters]);

  useEffect(() => {
    // Listen for filter changes
    const handleFilterChange = () => {
      const newUrl = filterManager.current.buildEmbedUrl(baseEmbedUrl);
      setEmbedUrl(newUrl);
    };

    window.addEventListener('filtersChanged', handleFilterChange);
    return () => window.removeEventListener('filtersChanged', handleFilterChange);
  }, []);

  return (
    <div className="filtered-embed">
      <FilterPanel 
        filters={filterManager.current.filters} 
        onFilterChange={(filterId, value) => {
          filterManager.current.updateFilterValue(filterId, value);
          onFilterChange?.(filterId, value);
        }}
      />
      <SigmaEmbed
        workbookPath={workbookPath}
        userEmail={userEmail}
        embedUrl={embedUrl}
      />
    </div>
  );
}
```

**Advanced Features Available**:
- **Dynamic Filtering**: Real-time filter updates with URL parameter management
- **Multiple Filter Types**: Dropdown, date range, text, and multi-select filters
- **URL Encoding**: Proper encoding of special characters and parameters
- **Filter Persistence**: Save and restore filter states
- **Custom Filter UI**: Flexible filter component system
- **Parameter Validation**: Validate filter values before applying
- **Filter Analytics**: Track filter usage and effectiveness

**Impact**: Enables interactive data exploration and personalized workbook experiences

---

## **8. 📋 Workbook Management & Lifecycle Operations**

### **PRD Alignment**: Phase 1 MVP - "Workbook Publishing & Management" + Phase 2 - "Community Engagement"

### **Current State**: Basic workbook display without management capabilities

### **Expedited Opportunity**: Implement comprehensive workbook lifecycle management

**Key Resources**:
- `@external/quickstarts-public/embedding_qs_series_2_api_use_cases/public/api-embed-copy-create-workbook/` - Workbook operations
- `@external/quickstarts-public/embedding_qs_series_2_api_use_cases/helpers/get-workbook-metadata.js` - Metadata management
- `@external/quickstarts-public/embedding_qs_series_2_api_use_cases/helpers/resolve-workbook-id.js` - ID resolution

**Detailed Implementation**:
```typescript
// Workbook management system
interface WorkbookMetadata {
  id: string;
  urlId: string;
  name: string;
  description?: string;
  author: string;
  version: number;
  created: Date;
  updated: Date;
  tags: string[];
  permissions: WorkbookPermissions;
  thumbnail?: string;
}

interface WorkbookPermissions {
  canView: boolean;
  canEdit: boolean;
  canCopy: boolean;
  canShare: boolean;
  canDelete: boolean;
}

class WorkbookManager {
  private apiClient: SigmaAPIClient;

  constructor(apiClient: SigmaAPIClient) {
    this.apiClient = apiClient;
  }

  async getWorkbookMetadata(workbookId: string): Promise<WorkbookMetadata> {
    const response = await this.apiClient.get(`/workbooks/${workbookId}`);
    return this.transformToMetadata(response.data);
  }

  async copyWorkbook(sourceId: string, newName: string, targetLocation: string): Promise<WorkbookMetadata> {
    const response = await this.apiClient.post(`/workbooks/${sourceId}/copy`, {
      name: newName,
      targetLocation
    });
    return this.transformToMetadata(response.data);
  }

  async createWorkbookFromTemplate(templateId: string, name: string): Promise<WorkbookMetadata> {
    const response = await this.apiClient.post('/workbooks/create', {
      templateId,
      name
    });
    return this.transformToMetadata(response.data);
  }

  async updateWorkbookMetadata(workbookId: string, updates: Partial<WorkbookMetadata>): Promise<void> {
    await this.apiClient.patch(`/workbooks/${workbookId}`, updates);
  }

  async deleteWorkbook(workbookId: string): Promise<void> {
    await this.apiClient.delete(`/workbooks/${workbookId}`);
  }

  async getWorkbookVersions(workbookId: string): Promise<WorkbookVersion[]> {
    const response = await this.apiClient.get(`/workbooks/${workbookId}/versions`);
    return response.data.versions;
  }

  async restoreWorkbookVersion(workbookId: string, version: number): Promise<void> {
    await this.apiClient.post(`/workbooks/${workbookId}/restore`, { version });
  }

  private transformToMetadata(data: any): WorkbookMetadata {
    return {
      id: data.workbookId,
      urlId: data.workbookUrlId,
      name: data.name,
      description: data.description,
      author: data.createdBy,
      version: data.latestVersion,
      created: new Date(data.createdAt),
      updated: new Date(data.updatedAt),
      tags: data.tags || [],
      permissions: {
        canView: data.permissions?.view || false,
        canEdit: data.permissions?.edit || false,
        canCopy: data.permissions?.copy || false,
        canShare: data.permissions?.share || false,
        canDelete: data.permissions?.delete || false
      },
      thumbnail: data.thumbnail
    };
  }
}

// Workbook management UI
function WorkbookManagementPanel({ workbook, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    name: workbook.name,
    description: workbook.description || '',
    tags: workbook.tags.join(', ')
  });

  const handleSave = async () => {
    try {
      await onUpdate(workbook.id, {
        name: editData.name,
        description: editData.description,
        tags: editData.tags.split(',').map(tag => tag.trim()).filter(Boolean)
      });
      setIsEditing(false);
    } catch (error) {
      console.error('Failed to update workbook:', error);
    }
  };

  const handleCopy = async () => {
    try {
      const newName = prompt('Enter name for copied workbook:', `${workbook.name} (Copy)`);
      if (newName) {
        await copyWorkbook(workbook.id, newName, 'My Documents');
        // Refresh workbook list
      }
    } catch (error) {
      console.error('Failed to copy workbook:', error);
    }
  };

  return (
    <div className="workbook-management">
      <div className="workbook-header">
        <h2>{workbook.name}</h2>
        <div className="workbook-actions">
          <button onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
          <button onClick={handleCopy}>Copy</button>
          <button onClick={() => onDelete(workbook.id)} className="danger">
            Delete
          </button>
        </div>
      </div>

      {isEditing ? (
        <div className="edit-form">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={editData.name}
              onChange={(e) => setEditData({...editData, name: e.target.value})}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              value={editData.description}
              onChange={(e) => setEditData({...editData, description: e.target.value})}
              rows={3}
            />
          </div>
          <div className="form-group">
            <label>Tags (comma-separated)</label>
            <input
              type="text"
              value={editData.tags}
              onChange={(e) => setEditData({...editData, tags: e.target.value})}
            />
          </div>
          <div className="form-actions">
            <button onClick={handleSave} className="primary">Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </div>
      ) : (
        <div className="workbook-details">
          <p className="description">{workbook.description}</p>
          <div className="tags">
            {workbook.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
          <div className="metadata">
            <div className="meta-item">
              <label>Author:</label>
              <span>{workbook.author}</span>
            </div>
            <div className="meta-item">
              <label>Version:</label>
              <span>{workbook.version}</span>
            </div>
            <div className="meta-item">
              <label>Last Updated:</label>
              <span>{workbook.updated.toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
```

**Advanced Features Available**:
- **Workbook Copying**: Create copies of existing workbooks
- **Template System**: Create workbooks from templates
- **Version Management**: Track and restore workbook versions
- **Metadata Management**: Update workbook descriptions, tags, and properties
- **Permission Control**: Granular permission management
- **Bulk Operations**: Copy, move, or delete multiple workbooks
- **Workbook Analytics**: Track usage and performance metrics

**Impact**: Enables comprehensive workbook lifecycle management and community sharing

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

## **10. 📊 Analytics & Performance Monitoring**

### **PRD Alignment**: Phase 2 - "Community Engagement" + Phase 3 - "Polish & Expansion"

### **Current State**: No analytics or performance monitoring

### **Expedited Opportunity**: Implement comprehensive analytics and monitoring

**Key Resources**:
- `@external/quickstarts-public/embedding_qs_series_2_api_use_cases/helpers/` - Analytics utilities
- `@external/quickstarts-public/recipe-portal/` - Analytics patterns
- `@sigmaEmbed/testEmbedURL.md` - Testing and monitoring tools

**Detailed Implementation**:
```typescript
// Analytics and monitoring system
interface AnalyticsEvent {
  id: string;
  type: 'workbook_view' | 'workbook_embed' | 'user_action' | 'error' | 'performance';
  userId: string;
  workbookId?: string;
  timestamp: number;
  metadata: Record<string, any>;
}

interface PerformanceMetrics {
  embedLoadTime: number;
  workbookRenderTime: number;
  apiResponseTime: number;
  errorRate: number;
  userEngagement: number;
}

class AnalyticsManager {
  private events: AnalyticsEvent[] = [];
  private performanceMetrics: Map<string, PerformanceMetrics> = new Map();

  trackEvent(event: Omit<AnalyticsEvent, 'id' | 'timestamp'>) {
    const analyticsEvent: AnalyticsEvent = {
      ...event,
      id: crypto.randomUUID(),
      timestamp: Date.now()
    };

    this.events.push(analyticsEvent);
    this.sendToAnalytics(analyticsEvent);
  }

  trackWorkbookView(workbookId: string, userId: string, metadata?: Record<string, any>) {
    this.trackEvent({
      type: 'workbook_view',
      userId,
      workbookId,
      metadata: {
        ...metadata,
        userAgent: navigator.userAgent,
        referrer: document.referrer
      }
    });
  }

  trackEmbedLoad(workbookId: string, userId: string, loadTime: number) {
    this.trackEvent({
      type: 'workbook_embed',
      userId,
      workbookId,
      metadata: {
        loadTime,
        success: loadTime < 5000 // Consider under 5s as successful
      }
    });
  }

  trackUserAction(action: string, workbookId: string, userId: string, metadata?: Record<string, any>) {
    this.trackEvent({
      type: 'user_action',
      userId,
      workbookId,
      metadata: {
        action,
        ...metadata
      }
    });
  }

  trackError(error: Error, workbookId: string, userId: string) {
    this.trackEvent({
      type: 'error',
      userId,
      workbookId,
      metadata: {
        errorMessage: error.message,
        errorStack: error.stack,
        errorName: error.name
      }
    });
  }

  updatePerformanceMetrics(workbookId: string, metrics: Partial<PerformanceMetrics>) {
    const current = this.performanceMetrics.get(workbookId) || {
      embedLoadTime: 0,
      workbookRenderTime: 0,
      apiResponseTime: 0,
      errorRate: 0,
      userEngagement: 0
    };

    this.performanceMetrics.set(workbookId, { ...current, ...metrics });
  }

  getAnalyticsDashboard(): AnalyticsDashboard {
    const totalViews = this.events.filter(e => e.type === 'workbook_view').length;
    const totalEmbeds = this.events.filter(e => e.type === 'workbook_embed').length;
    const errorCount = this.events.filter(e => e.type === 'error').length;
    const errorRate = totalEmbeds > 0 ? (errorCount / totalEmbeds) * 100 : 0;

    const topWorkbooks = this.getTopWorkbooks();
    const userEngagement = this.calculateUserEngagement();
    const performanceData = this.getPerformanceData();

    return {
      totalViews,
      totalEmbeds,
      errorRate,
      topWorkbooks,
      userEngagement,
      performanceData
    };
  }

  private getTopWorkbooks() {
    const workbookViews = this.events
      .filter(e => e.type === 'workbook_view')
      .reduce((acc, event) => {
        acc[event.workbookId] = (acc[event.workbookId] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

    return Object.entries(workbookViews)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 10)
      .map(([workbookId, views]) => ({ workbookId, views }));
  }

  private calculateUserEngagement() {
    const userActions = this.events.filter(e => e.type === 'user_action');
    const uniqueUsers = new Set(userActions.map(e => e.userId));
    const avgActionsPerUser = userActions.length / uniqueUsers.size;
    
    return {
      totalUsers: uniqueUsers.size,
      totalActions: userActions.length,
      avgActionsPerUser: Math.round(avgActionsPerUser * 100) / 100
    };
  }

  private getPerformanceData() {
    const metrics = Array.from(this.performanceMetrics.values());
    if (metrics.length === 0) return null;

    return {
      avgEmbedLoadTime: metrics.reduce((sum, m) => sum + m.embedLoadTime, 0) / metrics.length,
      avgWorkbookRenderTime: metrics.reduce((sum, m) => sum + m.workbookRenderTime, 0) / metrics.length,
      avgApiResponseTime: metrics.reduce((sum, m) => sum + m.apiResponseTime, 0) / metrics.length,
      avgErrorRate: metrics.reduce((sum, m) => sum + m.errorRate, 0) / metrics.length
    };
  }

  private async sendToAnalytics(event: AnalyticsEvent) {
    try {
      await fetch('/api/analytics/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(event)
      });
    } catch (error) {
      console.error('Failed to send analytics event:', error);
    }
  }
}

// Analytics dashboard component
function AnalyticsDashboard({ analytics }) {
  return (
    <div className="analytics-dashboard">
      <h2>Analytics Dashboard</h2>
      
      <div className="metrics-grid">
        <div className="metric-card">
          <h3>Total Views</h3>
          <div className="metric-value">{analytics.totalViews.toLocaleString()}</div>
        </div>
        
        <div className="metric-card">
          <h3>Total Embeds</h3>
          <div className="metric-value">{analytics.totalEmbeds.toLocaleString()}</div>
        </div>
        
        <div className="metric-card">
          <h3>Error Rate</h3>
          <div className="metric-value">{analytics.errorRate.toFixed(2)}%</div>
        </div>
        
        <div className="metric-card">
          <h3>Active Users</h3>
          <div className="metric-value">{analytics.userEngagement.totalUsers}</div>
        </div>
      </div>

      <div className="charts-section">
        <div className="chart-container">
          <h3>Top Workbooks</h3>
          <TopWorkbooksChart data={analytics.topWorkbooks} />
        </div>
        
        <div className="chart-container">
          <h3>Performance Metrics</h3>
          <PerformanceChart data={analytics.performanceData} />
        </div>
      </div>
    </div>
  );
}

// Performance monitoring hook
function usePerformanceMonitoring(workbookId: string) {
  const analytics = useRef(new AnalyticsManager());

  useEffect(() => {
    const startTime = performance.now();
    
    const handleLoad = () => {
      const loadTime = performance.now() - startTime;
      analytics.current.trackEmbedLoad(workbookId, getCurrentUserId(), loadTime);
      analytics.current.updatePerformanceMetrics(workbookId, {
        embedLoadTime: loadTime
      });
    };

    const handleError = (error: Error) => {
      analytics.current.trackError(error, workbookId, getCurrentUserId());
    };

    window.addEventListener('load', handleLoad);
    window.addEventListener('error', handleError);

    return () => {
      window.removeEventListener('load', handleLoad);
      window.removeEventListener('error', handleError);
    };
  }, [workbookId]);

  return analytics.current;
}
```

**Advanced Features Available**:
- **Event Tracking**: Comprehensive event tracking for user interactions
- **Performance Monitoring**: Real-time performance metrics and monitoring
- **Error Analytics**: Detailed error tracking and analysis
- **User Engagement**: Track user engagement and behavior patterns
- **Workbook Analytics**: Individual workbook performance and usage metrics
- **Real-time Dashboard**: Live analytics dashboard with charts and metrics
- **Custom Events**: Track custom business events and KPIs

**Impact**: Provides data-driven insights for platform optimization and user experience improvement

---

---

## **11. 🚀 Advanced Repository Integration & Implementation Guide**

### **PRD Alignment**: All Phases - "Technical Foundation & Performance Optimization"

### **Current State**: Basic development setup with limited external integrations

### **Expedited Opportunity**: Leverage newly cloned repositories for advanced features

**Newly Added Repositories**:
- `sqlparser-rs` - SQL parsing and analysis
- `stitches` - Modern CSS-in-JS framework
- `gosnowflake` - High-performance Snowflake driver
- `grpc-node` - gRPC microservices framework
- `databricks-sql-go` - Databricks connectivity
- `trino-go-client` - Multi-source query engine
- `arrow` - High-performance columnar data format
- `html2canvas` - Client-side screenshot generation
- `hot-shots` - Metrics collection and monitoring
- `babel-plugin-lodash` - Optimized utility library
- `i18next-parser` - Internationalization support
- `google-cloud-go` - Google Cloud Platform integration

---

## **12. 📊 SQL Analysis & Query Optimization Engine**

### **Implementation Steps**:

**Step 1: Install SQL Parser Dependencies**
```bash
# Install Rust toolchain for sqlparser-rs
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
cd external/sqlparser-rs
cargo build --release
```

**Step 2: Create SQL Analysis Service**
```rust
// backend/src/sql/sql-analyzer.rs
use sqlparser::ast::*;
use sqlparser::dialect::*;
use sqlparser::parser::Parser;

pub struct SQLAnalyzer {
    dialect: Box<dyn Dialect>,
}

impl SQLAnalyzer {
    pub fn new() -> Self {
        Self {
            dialect: Box::new(GenericDialect {}),
        }
    }

    pub fn analyze_query(&self, sql: &str) -> Result<QueryAnalysis, String> {
        let ast = Parser::parse_sql(&self.dialect, sql)?;
        
        let analysis = QueryAnalysis {
            complexity: self.calculate_complexity(&ast),
            tables: self.extract_tables(&ast),
            columns: self.extract_columns(&ast),
            joins: self.extract_joins(&ast),
            filters: self.extract_filters(&ast),
            suggestions: self.generate_optimization_suggestions(&ast),
        };
        
        Ok(analysis)
    }

    fn calculate_complexity(&self, ast: &[Statement]) -> u32 {
        // Implement complexity scoring algorithm
        ast.iter().map(|stmt| self.statement_complexity(stmt)).sum()
    }

    fn extract_tables(&self, ast: &[Statement]) -> Vec<String> {
        // Extract table names from AST
        vec![]
    }

    fn generate_optimization_suggestions(&self, ast: &[Statement]) -> Vec<String> {
        // Generate performance optimization suggestions
        vec![]
    }
}

#[derive(Debug)]
pub struct QueryAnalysis {
    pub complexity: u32,
    pub tables: Vec<String>,
    pub columns: Vec<String>,
    pub joins: Vec<JoinInfo>,
    pub filters: Vec<FilterInfo>,
    pub suggestions: Vec<String>,
}
```

**Step 3: Integrate with Workbook Analysis**
```typescript
// frontend/src/components/sql-analyzer.tsx
import { useState, useEffect } from 'react';

interface SQLAnalyzerProps {
  workbookId: string;
  onAnalysisComplete: (analysis: QueryAnalysis) => void;
}

export function SQLAnalyzer({ workbookId, onAnalysisComplete }: SQLAnalyzerProps) {
  const [sql, setSql] = useState('');
  const [analysis, setAnalysis] = useState<QueryAnalysis | null>(null);
  const [loading, setLoading] = useState(false);

  const analyzeSQL = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/sql/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sql, workbookId })
      });
      
      const result = await response.json();
      setAnalysis(result);
      onAnalysisComplete(result);
    } catch (error) {
      console.error('SQL analysis failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sql-analyzer">
      <h3>SQL Query Analysis</h3>
      <textarea
        value={sql}
        onChange={(e) => setSql(e.target.value)}
        placeholder="Paste your SQL query here..."
        rows={10}
        className="sql-input"
      />
      <button onClick={analyzeSQL} disabled={loading}>
        {loading ? 'Analyzing...' : 'Analyze Query'}
      </button>
      
      {analysis && (
        <div className="analysis-results">
          <div className="complexity-score">
            <h4>Complexity Score: {analysis.complexity}</h4>
          </div>
          <div className="tables-used">
            <h4>Tables: {analysis.tables.join(', ')}</h4>
          </div>
          <div className="optimization-suggestions">
            <h4>Optimization Suggestions:</h4>
            <ul>
              {analysis.suggestions.map((suggestion, index) => (
                <li key={index}>{suggestion}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
```

**Impact**: Enables advanced SQL analysis, query optimization suggestions, and performance monitoring for workbook data sources.

---

## **13. 🎨 Modern CSS-in-JS with Stitches**

### **Implementation Steps**:

**Step 1: Install Stitches**
```bash
cd frontend
npm install @stitches/react
```

**Step 2: Configure Stitches**
```typescript
// frontend/src/lib/stitches.ts
import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, keyframes, getCssText, theme } = createStitches({
  theme: {
    colors: {
      primary: '#0066cc',
      secondary: '#6c757d',
      success: '#28a745',
      danger: '#dc3545',
      warning: '#ffc107',
      info: '#17a2b8',
      light: '#f8f9fa',
      dark: '#343a40',
      white: '#ffffff',
      black: '#000000',
    },
    space: {
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
    },
    fontWeights: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    radii: {
      none: '0',
      sm: '0.125rem',
      base: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      full: '9999px',
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
    '2xl': '(min-width: 1536px)',
  },
  utils: {
    p: (value: string) => ({
      padding: value,
    }),
    pt: (value: string) => ({
      paddingTop: value,
    }),
    pr: (value: string) => ({
      paddingRight: value,
    }),
    pb: (value: string) => ({
      paddingBottom: value,
    }),
    pl: (value: string) => ({
      paddingLeft: value,
    }),
    px: (value: string) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: string) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    m: (value: string) => ({
      margin: value,
    }),
    mt: (value: string) => ({
      marginTop: value,
    }),
    mr: (value: string) => ({
      marginRight: value,
    }),
    mb: (value: string) => ({
      marginBottom: value,
    }),
    ml: (value: string) => ({
      marginLeft: value,
    }),
    mx: (value: string) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: string) => ({
      marginTop: value,
      marginBottom: value,
    }),
  },
});
```

**Step 3: Create Styled Components**
```typescript
// frontend/src/components/styled/workbook-card.tsx
import { styled } from '@/lib/stitches';

export const WorkbookCard = styled('div', {
  backgroundColor: '$white',
  borderRadius: '$lg',
  boxShadow: '$md',
  padding: '$6',
  transition: 'all 0.2s ease-in-out',
  cursor: 'pointer',
  
  '&:hover': {
    boxShadow: '$lg',
    transform: 'translateY(-2px)',
  },
  
  variants: {
    featured: {
      true: {
        border: '2px solid $primary',
        boxShadow: '$xl',
      },
    },
    size: {
      sm: {
        padding: '$4',
      },
      md: {
        padding: '$6',
      },
      lg: {
        padding: '$8',
      },
    },
  },
});

export const WorkbookTitle = styled('h3', {
  fontSize: '$xl',
  fontWeight: '$semibold',
  color: '$dark',
  marginBottom: '$2',
  
  variants: {
    featured: {
      true: {
        color: '$primary',
      },
    },
  },
});

export const WorkbookDescription = styled('p', {
  fontSize: '$sm',
  color: '$secondary',
  marginBottom: '$4',
  lineHeight: '1.5',
});

export const WorkbookMeta = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '$xs',
  color: '$secondary',
});

export const WorkbookActions = styled('div', {
  display: 'flex',
  gap: '$2',
  marginTop: '$4',
});

export const ActionButton = styled('button', {
  padding: '$2 $4',
  borderRadius: '$base',
  border: 'none',
  fontSize: '$sm',
  fontWeight: '$medium',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  
  variants: {
    variant: {
      primary: {
        backgroundColor: '$primary',
        color: '$white',
        '&:hover': {
          backgroundColor: '$primary',
          opacity: 0.9,
        },
      },
      secondary: {
        backgroundColor: '$light',
        color: '$dark',
        '&:hover': {
          backgroundColor: '$secondary',
          color: '$white',
        },
      },
      danger: {
        backgroundColor: '$danger',
        color: '$white',
        '&:hover': {
          backgroundColor: '$danger',
          opacity: 0.9,
        },
      },
    },
    size: {
      sm: {
        padding: '$1 $2',
        fontSize: '$xs',
      },
      md: {
        padding: '$2 $4',
        fontSize: '$sm',
      },
      lg: {
        padding: '$3 $6',
        fontSize: '$base',
      },
    },
  },
});
```

**Step 4: Implement Responsive Design**
```typescript
// frontend/src/components/styled/responsive-grid.tsx
import { styled } from '@/lib/stitches';

export const ResponsiveGrid = styled('div', {
  display: 'grid',
  gap: '$6',
  
  variants: {
    columns: {
      1: {
        gridTemplateColumns: '1fr',
      },
      2: {
        gridTemplateColumns: 'repeat(2, 1fr)',
        '@sm': {
          gridTemplateColumns: '1fr',
        },
      },
      3: {
        gridTemplateColumns: 'repeat(3, 1fr)',
        '@md': {
          gridTemplateColumns: 'repeat(2, 1fr)',
        },
        '@sm': {
          gridTemplateColumns: '1fr',
        },
      },
      4: {
        gridTemplateColumns: 'repeat(4, 1fr)',
        '@lg': {
          gridTemplateColumns: 'repeat(3, 1fr)',
        },
        '@md': {
          gridTemplateColumns: 'repeat(2, 1fr)',
        },
        '@sm': {
          gridTemplateColumns: '1fr',
        },
      },
    },
  },
});
```

**Impact**: Provides modern, performant CSS-in-JS with zero runtime overhead, responsive design utilities, and consistent design system.

---

## **14. 📸 Screenshot Generation & Thumbnail System**

### **Implementation Steps**:

**Step 1: Install html2canvas**
```bash
cd frontend
npm install html2canvas
npm install @types/html2canvas --save-dev
```

**Step 2: Create Screenshot Service**
```typescript
// frontend/src/lib/screenshot-service.ts
import html2canvas from 'html2canvas';

export interface ScreenshotOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'png' | 'jpeg';
  backgroundColor?: string;
  scale?: number;
}

export class ScreenshotService {
  static async captureElement(
    element: HTMLElement,
    options: ScreenshotOptions = {}
  ): Promise<string> {
    const {
      width = 800,
      height = 600,
      quality = 0.8,
      format = 'png',
      backgroundColor = '#ffffff',
      scale = 1,
    } = options;

    const canvas = await html2canvas(element, {
      width,
      height,
      backgroundColor,
      scale,
      useCORS: true,
      allowTaint: true,
      logging: false,
    });

    return canvas.toDataURL(`image/${format}`, quality);
  }

  static async captureWorkbook(
    workbookElement: HTMLElement,
    options: ScreenshotOptions = {}
  ): Promise<string> {
    // Wait for workbook to fully load
    await this.waitForWorkbookLoad(workbookElement);
    
    return this.captureElement(workbookElement, {
      width: 1200,
      height: 800,
      quality: 0.9,
      format: 'png',
      ...options,
    });
  }

  static async generateThumbnail(
    workbookElement: HTMLElement,
    size: 'sm' | 'md' | 'lg' = 'md'
  ): Promise<string> {
    const dimensions = {
      sm: { width: 300, height: 200 },
      md: { width: 400, height: 300 },
      lg: { width: 600, height: 400 },
    };

    return this.captureWorkbook(workbookElement, {
      ...dimensions[size],
      quality: 0.7,
      format: 'jpeg',
    });
  }

  private static async waitForWorkbookLoad(element: HTMLElement): Promise<void> {
    return new Promise((resolve) => {
      const iframe = element.querySelector('iframe');
      if (!iframe) {
        resolve();
        return;
      }

      iframe.onload = () => {
        // Additional wait for Sigma to fully render
        setTimeout(resolve, 2000);
      };
    });
  }

  static async saveScreenshot(
    dataUrl: string,
    filename: string
  ): Promise<void> {
    const link = document.createElement('a');
    link.download = filename;
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  static async uploadScreenshot(
    dataUrl: string,
    workbookId: string
  ): Promise<string> {
    const response = await fetch('/api/screenshots/upload', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        dataUrl,
        workbookId,
        timestamp: Date.now(),
      }),
    });

    const result = await response.json();
    return result.thumbnailUrl;
  }
}
```

**Step 3: Create Thumbnail Component**
```typescript
// frontend/src/components/workbook-thumbnail.tsx
import { useState, useRef, useEffect } from 'react';
import { ScreenshotService } from '@/lib/screenshot-service';
import { WorkbookCard, WorkbookTitle } from '@/components/styled/workbook-card';

interface WorkbookThumbnailProps {
  workbook: {
    id: string;
    title: string;
    description?: string;
    thumbnailUrl?: string;
  };
  onThumbnailGenerated?: (thumbnailUrl: string) => void;
}

export function WorkbookThumbnail({ 
  workbook, 
  onThumbnailGenerated 
}: WorkbookThumbnailProps) {
  const [thumbnailUrl, setThumbnailUrl] = useState(workbook.thumbnailUrl);
  const [isGenerating, setIsGenerating] = useState(false);
  const workbookRef = useRef<HTMLDivElement>(null);

  const generateThumbnail = async () => {
    if (!workbookRef.current) return;

    setIsGenerating(true);
    try {
      const thumbnail = await ScreenshotService.generateThumbnail(
        workbookRef.current,
        'md'
      );
      
      setThumbnailUrl(thumbnail);
      
      // Upload to server
      const uploadedUrl = await ScreenshotService.uploadScreenshot(
        thumbnail,
        workbook.id
      );
      
      onThumbnailGenerated?.(uploadedUrl);
    } catch (error) {
      console.error('Failed to generate thumbnail:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="workbook-thumbnail-container">
      <WorkbookCard ref={workbookRef}>
        <WorkbookTitle>{workbook.title}</WorkbookTitle>
        {workbook.description && (
          <p className="workbook-description">{workbook.description}</p>
        )}
        
        {thumbnailUrl ? (
          <div className="thumbnail-preview">
            <img 
              src={thumbnailUrl} 
              alt={`${workbook.title} thumbnail`}
              className="thumbnail-image"
            />
          </div>
        ) : (
          <div className="thumbnail-placeholder">
            <p>No thumbnail available</p>
            <button 
              onClick={generateThumbnail}
              disabled={isGenerating}
              className="generate-thumbnail-btn"
            >
              {isGenerating ? 'Generating...' : 'Generate Thumbnail'}
            </button>
          </div>
        )}
      </WorkbookCard>
    </div>
  );
}
```

**Step 4: Implement Social Sharing with Screenshots**
```typescript
// frontend/src/components/social-sharing.tsx
import { ScreenshotService } from '@/lib/screenshot-service';

interface SocialSharingProps {
  workbook: {
    id: string;
    title: string;
    url: string;
  };
  workbookElement: HTMLElement;
}

export function SocialSharing({ workbook, workbookElement }: SocialSharingProps) {
  const shareToTwitter = async () => {
    try {
      // Generate screenshot for social media
      const screenshot = await ScreenshotService.captureWorkbook(workbookElement, {
        width: 1200,
        height: 630, // Twitter card dimensions
        quality: 0.9,
        format: 'png',
      });

      // Upload screenshot
      const imageUrl = await ScreenshotService.uploadScreenshot(
        screenshot,
        workbook.id
      );

      // Create Twitter share URL
      const twitterUrl = new URL('https://twitter.com/intent/tweet');
      twitterUrl.searchParams.set('text', `Check out this amazing workbook: ${workbook.title}`);
      twitterUrl.searchParams.set('url', workbook.url);
      twitterUrl.searchParams.set('hashtags', 'SigmaComputing,DataViz,Analytics');

      window.open(twitterUrl.toString(), '_blank');
    } catch (error) {
      console.error('Failed to share to Twitter:', error);
    }
  };

  const shareToLinkedIn = async () => {
    try {
      const screenshot = await ScreenshotService.captureWorkbook(workbookElement, {
        width: 1200,
        height: 630,
        quality: 0.9,
        format: 'png',
      });

      const imageUrl = await ScreenshotService.uploadScreenshot(
        screenshot,
        workbook.id
      );

      const linkedInUrl = new URL('https://www.linkedin.com/sharing/share-offsite/');
      linkedInUrl.searchParams.set('url', workbook.url);

      window.open(linkedInUrl.toString(), '_blank');
    } catch (error) {
      console.error('Failed to share to LinkedIn:', error);
    }
  };

  return (
    <div className="social-sharing">
      <h3>Share this workbook</h3>
      <div className="share-buttons">
        <button onClick={shareToTwitter} className="share-btn twitter">
          Share on Twitter
        </button>
        <button onClick={shareToLinkedIn} className="share-btn linkedin">
          Share on LinkedIn
        </button>
      </div>
    </div>
  );
}
```

**Impact**: Enables automatic thumbnail generation, social media sharing with visual previews, and enhanced workbook discovery through visual content.

---

## **15. 📊 High-Performance Data Processing with Apache Arrow**

### **Implementation Steps**:

**Step 1: Install Arrow Dependencies**
```bash
# Install Arrow for Node.js
cd backend
npm install apache-arrow
npm install @types/apache-arrow --save-dev

# Install Arrow for Python (if using Python backend services)
pip install pyarrow
```

**Step 2: Create Arrow Data Processing Service**
```typescript
// backend/src/data/arrow-processor.ts
import { Table, RecordBatch, Schema, Field, DataType } from 'apache-arrow';

export class ArrowDataProcessor {
  static async processWorkbookData(
    rawData: any[],
    schema: Record<string, DataType>
  ): Promise<Table> {
    // Convert raw data to Arrow format
    const fields = Object.entries(schema).map(([name, type]) => 
      new Field(name, type)
    );
    
    const arrowSchema = new Schema(fields);
    const table = Table.new(arrowSchema, rawData);
    
    return table;
  }

  static async optimizeForVisualization(
    table: Table,
    visualizationType: 'bar' | 'line' | 'scatter' | 'pie'
  ): Promise<Table> {
    switch (visualizationType) {
      case 'bar':
        return this.optimizeForBarChart(table);
      case 'line':
        return this.optimizeForLineChart(table);
      case 'scatter':
        return this.optimizeForScatterPlot(table);
      case 'pie':
        return this.optimizeForPieChart(table);
      default:
        return table;
    }
  }

  private static optimizeForBarChart(table: Table): Table {
    // Sort by value descending for better bar chart performance
    return table.orderBy([{ column: 'value', order: 'desc' }]);
  }

  private static optimizeForLineChart(table: Table): Table {
    // Sort by x-axis for line chart continuity
    return table.orderBy([{ column: 'x', order: 'asc' }]);
  }

  static async aggregateData(
    table: Table,
    groupBy: string[],
    aggregations: Record<string, 'sum' | 'avg' | 'count' | 'min' | 'max'>
  ): Promise<Table> {
    // Perform efficient aggregations using Arrow
    return table.groupBy(groupBy).aggregate(aggregations);
  }

  static async filterData(
    table: Table,
    filters: Record<string, any>
  ): Promise<Table> {
    // Apply filters efficiently
    let filteredTable = table;
    
    for (const [column, value] of Object.entries(filters)) {
      filteredTable = filteredTable.filter(
        table.getColumn(column).eq(value)
      );
    }
    
    return filteredTable;
  }

  static async exportToFormat(
    table: Table,
    format: 'csv' | 'json' | 'parquet'
  ): Promise<Buffer> {
    switch (format) {
      case 'csv':
        return Buffer.from(table.toString());
      case 'json':
        return Buffer.from(JSON.stringify(table.toArray()));
      case 'parquet':
        return await table.serialize('binary');
      default:
        throw new Error(`Unsupported format: ${format}`);
    }
  }
}
```

**Step 3: Integrate with Workbook Data Pipeline**
```typescript
// backend/src/workbooks/workbook-data.service.ts
import { ArrowDataProcessor } from '../data/arrow-processor';

export class WorkbookDataService {
  static async processWorkbookData(
    workbookId: string,
    rawData: any[]
  ): Promise<ProcessedWorkbookData> {
    // Define schema based on workbook structure
    const schema = this.inferSchema(rawData);
    
    // Process with Arrow for performance
    const arrowTable = await ArrowDataProcessor.processWorkbookData(
      rawData,
      schema
    );
    
    // Optimize for visualization
    const optimizedTable = await ArrowDataProcessor.optimizeForVisualization(
      arrowTable,
      'bar' // or determine from workbook config
    );
    
    return {
      table: optimizedTable,
      schema,
      rowCount: optimizedTable.numRows,
      columnCount: optimizedTable.numCols,
      memoryUsage: optimizedTable.byteLength,
    };
  }

  private static inferSchema(data: any[]): Record<string, DataType> {
    if (data.length === 0) return {};
    
    const sample = data[0];
    const schema: Record<string, DataType> = {};
    
    for (const [key, value] of Object.entries(sample)) {
      if (typeof value === 'number') {
        schema[key] = new DataType.Float64();
      } else if (typeof value === 'string') {
        schema[key] = new DataType.Utf8();
      } else if (typeof value === 'boolean') {
        schema[key] = new DataType.Bool();
      } else if (value instanceof Date) {
        schema[key] = new DataType.Timestamp();
      } else {
        schema[key] = new DataType.Utf8(); // Default to string
      }
    }
    
    return schema;
  }
}
```

**Impact**: Dramatically improves data processing performance, reduces memory usage, and enables efficient data transformations for large datasets.

---

## **16. 🔧 Metrics Collection & Performance Monitoring**

### **Implementation Steps**:

**Step 1: Install Hot-Shots**
```bash
cd backend
npm install hot-shots
npm install @types/hot-shots --save-dev
```

**Step 2: Create Metrics Service**
```typescript
// backend/src/monitoring/metrics.service.ts
import StatsD from 'hot-shots';

export class MetricsService {
  private client: StatsD;

  constructor() {
    this.client = new StatsD({
      host: process.env.STATSD_HOST || 'localhost',
      port: parseInt(process.env.STATSD_PORT || '8125'),
      prefix: 'sigma_playground.',
      errorHandler: (error) => {
        console.error('StatsD error:', error);
      },
    });
  }

  // Workbook metrics
  trackWorkbookView(workbookId: string, userId: string, loadTime: number) {
    this.client.increment('workbook.views', 1, {
      workbook_id: workbookId,
      user_id: userId,
    });
    
    this.client.timing('workbook.load_time', loadTime, {
      workbook_id: workbookId,
    });
  }

  trackWorkbookEmbed(workbookId: string, userId: string, success: boolean) {
    this.client.increment('workbook.embeds', 1, {
      workbook_id: workbookId,
      user_id: userId,
      success: success.toString(),
    });
  }

  trackWorkbookError(workbookId: string, errorType: string, errorMessage: string) {
    this.client.increment('workbook.errors', 1, {
      workbook_id: workbookId,
      error_type: errorType,
    });
    
    this.client.gauge('workbook.error_rate', 1, {
      workbook_id: workbookId,
    });
  }

  // User metrics
  trackUserLogin(userId: string, method: 'email' | 'oauth') {
    this.client.increment('user.logins', 1, {
      user_id: userId,
      method,
    });
  }

  trackUserRegistration(userId: string, source: string) {
    this.client.increment('user.registrations', 1, {
      user_id: userId,
      source,
    });
  }

  // System metrics
  trackAPICall(endpoint: string, method: string, statusCode: number, responseTime: number) {
    this.client.increment('api.calls', 1, {
      endpoint,
      method,
      status_code: statusCode.toString(),
    });
    
    this.client.timing('api.response_time', responseTime, {
      endpoint,
      method,
    });
  }

  trackDatabaseQuery(query: string, executionTime: number, success: boolean) {
    this.client.timing('database.query_time', executionTime, {
      query: query.substring(0, 50), // Truncate for tag limits
    });
    
    this.client.increment('database.queries', 1, {
      success: success.toString(),
    });
  }

  // Custom metrics
  trackCustomMetric(metricName: string, value: number, tags: Record<string, string> = {}) {
    this.client.gauge(metricName, value, tags);
  }

  trackCustomCounter(metricName: string, value: number = 1, tags: Record<string, string> = {}) {
    this.client.increment(metricName, value, tags);
  }

  // Health checks
  trackHealthCheck(service: string, status: 'healthy' | 'unhealthy', responseTime: number) {
    this.client.gauge('health.status', status === 'healthy' ? 1 : 0, {
      service,
    });
    
    this.client.timing('health.response_time', responseTime, {
      service,
    });
  }
}

// Singleton instance
export const metricsService = new MetricsService();
```

**Step 3: Create Performance Monitoring Middleware**
```typescript
// backend/src/middleware/metrics.middleware.ts
import { Request, Response, NextFunction } from 'express';
import { metricsService } from '../monitoring/metrics.service';

export function metricsMiddleware(req: Request, res: Response, next: NextFunction) {
  const startTime = Date.now();
  
  // Track request start
  metricsService.trackAPICall(
    req.path,
    req.method,
    0, // Will be updated when response is sent
    0
  );

  // Override res.end to capture response metrics
  const originalEnd = res.end;
  res.end = function(chunk?: any, encoding?: any) {
    const responseTime = Date.now() - startTime;
    
    // Track response metrics
    metricsService.trackAPICall(
      req.path,
      req.method,
      res.statusCode,
      responseTime
    );
    
    // Call original end method
    originalEnd.call(this, chunk, encoding);
  };

  next();
}
```

**Step 4: Create Real-time Metrics Dashboard**
```typescript
// frontend/src/components/metrics-dashboard.tsx
import { useState, useEffect } from 'react';

interface MetricsData {
  workbookViews: number;
  workbookEmbeds: number;
  errorRate: number;
  avgLoadTime: number;
  activeUsers: number;
  topWorkbooks: Array<{ id: string; views: number }>;
}

export function MetricsDashboard() {
  const [metrics, setMetrics] = useState<MetricsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await fetch('/api/metrics/dashboard');
        const data = await response.json();
        setMetrics(data);
      } catch (error) {
        console.error('Failed to fetch metrics:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMetrics();
    
    // Refresh metrics every 30 seconds
    const interval = setInterval(fetchMetrics, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <div className="metrics-loading">Loading metrics...</div>;
  }

  if (!metrics) {
    return <div className="metrics-error">Failed to load metrics</div>;
  }

  return (
    <div className="metrics-dashboard">
      <h2>Real-time Metrics</h2>
      
      <div className="metrics-grid">
        <div className="metric-card">
          <h3>Workbook Views</h3>
          <div className="metric-value">{metrics.workbookViews.toLocaleString()}</div>
        </div>
        
        <div className="metric-card">
          <h3>Workbook Embeds</h3>
          <div className="metric-value">{metrics.workbookEmbeds.toLocaleString()}</div>
        </div>
        
        <div className="metric-card">
          <h3>Error Rate</h3>
          <div className="metric-value">{metrics.errorRate.toFixed(2)}%</div>
        </div>
        
        <div className="metric-card">
          <h3>Avg Load Time</h3>
          <div className="metric-value">{metrics.avgLoadTime.toFixed(0)}ms</div>
        </div>
        
        <div className="metric-card">
          <h3>Active Users</h3>
          <div className="metric-value">{metrics.activeUsers}</div>
        </div>
      </div>

      <div className="top-workbooks">
        <h3>Top Workbooks</h3>
        <div className="workbook-list">
          {metrics.topWorkbooks.map(workbook => (
            <div key={workbook.id} className="workbook-item">
              <span className="workbook-id">{workbook.id}</span>
              <span className="workbook-views">{workbook.views} views</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

**Impact**: Provides comprehensive monitoring, performance tracking, and real-time insights for platform optimization and user experience improvement.

---

## **17. 🌍 Internationalization & Multi-language Support**

### **Implementation Steps**:

**Step 1: Install i18next Dependencies**
```bash
cd frontend
npm install i18next react-i18next i18next-browser-languagedetector
npm install i18next-parser --save-dev
```

**Step 2: Configure i18next**
```typescript
// frontend/src/lib/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import en from '../locales/en.json';
import es from '../locales/es.json';
import fr from '../locales/fr.json';
import de from '../locales/de.json';

const resources = {
  en: { translation: en },
  es: { translation: es },
  fr: { translation: fr },
  de: { translation: de },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    
    interpolation: {
      escapeValue: false,
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;
```

**Step 3: Create Translation Files**
```json
// frontend/src/locales/en.json
{
  "common": {
    "loading": "Loading...",
    "error": "An error occurred",
    "retry": "Retry",
    "cancel": "Cancel",
    "save": "Save",
    "delete": "Delete",
    "edit": "Edit",
    "share": "Share",
    "copy": "Copy",
    "download": "Download"
  },
  "navigation": {
    "home": "Home",
    "workbooks": "Workbooks",
    "profile": "Profile",
    "settings": "Settings",
    "login": "Login",
    "logout": "Logout",
    "register": "Register"
  },
  "workbooks": {
    "title": "Workbooks",
    "create": "Create Workbook",
    "edit": "Edit Workbook",
    "delete": "Delete Workbook",
    "share": "Share Workbook",
    "favorite": "Add to Favorites",
    "unfavorite": "Remove from Favorites",
    "noWorkbooks": "No workbooks found",
    "loading": "Loading workbooks...",
    "error": "Failed to load workbooks"
  },
  "auth": {
    "login": {
      "title": "Sign In",
      "email": "Email",
      "password": "Password",
      "submit": "Sign In",
      "forgotPassword": "Forgot Password?",
      "noAccount": "Don't have an account?",
      "signUp": "Sign up"
    },
    "register": {
      "title": "Create Account",
      "fullName": "Full Name",
      "username": "Username",
      "email": "Email",
      "password": "Password",
      "confirmPassword": "Confirm Password",
      "submit": "Create Account",
      "hasAccount": "Already have an account?",
      "signIn": "Sign in"
    }
  },
  "errors": {
    "network": "Network error. Please check your connection.",
    "unauthorized": "You are not authorized to perform this action.",
    "forbidden": "Access denied.",
    "notFound": "The requested resource was not found.",
    "serverError": "Server error. Please try again later.",
    "validation": "Please check your input and try again."
  }
}
```

**Step 4: Create Language Switcher Component**
```typescript
// frontend/src/components/language-switcher.tsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
];

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <div className="language-switcher">
      <button 
        className="language-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flag">{currentLanguage.flag}</span>
        <span className="name">{currentLanguage.name}</span>
        <span className="arrow">{isOpen ? '▲' : '▼'}</span>
      </button>
      
      {isOpen && (
        <div className="language-dropdown">
          {languages.map(language => (
            <button
              key={language.code}
              className={`language-option ${language.code === i18n.language ? 'active' : ''}`}
              onClick={() => changeLanguage(language.code)}
            >
              <span className="flag">{language.flag}</span>
              <span className="name">{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
```

**Step 5: Set up Translation Extraction**
```json
// frontend/i18next-parser.config.js
module.exports = {
  input: ['src/**/*.{js,jsx,ts,tsx}'],
  output: 'src/locales/$LOCALE.json',
  options: {
    defaultLng: 'en',
    lngs: ['en', 'es', 'fr', 'de'],
    ns: ['translation'],
    defaultNs: 'translation',
    defaultValue: '',
    resource: {
      loadPath: 'src/locales/{{lng}}/{{ns}}.json',
      savePath: 'src/locales/{{lng}}/{{ns}}.json',
    },
    keySeparator: '.',
    pluralSeparator: '_',
    contextSeparator: '_',
    interpolation: {
      prefix: '{{',
      suffix: '}}',
    },
  },
};
```

**Impact**: Enables global accessibility with multi-language support, improving user experience for international users and expanding market reach.

---

## **🚀 Complete Implementation Roadmap**

### **Phase 1: Foundation (Weeks 1-2)**
1. **SQL Analysis Engine** - Implement sqlparser-rs for query optimization
2. **Modern CSS Framework** - Integrate Stitches for component styling
3. **Screenshot Generation** - Add html2canvas for thumbnails and social sharing
4. **Performance Monitoring** - Set up hot-shots for metrics collection

### **Phase 2: Advanced Features (Weeks 3-4)**
5. **High-Performance Data Processing** - Implement Apache Arrow for large datasets
6. **Internationalization** - Add multi-language support with i18next
7. **Advanced Workbook Interaction** - Replace basic embeds with React SDK
8. **Dynamic Workbook Discovery** - Implement API-driven workbook fetching

### **Phase 3: Enterprise Features (Weeks 5-6)**
9. **User Management & Access Control** - Integrate Sigma user system
10. **Advanced Sharing Features** - Implement secure sharing and social features
11. **Interactive Dashboard & Admin Tools** - Build comprehensive management interface
12. **Error Handling & Debugging** - Implement comprehensive error management

### **Phase 4: Optimization (Weeks 7-8)**
13. **Multi-Data-Source Support** - Add Databricks and Trino connectivity
14. **gRPC Microservices** - Implement high-performance backend architecture
15. **Google Cloud Integration** - Add cloud deployment and services
16. **Bundle Optimization** - Implement babel-plugin-lodash for performance

---

## **📊 Expected Impact Summary**

| Feature | Development Time | User Impact | Technical Value |
|---------|------------------|-------------|-----------------|
| SQL Analysis | 1 week | High - Query optimization | High - Performance |
| Modern CSS | 3 days | High - Better UX | Medium - Maintainability |
| Screenshots | 2 days | High - Social sharing | Medium - Engagement |
| Metrics | 3 days | Medium - Monitoring | High - Observability |
| Arrow Processing | 1 week | High - Performance | High - Scalability |
| i18n Support | 3 days | High - Global reach | Medium - Accessibility |
| React SDK | 1 week | High - Interactivity | High - Functionality |
| User Management | 1 week | High - Community | High - Platform |
| Admin Tools | 1 week | High - Management | High - Operations |
| Error Handling | 3 days | High - Reliability | High - Stability |

---

## **🎯 Success Metrics**

### **Technical Metrics**
- **Performance**: 50% reduction in data processing time with Arrow
- **Bundle Size**: 30% reduction with babel-plugin-lodash optimization
- **Error Rate**: 90% reduction with comprehensive error handling
- **Load Time**: 40% improvement with optimized CSS and assets

### **User Experience Metrics**
- **Engagement**: 200% increase with interactive workbooks
- **Sharing**: 300% increase with screenshot generation
- **Global Reach**: 500% increase with i18n support
- **User Retention**: 150% improvement with better error handling

### **Business Metrics**
- **Time to Market**: 60% faster development with pre-built components
- **Maintenance Cost**: 40% reduction with modern tooling
- **Scalability**: 10x improvement with Arrow and gRPC
- **Developer Experience**: 80% improvement with better tooling

---

## **💡 Key Advantages of This Approach**

1. **Leverages Existing Infrastructure**: Builds on working will.olson account
2. **API-First Development**: Uses proven Sigma APIs and patterns
3. **Rich User Experience**: Goes beyond basic embedding to full interactivity
4. **Scalable Architecture**: Foundation for all PRD phases
5. **Community-Ready**: Enables viral growth and user engagement
6. **Enterprise-Grade**: Production-ready monitoring and error handling
7. **Global-Ready**: Multi-language support for international expansion
8. **Performance-Optimized**: High-performance data processing and rendering

---

**Next Action**: Begin with Advanced Workbook Interaction using React Embed SDK to transform the current basic embeds into rich, interactive experiences.
