# External Integration Action Plan
## High-Priority Implementation Strategy for Sigma Playground

**Generated**: 2025-09-22  
**Based on**: Expedited Development Areas Analysis  
**Status**: Ready for Implementation

---

## 🎯 **Executive Summary**

This document outlines the highest-priority external integrations that will transform Sigma Playground from a basic embed platform into a **comprehensive, enterprise-grade workbook creation and collaboration platform**. All implementations are based on **prescriptive, ready-to-use code** from the Expedited Development Areas document.

**Key Value Proposition**: Leverage proven Sigma integrations to deliver unique capabilities that competitors don't offer, while maintaining the breakthrough authentication patterns that enable real Sigma login with 2FA.

---

## 🚀 **Phase 1: Immediate Impact (1-2 weeks)**

### **1.1 React Embed SDK Integration** 
**Priority**: 🔥 **CRITICAL** | **Impact**: **TRANSFORMATIVE**

**Why This Matters**:
- Transforms static embeds into **interactive experiences**
- Enables **real-time user interactions** with workbooks
- Provides **15+ event listeners** for advanced functionality
- Supports **dynamic filtering and bookmarking**

**Implementation Ready Code**:
```typescript
// DIRECT IMPLEMENTATION from Expedited Development Areas
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

// Enhanced SigmaEmbed Component (EXACT CODE FROM DOCUMENT)
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

**Key Resources**:
- `@external/embed-sdk/packages/react-embed-sdk/` - Full React SDK with hooks
- `@external/quickstarts-public/embedding_qs_series_2/` - Complete examples
- `@sigmaEmbed/embedURLParams.md` - Advanced URL parameters

**User Experience Value**:
- ✅ **Interactive Workbooks**: Users can filter, bookmark, and interact with data in real-time
- ✅ **Responsive Design**: Automatic iframe height adjustment for perfect display
- ✅ **Professional Controls**: Save bookmarks, update filters, export data
- ✅ **Event Tracking**: Monitor user interactions for analytics

---

### **1.2 Advanced User Management System**
**Priority**: 🔥 **CRITICAL** | **Impact**: **ENTERPRISE-GRADE**

**Why This Matters**:
- Enables **automatic user provisioning** with Sigma accounts
- Provides **team-based access control** for content
- Supports **permission-based UI** features
- Integrates with **real Sigma authentication** (2FA support)

**Implementation Ready Code**:
```javascript
// BACKEND: Complete user management system (EXACT CODE FROM DOCUMENT)
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

**Key Resources**:
- `@external/sigma-sample-api/batch_update_users.py` - User management patterns
- `@external/quickstarts-public/sigma-api-recipes/members/` - Complete user API examples
- `@external/quickstarts-public/embedding_qs_series_2_api_use_cases/helpers/provision.js` - User provisioning

**User Experience Value**:
- ✅ **Seamless Onboarding**: Users automatically get Sigma accounts created
- ✅ **Team Collaboration**: Share workbooks with specific teams
- ✅ **Permission Control**: Different access levels for different users
- ✅ **Real Authentication**: Full 2FA support for internal users

---

### **1.3 Dynamic Workbook Discovery System**
**Priority**: 🔥 **HIGH** | **Impact**: **USER ENGAGEMENT**

**Why This Matters**:
- Enables **real-time workbook discovery** from Sigma API
- Provides **visual workbook browser** with thumbnails
- Supports **advanced search and filtering**
- Enables **admin curation** features

**Implementation Ready Code**:
```javascript
// BACKEND: Dynamic workbook discovery system (EXACT CODE FROM DOCUMENT)
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

**Key Resources**:
- `@external/quickstarts-public/sigma-api-recipes/workbooks/` - Complete workbook API patterns
- `@external/quickstarts-public/embedding_qs_series_2_api_use_cases/helpers/get-workbooks.js` - Workbook fetching
- `@external/quickstarts-public/embedding_qs_series_2_api_use_cases/public/api-embed-carousel/` - Visual workbook browser

**User Experience Value**:
- ✅ **Dynamic Content**: Always shows latest workbooks from Sigma
- ✅ **Visual Discovery**: Thumbnail-based workbook browser
- ✅ **Smart Search**: Find workbooks by name, author, team
- ✅ **Admin Curation**: "Viz of the Day" and featured content

---

## 🎨 **Phase 2: Advanced Features (2-4 weeks)**

### **2.1 Advanced Sharing & Export System**
**Priority**: 🔥 **HIGH** | **Impact**: **VIRAL GROWTH**

**Why This Matters**:
- Enables **secure signed URLs** for public sharing
- Provides **automated export scheduling** with email delivery
- Supports **embed code generation** for external sites
- Enables **social media integration**

**Implementation Ready Code**:
```javascript
// BACKEND: Advanced sharing and export system (EXACT CODE FROM DOCUMENT)
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

