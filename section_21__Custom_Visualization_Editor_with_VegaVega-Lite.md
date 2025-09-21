# Section 21: 🎨 Custom Visualization Editor with Vega/Vega-Lite

**Lines:** 5067-5482 (415 lines)

**Code Blocks:** 4

**Key Patterns:** 5

**Implementation Steps:** 0

---

## **21. 🎨 Custom Visualization Editor with Vega/Vega-Lite**

### **Implementation Steps**:

**Step 1: Install Editor Dependencies**
```bash
cd frontend
npm install vega vega-lite vega-embed
npm install @types/vega @types/vega-lite --save-dev
```

**Step 2: Create Vega Editor Component**
```typescript
// frontend/src/components/vega-editor.tsx
import React, { useState, useEffect, useRef } from 'react';
import * as vega from 'vega';
import * as vegaLite from 'vega-lite';
import { compile, TopLevelSpec } from 'vega-lite';

interface VegaEditorProps {
  initialSpec?: TopLevelSpec;
  onSpecChange: (spec: TopLevelSpec) => void;
  data?: any[];
  height?: number;
  width?: number;
}

export function VegaEditor({ 
  initialSpec, 
  onSpecChange, 
  data = [], 
  height = 400, 
  width = 600 
}: VegaEditorProps) {
  const [spec, setSpec] = useState<TopLevelSpec>(initialSpec || getDefaultSpec());
  const [error, setError] = useState<string | null>(null);
  const [isValid, setIsValid] = useState(true);
  const vegaRef = useRef<HTMLDivElement>(null);
  const vegaView = useRef<vega.View | null>(null);

  const getDefaultSpec = (): TopLevelSpec => ({
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    description: 'A simple bar chart',
    data: { values: data },
    mark: 'bar',
    encoding: {
      x: { field: 'category', type: 'nominal' },
      y: { field: 'value', type: 'quantitative' }
    }
  });

  useEffect(() => {
    if (vegaRef.current && spec) {
      try {
        setError(null);
        setIsValid(true);
        
        // Compile Vega-Lite to Vega
        const vegaSpec = compile(spec as any).spec;
        
        // Create new view
        if (vegaView.current) {
          vegaView.current.finalize();
        }
        
        vegaView.current = new vega.View(vega.parse(vegaSpec), {
          renderer: 'canvas',
          container: vegaRef.current,
          hover: true
        });
        
        vegaView.current.runAsync();
        
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
        setIsValid(false);
      }
    }
    
    return () => {
      if (vegaView.current) {
        vegaView.current.finalize();
      }
    };
  }, [spec, data]);

  const handleSpecChange = (newSpec: string) => {
    try {
      const parsedSpec = JSON.parse(newSpec);
      setSpec(parsedSpec);
      onSpecChange(parsedSpec);
    } catch (err) {
      setError('Invalid JSON specification');
      setIsValid(false);
    }
  };

  const exportSpec = () => {
    const dataStr = JSON.stringify(spec, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'vega-spec.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  const loadSampleData = () => {
    const sampleData = [
      { category: 'A', value: 28 },
      { category: 'B', value: 55 },
      { category: 'C', value: 43 },
      { category: 'D', value: 91 },
      { category: 'E', value: 81 }
    ];
    
    const newSpec = {
      ...spec,
      data: { values: sampleData }
    };
    
    setSpec(newSpec);
    onSpecChange(newSpec);
  };

  return (
    <div className="vega-editor">
      <div className="editor-header">
        <h3>Vega-Lite Editor</h3>
        <div className="editor-actions">
          <button onClick={loadSampleData} className="btn-secondary">
            Load Sample Data
          </button>
          <button onClick={exportSpec} className="btn-secondary">
            Export Spec
          </button>
        </div>
      </div>
      
      <div className="editor-content">
        <div className="spec-editor">
          <h4>Specification</h4>
          <textarea
            value={JSON.stringify(spec, null, 2)}
            onChange={(e) => handleSpecChange(e.target.value)}
            className={`spec-textarea ${!isValid ? 'error' : ''}`}
            rows={20}
            placeholder="Enter Vega-Lite specification..."
          />
          {error && <div className="error-message">{error}</div>}
        </div>
        
        <div className="visualization-preview">
          <h4>Preview</h4>
          <div 
            ref={vegaRef}
            className="vega-container"
            style={{ width, height }}
          />
        </div>
      </div>
    </div>
  );
}
```

