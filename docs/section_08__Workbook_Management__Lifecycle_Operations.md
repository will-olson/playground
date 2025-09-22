# Section 8: 📋 Workbook Management & Lifecycle Operations

**Lines:** 1948-2175 (227 lines)

**Code Blocks:** 1

**Key Patterns:** 5

**Implementation Steps:** 5

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