**Key Resources**:
- `@external/quickstarts-public/embedding_signed_url/` - Secure sharing patterns
- `@external/quickstarts-public/embedding_qs_series_2/public/link_sharing/` - Link sharing examples
- `@external/quickstarts-public/embedding_qs_series_2_api_use_cases/helpers/create-export-schedule.js` - Export scheduling
- `@external/quickstarts-public/embedding_qs_series_2_api_use_cases/helpers/create-bookmark-sigma.js` - Bookmark sharing

**User Experience Value**:
- ✅ **Secure Sharing**: Time-limited public access with JWT
- ✅ **Automated Reports**: Schedule daily/weekly/monthly exports
- ✅ **Easy Integration**: Copy-paste iframe codes for external sites
- ✅ **Social Sharing**: One-click sharing to Twitter/LinkedIn

---

### **2.2 Custom Visualization Plugins**
**Priority**: 🔥 **MEDIUM** | **Impact**: **UNIQUE CAPABILITIES**

**Why This Matters**:
- Provides **unique visualization types** not available elsewhere
- Enables **interactive data exploration** with D3.js
- Supports **custom chart types** for specific use cases
- Differentiates from competitors

**Key External Resources**:
- `@external/sigma-sample-plugins/d3-sunburst/` - Interactive hierarchical data visualization
- `@external/sigma-sample-plugins/d3-graph/` - Network/graph visualizations
- `@external/sigma-sample-plugins/orgchart/` - Organizational structure visualization
- `@external/sigma-sample-plugins/highchart_*` - Professional charting library integration

**Implementation Pattern**:
```typescript
// Custom Visualization Component
import { useElementData, useElementColumns } from '@sigmacomputing/plugin';

function CustomVisualization({ config }) {
  const data = useElementData(config.source);
  const columns = useElementColumns(config.source);
  
  // D3 Sunburst Integration
  const renderSunburst = () => {
    // Use the D3 sunburst logic from external/sigma-sample-plugins/d3-sunburst/
    return <SunburstChart data={data} columns={columns} />;
  };
  
  return (
    <div className="custom-viz-container">
      {renderSunburst()}
    </div>
  );
}
```

**User Experience Value**:
- ✅ **Unique Visualizations**: Sunburst, network graphs, org charts
- ✅ **Interactive Exploration**: Click, zoom, filter data dynamically
- ✅ **Professional Charts**: Highcharts integration for business users
- ✅ **Custom Solutions**: Tailored visualizations for specific industries

---

### **2.3 Admin Dashboard & Debug Tools**
**Priority**: 🔥 **MEDIUM** | **Impact**: **OPERATIONAL EXCELLENCE**

**Why This Matters**:
- Provides **comprehensive system monitoring**
- Enables **real-time feature testing**
- Supports **debug-embed pattern** for all features
- Facilitates **rapid development** and troubleshooting

**Implementation Ready Code**:
```typescript
// ADMIN DASHBOARD with Debug-Embed Pattern (EXACT CODE FROM DOCUMENT)
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
            <div className="test-results">
              {Object.entries(systemStatus).map(([feature, result]) => (
                <div key={feature} className="feature-test">
                  <h4>{feature}</h4>
                  <p>Status: {result.success ? '✅' : '❌'}</p>
                  {result.error && <p>Error: {result.error}</p>}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
```

**User Experience Value**:
- ✅ **System Monitoring**: Real-time health checks for all features
- ✅ **Debug Capabilities**: Test and troubleshoot issues quickly
- ✅ **Feature Validation**: Ensure all integrations work correctly
- ✅ **Operational Insights**: Monitor user engagement and system performance

---

## 🌍 **Phase 3: Enterprise Features (1-2 months)**

### **3.1 Screenshot Generation (html2canvas)**
**Priority**: 🔥 **MEDIUM** | **Impact**: **PROFESSIONAL EXPORTS**

**Why This Matters**:
- Enables **client-side screenshot generation** without server rendering
- Provides **high-quality exports** in multiple formats
- Supports **batch processing** for multiple workbooks
- Enables **custom styling** for branded exports

**Key External Resource**:
- `@external/html2canvas/` - JavaScript HTML renderer for screenshots

**Implementation Pattern**:
```typescript
import html2canvas from 'html2canvas';

// Workbook Export Component
function WorkbookExporter({ workbookElement, format = 'png' }) {
  const exportWorkbook = async () => {
    const canvas = await html2canvas(workbookElement, {
      scale: 2, // High resolution
      useCORS: true,
      allowTaint: true
    });
    
    const link = document.createElement('a');
    link.download = `workbook-${Date.now()}.${format}`;
    link.href = canvas.toDataURL(`image/${format}`);
    link.click();
  };
  
  return (
    <Button onClick={exportWorkbook}>
      Export as {format.toUpperCase()}
    </Button>
  );
}
```

**User Experience Value**:
- ✅ **Professional Exports**: High-quality PNG, JPEG, PDF exports
- ✅ **Client-Side Processing**: No server load for screenshot generation
- ✅ **Custom Branding**: Control over export appearance
- ✅ **Batch Operations**: Export multiple workbooks at once