**Step 3: Create Custom Visualization Plugin System**
```typescript
// frontend/src/plugins/visualization-plugin.manager.ts
import { VegaEditor } from '../components/vega-editor';

export interface VisualizationPlugin {
  id: string;
  name: string;
  description: string;
  category: 'chart' | 'map' | 'table' | 'custom';
  spec: any;
  icon: string;
  tags: string[];
}

export class VisualizationPluginManager {
  private plugins: Map<string, VisualizationPlugin> = new Map();
  private customPlugins: Map<string, VisualizationPlugin> = new Map();

  constructor() {
    this.loadDefaultPlugins();
  }

  private loadDefaultPlugins() {
    const defaultPlugins: VisualizationPlugin[] = [
      {
        id: 'bar-chart',
        name: 'Bar Chart',
        description: 'Simple bar chart visualization',
        category: 'chart',
        spec: {
          $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
          mark: 'bar',
          encoding: {
            x: { field: 'category', type: 'nominal' },
            y: { field: 'value', type: 'quantitative' }
          }
        },
        icon: '📊',
        tags: ['chart', 'bar', 'simple']
      },
      {
        id: 'line-chart',
        name: 'Line Chart',
        description: 'Time series line chart',
        category: 'chart',
        spec: {
          $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
          mark: 'line',
          encoding: {
            x: { field: 'date', type: 'temporal' },
            y: { field: 'value', type: 'quantitative' }
          }
        },
        icon: '📈',
        tags: ['chart', 'line', 'time-series']
      },
      {
        id: 'scatter-plot',
        name: 'Scatter Plot',
        description: 'Scatter plot for correlation analysis',
        category: 'chart',
        spec: {
          $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
          mark: 'point',
          encoding: {
            x: { field: 'x', type: 'quantitative' },
            y: { field: 'y', type: 'quantitative' },
            color: { field: 'category', type: 'nominal' }
          }
        },
        icon: '🔵',
        tags: ['chart', 'scatter', 'correlation']
      },
      {
        id: 'heatmap',
        name: 'Heatmap',
        description: 'Heatmap visualization for matrix data',
        category: 'chart',
        spec: {
          $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
          mark: 'rect',
          encoding: {
            x: { field: 'x', type: 'ordinal' },
            y: { field: 'y', type: 'ordinal' },
            color: { field: 'value', type: 'quantitative' }
          }
        },
        icon: '🔥',
        tags: ['chart', 'heatmap', 'matrix']
      }
    ];

    defaultPlugins.forEach(plugin => {
      this.plugins.set(plugin.id, plugin);
    });
  }

  getPlugin(id: string): VisualizationPlugin | undefined {
    return this.plugins.get(id) || this.customPlugins.get(id);
  }

  getAllPlugins(): VisualizationPlugin[] {
    return [...this.plugins.values(), ...this.customPlugins.values()];
  }

  getPluginsByCategory(category: string): VisualizationPlugin[] {
    return this.getAllPlugins().filter(plugin => plugin.category === category);
  }

  searchPlugins(query: string): VisualizationPlugin[] {
    const lowercaseQuery = query.toLowerCase();
    return this.getAllPlugins().filter(plugin => 
      plugin.name.toLowerCase().includes(lowercaseQuery) ||
      plugin.description.toLowerCase().includes(lowercaseQuery) ||
      plugin.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
  }

  addCustomPlugin(plugin: VisualizationPlugin): void {
    this.customPlugins.set(plugin.id, plugin);
  }

  removeCustomPlugin(id: string): boolean {
    return this.customPlugins.delete(id);
  }

  exportPlugin(id: string): string {
    const plugin = this.getPlugin(id);
    if (!plugin) {
      throw new Error(`Plugin ${id} not found`);
    }
    return JSON.stringify(plugin, null, 2);
  }

  importPlugin(pluginJson: string): void {
    try {
      const plugin = JSON.parse(pluginJson) as VisualizationPlugin;
      this.addCustomPlugin(plugin);
    } catch (error) {
      throw new Error('Invalid plugin JSON');
    }
  }
}

export const pluginManager = new VisualizationPluginManager();
```

**Step 4: Create Plugin Gallery Component**
```typescript
// frontend/src/components/plugin-gallery.tsx
import React, { useState } from 'react';
import { pluginManager, VisualizationPlugin } from '../plugins/visualization-plugin.manager';

interface PluginGalleryProps {
  onSelectPlugin: (plugin: VisualizationPlugin) => void;
  selectedPluginId?: string;
}

export function PluginGallery({ onSelectPlugin, selectedPluginId }: PluginGalleryProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [plugins, setPlugins] = useState(pluginManager.getAllPlugins());

  const categories = ['all', 'chart', 'map', 'table', 'custom'];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setPlugins(pluginManager.getAllPlugins());
    } else {
      setPlugins(pluginManager.searchPlugins(query));
    }
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setPlugins(pluginManager.getAllPlugins());
    } else {
      setPlugins(pluginManager.getPluginsByCategory(category));
    }
  };

  const handlePluginSelect = (plugin: VisualizationPlugin) => {
    onSelectPlugin(plugin);
  };

  return (
    <div className="plugin-gallery">
      <div className="gallery-header">
        <h3>Visualization Plugins</h3>
        <div className="gallery-controls">
          <input
            type="text"
            placeholder="Search plugins..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="search-input"
          />
          <select
            value={selectedCategory}
            onChange={(e) => handleCategoryFilter(e.target.value)}
            className="category-select"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="plugin-grid">
        {plugins.map(plugin => (
          <div
            key={plugin.id}
            className={`plugin-card ${selectedPluginId === plugin.id ? 'selected' : ''}`}
            onClick={() => handlePluginSelect(plugin)}
          >
            <div className="plugin-icon">{plugin.icon}</div>
            <div className="plugin-info">
              <h4>{plugin.name}</h4>
              <p>{plugin.description}</p>
              <div className="plugin-tags">
                {plugin.tags.map(tag => (
                  <span key={tag} className="plugin-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {plugins.length === 0 && (
        <div className="no-plugins">
          <p>No plugins found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
```

**Impact**: Enables users to create custom visualizations using Vega-Lite, provides a plugin system for reusable chart types, and offers a visual editor for non-technical users to build complex visualizations.

---
