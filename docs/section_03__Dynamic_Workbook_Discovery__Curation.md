# Section 3: 🎨 Dynamic Workbook Discovery & Curation

**Lines:** 376-613 (237 lines)

**Code Blocks:** 3

**Key Patterns:** 8

**Implementation Steps:** 5

---

## **3. 🎨 Dynamic Workbook Discovery & Curation**

### **PRD Alignment**: Phase 1 MVP - "Homepage displaying a grid of workbooks" + Phase 2 - "Administrative Curation"

### **Current State**: ✅ **BREAKTHROUGH** - Debug-embed page provides working embed generation pattern
- **Working Pattern**: Real-time URL generation with proper JWT configuration
- **Dual-Mode Testing**: Side-by-side comparison enables validation
- **Error Handling**: Comprehensive debugging and error recovery

### **🚀 Critical Implementation Based on Debug-Embed Success**
```typescript
// Apply debug-embed pattern to workbook discovery
const workbookDiscoveryDebug = {
  generateWorkbookPreview: async (workbookId: string, userEmail: string) => {
    const config = userTypeDetection.getJWTConfig(userEmail);
    const response = await fetch('/api/v1/sigma/embed', {
      method: 'POST',
      body: JSON.stringify({
        workbookPath: `workbook/${workbookId}`,
        userEmail,
        options: { 
          jwtOptions: config,
          hideMenu: true,
          hideBookmarks: true,
          responsiveHeight: true
        }
      })
    });
    
    return response.json();
  },
  
  testWorkbookAccess: async (workbookId: string, userEmail: string) => {
    const [jwtResult, directResult] = await Promise.all([
      this.generateWorkbookPreview(workbookId, userEmail),
      this.testDirectAccess(workbookId)
    ]);
    
    return {
      jwt: jwtResult,
      direct: directResult,
      comparison: this.compareResults(jwtResult, directResult)
    };
  }
};

// Workbook Discovery with Debug-Embed Pattern
function WorkbookDiscoveryDebug({ workbooks, userEmail, showDebugMode = false }) {
  const [testResults, setTestResults] = useState({});
  
  const testAllWorkbooks = async () => {
    const results = {};
    for (const workbook of workbooks) {
      results[workbook.id] = await workbookDiscoveryDebug.testWorkbookAccess(
        workbook.id, 
        userEmail
      );
    }
    setTestResults(results);
  };

  return (
    <div className="workbook-discovery">
      {showDebugMode && (
        <div className="debug-panel">
          <Button onClick={testAllWorkbooks}>
            Test All Workbook Access
          </Button>
          <div className="test-results">
            {Object.entries(testResults).map(([id, result]) => (
              <div key={id} className="workbook-test">
                <h4>Workbook {id}</h4>
                <p>JWT Success: {result.jwt.success ? '✅' : '❌'}</p>
                <p>Direct Success: {result.direct.success ? '✅' : '❌'}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="workbook-grid">
        {workbooks.map(workbook => (
          <WorkbookCard 
            key={workbook.id} 
            workbook={workbook}
            onPreview={() => workbookDiscoveryDebug.generateWorkbookPreview(workbook.id, userEmail)}
          />
        ))}
      </div>
    </div>
  );
}
```

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