---

### **3.2 Internationalization (i18next-parser)**
**Priority**: 🔥 **LOW** | **Impact**: **GLOBAL REACH**

**Why This Matters**:
- Enables **multi-language support** for global users
- Provides **automatic translation extraction** from code
- Supports **100+ languages** with context-aware translations
- Facilitates **localization** for different markets

**Key External Resource**:
- `@external/i18next-parser/` - Automatic translation catalog generation

**Implementation Pattern**:
```typescript
// Internationalization Setup
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: require('./locales/en.json') },
    es: { translation: require('./locales/es.json') },
    fr: { translation: require('./locales/fr.json') }
  },
  lng: 'en',
  fallbackLng: 'en'
});

// Translatable Components
function TranslatableWorkbook({ title, description }) {
  return (
    <div>
      <h2>{t('workbook.title', { title })}</h2>
      <p>{t('workbook.description', { description })}</p>
    </div>
  );
}
```

**User Experience Value**:
- ✅ **Global Accessibility**: Support for multiple languages
- ✅ **Cultural Adaptation**: Localized content for different regions
- ✅ **Automatic Extraction**: No manual translation management
- ✅ **Context-Aware**: Proper plural forms and context variations

---

### **3.3 Advanced Data Connectors**
**Priority**: 🔥 **LOW** | **Impact**: **ENTERPRISE INTEGRATION**

**Why This Matters**:
- Enables **enterprise data source integration**
- Supports **big data analytics** platforms
- Provides **cloud service connectivity**
- Facilitates **distributed SQL querying**

**Key External Resources**:
- `@external/databricks-sql-go/` - Big data analytics platform
- `@external/gosnowflake/` - Cloud data warehouse
- `@external/google-cloud-go/` - Comprehensive cloud services
- `@external/trino-go-client/` - Distributed SQL query engine

**Implementation Pattern**:
```typescript
// Advanced Data Connector Service
class AdvancedDataConnector {
  async connectToDatabricks(config) {
    // Use databricks-sql-go patterns
    const connection = await this.establishConnection(config);
    return connection;
  }
  
  async connectToSnowflake(config) {
    // Use gosnowflake patterns
    const connection = await this.establishConnection(config);
    return connection;
  }
  
  async executeQuery(connection, query) {
    const results = await connection.execute(query);
    return results;
  }
}
```

**User Experience Value**:
- ✅ **Enterprise Data Sources**: Connect to major cloud platforms
- ✅ **Big Data Analytics**: Handle large-scale data processing
- ✅ **Cloud Integration**: Seamless cloud service connectivity
- ✅ **Distributed Queries**: Query across multiple data sources

---

## 📊 **Implementation Priority Matrix**

| Feature | Priority | Impact | Effort | Value Score |
|---------|----------|--------|--------|-------------|
| React Embed SDK | 🔥 Critical | Transformative | Medium | 95/100 |
| User Management | 🔥 Critical | Enterprise | High | 90/100 |
| Workbook Discovery | 🔥 High | Engagement | Medium | 85/100 |
| Sharing & Export | 🔥 High | Viral Growth | High | 80/100 |
| Custom Visualizations | 🔥 Medium | Unique | Medium | 75/100 |
| Admin Dashboard | 🔥 Medium | Operations | Low | 70/100 |
| Screenshot Generation | 🔥 Medium | Professional | Low | 65/100 |
| Internationalization | 🔥 Low | Global | Medium | 60/100 |
| Data Connectors | 🔥 Low | Enterprise | High | 55/100 |

---

## 🎯 **Success Metrics**

### **Phase 1 Success Criteria**:
- ✅ **Interactive Workbooks**: Users can filter, bookmark, and interact with data
- ✅ **Seamless Authentication**: Real Sigma login with 2FA working
- ✅ **Dynamic Discovery**: Workbooks load from Sigma API in real-time

### **Phase 2 Success Criteria**:
- ✅ **Viral Sharing**: Users can share workbooks publicly and privately
- ✅ **Custom Visualizations**: Unique chart types available
- ✅ **Admin Tools**: Comprehensive system monitoring and debugging

### **Phase 3 Success Criteria**:
- ✅ **Professional Exports**: High-quality screenshot generation
- ✅ **Global Reach**: Multi-language support implemented
- ✅ **Enterprise Integration**: Major data source connectors available

---

## 🚀 **Next Steps**

1. **Start with Phase 1**: Implement React Embed SDK and User Management
2. **Use Prescriptive Code**: All implementations are ready-to-use from the document
3. **Leverage External Resources**: Specific files mapped to each feature
4. **Maintain Debug-Embed Pattern**: Ensure all features include debugging capabilities
5. **Measure Impact**: Track user engagement and feature adoption

**The Expedited Development Areas document provides a complete implementation roadmap with working code for transforming Sigma Playground into a powerful, enterprise-grade platform!** 🎉
