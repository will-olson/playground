# Section 23: 🗄️ Databricks SQL Integration

**Lines:** 5957-6194 (237 lines)

**Code Blocks:** 2

**Key Patterns:** 3

**Implementation Steps:** 0

---

## **23. 🗄️ Databricks SQL Integration**

### **Implementation Steps**:

**Step 1: Install Databricks SQL Go Dependencies**
```bash
cd backend
go get github.com/databricks/databricks-sql-go
```

**Step 2: Create Databricks Service**
```go
// backend/src/database/databricks.service.go
package database

import (
    "context"
    "database/sql"
    "fmt"
    "log"
    "time"
    
    "github.com/databricks/databricks-sql-go"
)

type DatabricksConfig struct {
    ServerHostname string
    HTTPPath       string
    AccessToken    string
    Catalog        string
    Schema         string
}

type DatabricksService struct {
    db     *sql.DB
    config DatabricksConfig
}

func NewDatabricksService(config DatabricksConfig) (*DatabricksService, error) {
    connector, err := databricks.NewConnector(
        databricks.WithServerHostname(config.ServerHostname),
        databricks.WithHTTPPath(config.HTTPPath),
        databricks.WithAccessToken(config.AccessToken),
        databricks.WithInitialNamespace(config.Catalog, config.Schema),
    )
    if err != nil {
        return nil, fmt.Errorf("failed to create Databricks connector: %w", err)
    }
    
    db := sql.OpenDB(connector)
    
    // Configure connection pool
    db.SetMaxOpenConns(10)
    db.SetMaxIdleConns(5)
    db.SetConnMaxLifetime(5 * time.Minute)
    
    // Test connection
    if err := db.Ping(); err != nil {
        return nil, fmt.Errorf("failed to ping Databricks: %w", err)
    }
    
    return &DatabricksService{
        db:     db,
        config: config,
    }, nil
}

func (d *DatabricksService) ExecuteQuery(ctx context.Context, query string, args ...interface{}) (*sql.Rows, error) {
    start := time.Now()
    defer func() {
        log.Printf("Databricks query executed in %v", time.Since(start))
    }()
    
    return d.db.QueryContext(ctx, query, args...)
}

func (d *DatabricksService) GetWorkbookData(ctx context.Context, workbookId string) ([]map[string]interface{}, error) {
    query := `
        SELECT 
            id,
            title,
            description,
            author,
            created_at,
            updated_at,
            tags,
            is_public,
            view_count,
            thumbnail_url
        FROM workbooks 
        WHERE id = ? AND is_active = true
    `
    
    rows, err := d.ExecuteQuery(ctx, query, workbookId)
    if err != nil {
        return nil, fmt.Errorf("failed to execute query: %w", err)
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

func (d *DatabricksService) GetAnalyticsData(ctx context.Context, workbookId string, timeRange string) ([]map[string]interface{}, error) {
    var startDate time.Time
    switch timeRange {
    case "7d":
        startDate = time.Now().AddDate(0, 0, -7)
    case "30d":
        startDate = time.Now().AddDate(0, 0, -30)
    case "90d":
        startDate = time.Now().AddDate(0, 0, -90)
    default:
        startDate = time.Now().AddDate(0, 0, -30)
    }
    
    query := `
        SELECT 
            workbook_id,
            event_type,
            COUNT(*) as event_count,
            COUNT(DISTINCT user_id) as unique_users,
            AVG(session_duration) as avg_session_duration,
            DATE(created_at) as event_date
        FROM workbook_analytics 
        WHERE workbook_id = ? AND created_at >= ?
        GROUP BY workbook_id, event_type, DATE(created_at)
        ORDER BY event_date DESC
    `
    
    rows, err := d.ExecuteQuery(ctx, query, workbookId, startDate)
    if err != nil {
        return nil, fmt.Errorf("failed to execute analytics query: %w", err)
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

func (d *DatabricksService) GetTopWorkbooks(ctx context.Context, limit int) ([]map[string]interface{}, error) {
    query := `
        SELECT 
            w.id,
            w.title,
            w.author,
            COUNT(wa.id) as view_count,
            COUNT(DISTINCT wa.user_id) as unique_viewers,
            AVG(wa.session_duration) as avg_session_duration,
            w.created_at
        FROM workbooks w
        LEFT JOIN workbook_analytics wa ON w.id = wa.workbook_id
        WHERE w.is_active = true 
        AND wa.created_at >= DATE_SUB(CURRENT_DATE(), INTERVAL 30 DAY)
        GROUP BY w.id, w.title, w.author, w.created_at
        ORDER BY view_count DESC
        LIMIT ?
    `
    
    rows, err := d.ExecuteQuery(ctx, query, limit)
    if err != nil {
        return nil, fmt.Errorf("failed to execute top workbooks query: %w", err)
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

func (d *DatabricksService) Close() error {
    return d.db.Close()
}
```

**Impact**: Provides high-performance analytics and data processing capabilities using Databricks' optimized SQL engine, enabling complex analytical queries and real-time data processing.

---
