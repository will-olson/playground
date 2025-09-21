# Section 7: 🎛️ Advanced Filtering & Parameter Management

**Lines:** 1750-1947 (197 lines)

**Code Blocks:** 1

**Key Patterns:** 5

**Implementation Steps:** 5

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
