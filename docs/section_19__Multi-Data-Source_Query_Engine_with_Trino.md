# Section 19: 🔗 Multi-Data-Source Query Engine with Trino

**Lines:** 4552-4785 (233 lines)

**Code Blocks:** 3

**Key Patterns:** 4

**Implementation Steps:** 0

---

## **19. 🔗 Multi-Data-Source Query Engine with Trino**

### **Implementation Steps**:

**Step 1: Install Trino Go Client**
```bash
cd backend
go get github.com/trinodb/trino-go-client
```

**Step 2: Create Trino Connection Service**
```go
// backend/src/database/trino.service.go
package database

import (
    "context"
    "fmt"
    "log"
    "time"
    
    "github.com/trinodb/trino-go-client/trino"
)

type TrinoConfig struct {
    ServerURI string
    Username  string
    Password  string
    Catalog   string
    Schema    string
}

type TrinoService struct {
    config *TrinoConfig
}

func NewTrinoService(config *TrinoConfig) *TrinoService {
    return &TrinoService{
        config: config,
    }
}

func (t *TrinoService) ExecuteQuery(ctx context.Context, query string) (*trino.Rows, error) {
    conn := &trino.Connector{
        ServerURI: t.config.ServerURI,
        Username:  t.config.Username,
        Password:  t.config.Password,
        Catalog:   t.config.Catalog,
        Schema:    t.config.Schema,
    }
    
    db := sql.OpenDB(conn)
    defer db.Close()
    
    start := time.Now()
    rows, err := db.QueryContext(ctx, query)
    if err != nil {
        return nil, fmt.Errorf("failed to execute Trino query: %w", err)
    }
    
    log.Printf("Trino query executed in %v", time.Since(start))
    return rows, nil
}

func (t *TrinoService) QueryAcrossDataSources(ctx context.Context, dataSources []string) ([]map[string]interface{}, error) {
    // Example: Query across Snowflake, BigQuery, and S3
    query := `
        SELECT 
            'snowflake' as source,
            COUNT(*) as record_count,
            'workbooks' as table_name
        FROM snowflake.public.workbooks
        WHERE created_at >= CURRENT_DATE - INTERVAL '30' DAY
        
        UNION ALL
        
        SELECT 
            'bigquery' as source,
            COUNT(*) as record_count,
            'analytics' as table_name
        FROM bigquery.public.analytics
        WHERE created_at >= CURRENT_DATE - INTERVAL '30' DAY
        
        UNION ALL
        
        SELECT 
            's3' as source,
            COUNT(*) as record_count,
            'exports' as table_name
        FROM s3.public.exports
        WHERE created_at >= CURRENT_DATE - INTERVAL '30' DAY
    `
    
    rows, err := t.ExecuteQuery(ctx, query)
    if err != nil {
        return nil, err
    }
    defer rows.Close()
    
    var results []map[string]interface{}
    columns, _ := rows.Columns()
    
    for rows.Next() {
        values := make([]interface{}, len(columns))
        valuePtrs := make([]interface{}, len(columns))
        for i := range columns {
            valuePtrs[i] = &values[i]
        }
        
        if err := rows.Scan(valuePtrs...); err != nil {
            return nil, fmt.Errorf("failed to scan row: %w", err)
        }
        
        row := make(map[string]interface{})
        for i, col := range columns {
            row[col] = values[i]
        }
        results = append(results, row)
    }
    
    return results, nil
}

func (t *TrinoService) GetFederatedWorkbookData(ctx context.Context, workbookId string) ([]map[string]interface{}, error) {
    // Query across multiple data sources to get comprehensive workbook data
    query := `
        SELECT 
            w.id,
            w.title,
            w.description,
            w.author,
            w.created_at,
            w.updated_at,
            COALESCE(a.view_count, 0) as view_count,
            COALESCE(a.unique_viewers, 0) as unique_viewers,
            COALESCE(a.avg_session_duration, 0) as avg_session_duration,
            COALESCE(s.share_count, 0) as share_count,
            COALESCE(d.download_count, 0) as download_count
        FROM snowflake.public.workbooks w
        LEFT JOIN bigquery.public.analytics a ON w.id = a.workbook_id
        LEFT JOIN s3.public.shares s ON w.id = s.workbook_id
        LEFT JOIN s3.public.downloads d ON w.id = d.workbook_id
        WHERE w.id = ?
    `
    
    rows, err := t.ExecuteQuery(ctx, query)
    if err != nil {
        return nil, err
    }
    defer rows.Close()
    
    var results []map[string]interface{}
    columns, _ := rows.Columns()
    
    for rows.Next() {
        values := make([]interface{}, len(columns))
        valuePtrs := make([]interface{}, len(columns))
        for i := range columns {
            valuePtrs[i] = &values[i]
        }
        
        if err := rows.Scan(valuePtrs...); err != nil {
            return nil, fmt.Errorf("failed to scan row: %w", err)
        }
        
        row := make(map[string]interface{})
        for i, col := range columns {
            row[col] = values[i]
        }
        results = append(results, row)
    }
    
    return results, nil
}
```

**Step 3: Create Data Source Management**
```go
// backend/src/database/datasource.manager.go
package database

import (
    "context"
    "fmt"
    "sync"
)

type DataSourceManager struct {
    snowflake *SnowflakeService
    trino     *TrinoService
    databricks *DatabricksService
    mu        sync.RWMutex
}

func NewDataSourceManager(snowflake *SnowflakeService, trino *TrinoService, databricks *DatabricksService) *DataSourceManager {
    return &DataSourceManager{
        snowflake:  snowflake,
        trino:      trino,
        databricks: databricks,
    }
}

func (dsm *DataSourceManager) GetWorkbookData(ctx context.Context, workbookId string, preferSource string) ([]map[string]interface{}, error) {
    dsm.mu.RLock()
    defer dsm.mu.RUnlock()
    
    switch preferSource {
    case "snowflake":
        return dsm.snowflake.GetWorkbookData(workbookId)
    case "trino":
        return dsm.trino.GetFederatedWorkbookData(ctx, workbookId)
    case "databricks":
        return dsm.databricks.GetWorkbookData(ctx, workbookId)
    default:
        // Try sources in order of preference
        if data, err := dsm.snowflake.GetWorkbookData(workbookId); err == nil {
            return data, nil
        }
        if data, err := dsm.trino.GetFederatedWorkbookData(ctx, workbookId); err == nil {
            return data, nil
        }
        return dsm.databricks.GetWorkbookData(ctx, workbookId)
    }
}

func (dsm *DataSourceManager) GetCrossSourceAnalytics(ctx context.Context) ([]map[string]interface{}, error) {
    return dsm.trino.QueryAcrossDataSources(ctx, []string{"snowflake", "bigquery", "s3"})
}
```

**Impact**: Enables federated queries across multiple data sources, providing unified access to Snowflake, BigQuery, S3, and other data sources for comprehensive analytics and reporting.

---
