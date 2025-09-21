# Section 1: 🚀 Advanced Workbook Interaction & User Experience

**Lines:** 21-193 (172 lines)

**Code Blocks:** 2

**Key Patterns:** 7

**Implementation Steps:** 5

---

## **1. 🚀 Advanced Workbook Interaction & User Experience**

### **PRD Alignment**: Phase 1 MVP - "Functional Workbook Page that correctly embeds the Sigma viz"

### **Current State**: ✅ **BREAKTHROUGH** - Debug-embed page works perfectly with proper JWT configuration
- **Working Pattern**: `isEmbedUser: false` for internal users
- **Dual-Mode Testing**: JWT vs direct URL comparison working
- **Real-Time Generation**: Live API integration successful

### **Expedited Opportunity**: Replicate debug-embed success across all workbook pages + enhance with React SDK

### **🚀 Critical Implementation Based on Debug-Embed Success**
```typescript
// Apply the WORKING debug-embed pattern to all workbook pages
const workingJWTConfig = {
  workbookPath: 'workbook/workbook-4osogXvjSNtZFo3DW2XYGs',
  userEmail: 'test@example.com',
  options: {
    jwtOptions: {
      sessionLength: 3600,
      isEmbedUser: false  // ✅ KEY SUCCESS FACTOR
    }
  }
};

// Universal Workbook Component with Debug-Embed Pattern
function UniversalWorkbookEmbed({ workbookId, userEmail, showDebugMode = false }) {
  const [embedURL, setEmbedURL] = useState('');
  const [directURL, setDirectURL] = useState(`https://app.sigmacomputing.com/playground/workbook/${workbookId}`);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateEmbedURL = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/v1/sigma/embed', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          workbookPath: `workbook/${workbookId}`,
          userEmail,
          options: {
            jwtOptions: {
              sessionLength: 3600,
              isEmbedUser: userEmail.endsWith('@sigmacomputing.com') ? false : true
            }
          }
        })
      });
      
      const data = await response.json();
      if (data.success && data.embedURL) {
        setEmbedURL(data.embedURL);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="workbook-embed">
      {showDebugMode && (
        <div className="debug-controls">
          <Button onClick={generateEmbedURL} disabled={isLoading}>
            {isLoading ? 'Generating...' : 'Generate JWT Embed'}
          </Button>
          {error && <div className="error">{error}</div>}
        </div>
      )}
      
      <div className="embed-comparison">
        {embedURL && (
          <div className="jwt-embed">
            <h3>JWT-Authenticated Embed</h3>
            <iframe src={embedURL} width="100%" height="600" />
          </div>
        )}
        
        <div className="direct-embed">
          <h3>Direct URL Embed</h3>
          <iframe src={directURL} width="100%" height="600" />
        </div>
      </div>
    </div>
  );
}
```

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
