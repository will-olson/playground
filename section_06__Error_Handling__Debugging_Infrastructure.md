# Section 6: 🔧 Error Handling & Debugging Infrastructure

**Lines:** 1598-1749 (151 lines)

**Code Blocks:** 1

**Key Patterns:** 5

**Implementation Steps:** 5

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
