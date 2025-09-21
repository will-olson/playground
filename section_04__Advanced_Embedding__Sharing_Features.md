# Section 4: 🔗 Advanced Embedding & Sharing Features

**Lines:** 614-1023 (409 lines)

**Code Blocks:** 3

**Key Patterns:** 8

**Implementation Steps:** 5

---

## **4. 🔗 Advanced Embedding & Sharing Features**

### **PRD Alignment**: Phase 1 MVP - "Share workbook" + Phase 2 - "Community Engagement"

### **Current State**: ✅ **BREAKTHROUGH** - Debug-embed page provides working sharing patterns
- **Working Pattern**: JWT-based secure sharing with proper authentication
- **Dual-Mode Testing**: Secure vs public sharing comparison
- **Real-Time Generation**: Live sharing URL generation with immediate feedback

### **🚀 Critical Implementation Based on Debug-Embed Success**
```typescript
// Apply debug-embed pattern to sharing features
const sharingDebug = {
  generateShareURL: async (workbookId: string, userEmail: string, shareType: 'public' | 'private') => {
    const config = userTypeDetection.getJWTConfig(userEmail);
    
    if (shareType === 'public') {
      // Direct URL sharing (like debug-embed direct mode)
      return `https://app.sigmacomputing.com/playground/workbook/${workbookId}?:link_source=share`;
    } else {
      // JWT-based secure sharing (like debug-embed JWT mode)
      const response = await fetch('/api/v1/sigma/embed', {
        method: 'POST',
        body: JSON.stringify({
          workbookPath: `workbook/${workbookId}`,
          userEmail,
          options: { 
            jwtOptions: config,
            hideMenu: false,
            hideBookmarks: false
          }
        })
      });
      
      const data = await response.json();
      return data.embedURL;
    }
  },
  
  testSharingModes: async (workbookId: string, userEmail: string) => {
    const [publicURL, privateURL] = await Promise.all([
      this.generateShareURL(workbookId, userEmail, 'public'),
      this.generateShareURL(workbookId, userEmail, 'private')
    ]);
    
    return {
      public: { url: publicURL, type: 'Direct URL' },
      private: { url: privateURL, type: 'JWT Authenticated' }
    };
  }
};

// Sharing Features with Debug-Embed Pattern
function SharingDebug({ workbookId, userEmail, showDebugMode = false }) {
  const [sharingModes, setSharingModes] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const testSharing = async () => {
    setIsGenerating(true);
    try {
      const modes = await sharingDebug.testSharingModes(workbookId, userEmail);
      setSharingModes(modes);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="sharing-features">
      {showDebugMode && (
        <div className="debug-panel">
          <Button onClick={testSharing} disabled={isGenerating}>
            {isGenerating ? 'Testing...' : 'Test Sharing Modes'}
          </Button>
          
          {sharingModes && (
            <div className="sharing-comparison">
              <div className="sharing-mode">
                <h4>Public Sharing (Direct URL)</h4>
                <p>Type: {sharingModes.public.type}</p>
                <Input value={sharingModes.public.url} readOnly />
                <iframe src={sharingModes.public.url} width="100%" height="300" />
              </div>
              
              <div className="sharing-mode">
                <h4>Private Sharing (JWT)</h4>
                <p>Type: {sharingModes.private.type}</p>
                <Input value={sharingModes.private.url} readOnly />
                <iframe src={sharingModes.private.url} width="100%" height="300" />
              </div>
            </div>
          )}
        </div>
      )}
      
      <div className="sharing-controls">
        <Button onClick={() => sharingDebug.generateShareURL(workbookId, userEmail, 'public')}>
          Share Publicly
        </Button>
        <Button onClick={() => sharingDebug.generateShareURL(workbookId, userEmail, 'private')}>
          Share Privately
        </Button>
      </div>
    </div>
  );
}
```

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
