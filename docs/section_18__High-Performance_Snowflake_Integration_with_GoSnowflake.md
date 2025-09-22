# Section 18: 🗄️ High-Performance Snowflake Integration with GoSnowflake

**Lines:** 4089-4551 (462 lines)

**Code Blocks:** 4

**Key Patterns:** 5

**Implementation Steps:** 0

---

## **18. 🗄️ High-Performance Snowflake Integration with GoSnowflake**

### **Implementation Steps**:

**Step 1: Install GoSnowflake Dependencies**
```bash
# Install Go toolchain
cd backend
go mod init sigma-playground-backend
go get github.com/snowflakedb/gosnowflake
```

**Step 2: Create Snowflake Connection Service**
```go
// backend/src/database/snowflake.service.go
package database

import (
    "database/sql"
    "fmt"
    "log"
    "time"
    
    _ "github.com/snowflakedb/gosnowflake"
)

type SnowflakeConfig struct {
    Account   string
    Username  string
    Password  string
    Database  string
    Schema    string
    Warehouse string
    Role      string
}

type SnowflakeService struct {
    db     *sql.DB
    config SnowflakeConfig
}

func NewSnowflakeService(config SnowflakeConfig) (*SnowflakeService, error) {
    dsn := fmt.Sprintf("%s:%s@%s/%s/%s?warehouse=%s&role=%s",
        config.Username,
        config.Password,
        config.Account,
        config.Database,
        config.Schema,
        config.Warehouse,
        config.Role,
    )
    
    db, err := sql.Open("snowflake", dsn)
    if err != nil {
        return nil, fmt.Errorf("failed to connect to Snowflake: %w", err)
    }
    
    // Configure connection pool
    db.SetMaxOpenConns(25)
    db.SetMaxIdleConns(5)
    db.SetConnMaxLifetime(5 * time.Minute)
    
    // Test connection
    if err := db.Ping(); err != nil {
        return nil, fmt.Errorf("failed to ping Snowflake: %w", err)
    }
    
    return &SnowflakeService{
        db:     db,
        config: config,
    }, nil
}

func (s *SnowflakeService) ExecuteQuery(query string, args ...interface{}) (*sql.Rows, error) {
    start := time.Now()
    defer func() {
        log.Printf("Snowflake query executed in %v", time.Since(start))
    }()
    
    return s.db.Query(query, args...)
}

func (s *SnowflakeService) ExecuteQueryWithContext(ctx context.Context, query string, args ...interface{}) (*sql.Rows, error) {
    return s.db.QueryContext(ctx, query, args...)
}

func (s *SnowflakeService) GetWorkbookData(workbookId string) ([]map[string]interface{}, error) {
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
            view_count
        FROM workbooks 
        WHERE id = ? AND is_active = true
    `
    
    rows, err := s.ExecuteQuery(query, workbookId)
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

func (s *SnowflakeService) GetUserWorkbooks(userId string, limit, offset int) ([]map[string]interface{}, error) {
    query := `
        SELECT 
            w.id,
            w.title,
            w.description,
            w.author,
            w.created_at,
            w.updated_at,
            w.tags,
            w.is_public,
            w.view_count,
            CASE WHEN f.user_id IS NOT NULL THEN true ELSE false END as is_favorite
        FROM workbooks w
        LEFT JOIN favorites f ON w.id = f.workbook_id AND f.user_id = ?
        WHERE w.is_active = true
        ORDER BY w.updated_at DESC
        LIMIT ? OFFSET ?
    `
    
    rows, err := s.ExecuteQuery(query, userId, limit, offset)
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

func (s *SnowflakeService) SearchWorkbooks(searchTerm string, filters map[string]interface{}) ([]map[string]interface{}, error) {
    baseQuery := `
        SELECT 
            w.id,
            w.title,
            w.description,
            w.author,
            w.created_at,
            w.updated_at,
            w.tags,
            w.is_public,
            w.view_count
        FROM workbooks w
        WHERE w.is_active = true
    `
    
    var conditions []string
    var args []interface{}
    
    if searchTerm != "" {
        conditions = append(conditions, "(w.title ILIKE ? OR w.description ILIKE ? OR w.tags ILIKE ?)")
        searchPattern := "%" + searchTerm + "%"
        args = append(args, searchPattern, searchPattern, searchPattern)
    }
    
    if author, ok := filters["author"]; ok {
        conditions = append(conditions, "w.author = ?")
        args = append(args, author)
    }
    
    if isPublic, ok := filters["is_public"]; ok {
        conditions = append(conditions, "w.is_public = ?")
        args = append(args, isPublic)
    }
    
    if len(conditions) > 0 {
        baseQuery += " AND " + strings.Join(conditions, " AND ")
    }
    
    baseQuery += " ORDER BY w.updated_at DESC LIMIT 50"
    
    rows, err := s.ExecuteQuery(baseQuery, args...)
    if err != nil {
        return nil, fmt.Errorf("failed to execute search query: %w", err)
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

func (s *SnowflakeService) Close() error {
    return s.db.Close()
}
```

**Step 3: Create Snowflake Analytics Service**
```go
// backend/src/analytics/snowflake-analytics.service.go
package analytics

import (
    "context"
    "database/sql"
    "fmt"
    "time"
)

type SnowflakeAnalytics struct {
    db *sql.DB
}

func (s *SnowflakeAnalytics) GetWorkbookAnalytics(workbookId string, timeRange string) (*WorkbookAnalytics, error) {
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
            COUNT(*) as total_views,
            COUNT(DISTINCT user_id) as unique_viewers,
            AVG(session_duration) as avg_session_duration,
            COUNT(CASE WHEN event_type = 'share' THEN 1 END) as total_shares,
            COUNT(CASE WHEN event_type = 'download' THEN 1 END) as total_downloads
        FROM workbook_analytics 
        WHERE workbook_id = ? AND created_at >= ?
    `
    
    var analytics WorkbookAnalytics
    err := s.db.QueryRow(query, workbookId, startDate).Scan(
        &analytics.TotalViews,
        &analytics.UniqueViewers,
        &analytics.AvgSessionDuration,
        &analytics.TotalShares,
        &analytics.TotalDownloads,
    )
    
    if err != nil {
        return nil, fmt.Errorf("failed to get analytics: %w", err)
    }
    
    return &analytics, nil
}

func (s *SnowflakeAnalytics) GetTopWorkbooks(limit int) ([]WorkbookStats, error) {
    query := `
        SELECT 
            w.id,
            w.title,
            w.author,
            COUNT(wa.id) as view_count,
            COUNT(DISTINCT wa.user_id) as unique_viewers,
            AVG(wa.session_duration) as avg_session_duration
        FROM workbooks w
        LEFT JOIN workbook_analytics wa ON w.id = wa.workbook_id
        WHERE w.is_active = true AND wa.created_at >= DATEADD(day, -30, CURRENT_DATE())
        GROUP BY w.id, w.title, w.author
        ORDER BY view_count DESC
        LIMIT ?
    `
    
    rows, err := s.db.Query(query, limit)
    if err != nil {
        return nil, fmt.Errorf("failed to execute query: %w", err)
    }
    defer rows.Close()
    
    var results []WorkbookStats
    for rows.Next() {
        var stats WorkbookStats
        err := rows.Scan(
            &stats.ID,
            &stats.Title,
            &stats.Author,
            &stats.ViewCount,
            &stats.UniqueViewers,
            &stats.AvgSessionDuration,
        )
        if err != nil {
            return nil, fmt.Errorf("failed to scan row: %w", err)
        }
        results = append(results, stats)
    }
    
    return results, nil
}
```

**Step 4: Create Go API Endpoints**
```go
// backend/src/handlers/snowflake.handlers.go
package handlers

import (
    "encoding/json"
    "net/http"
    "strconv"
    
    "github.com/gin-gonic/gin"
    "sigma-playground-backend/database"
)

type SnowflakeHandlers struct {
    snowflakeService *database.SnowflakeService
}

func NewSnowflakeHandlers(snowflakeService *database.SnowflakeService) *SnowflakeHandlers {
    return &SnowflakeHandlers{
        snowflakeService: snowflakeService,
    }
}

func (h *SnowflakeHandlers) GetWorkbook(c *gin.Context) {
    workbookId := c.Param("id")
    
    data, err := h.snowflakeService.GetWorkbookData(workbookId)
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
        return
    }
    
    if len(data) == 0 {
        c.JSON(http.StatusNotFound, gin.H{"error": "Workbook not found"})
        return
    }
    
    c.JSON(http.StatusOK, gin.H{
        "success": true,
        "data":    data[0],
    })
}

func (h *SnowflakeHandlers) GetUserWorkbooks(c *gin.Context) {
    userId := c.GetString("user_id")
    limitStr := c.DefaultQuery("limit", "20")
    offsetStr := c.DefaultQuery("offset", "0")
    
    limit, err := strconv.Atoi(limitStr)
    if err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid limit parameter"})
        return
    }
    
    offset, err := strconv.Atoi(offsetStr)
    if err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid offset parameter"})
        return
    }
    
    workbooks, err := h.snowflakeService.GetUserWorkbooks(userId, limit, offset)
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
        return
    }
    
    c.JSON(http.StatusOK, gin.H{
        "success": true,
        "data":    workbooks,
    })
}

func (h *SnowflakeHandlers) SearchWorkbooks(c *gin.Context) {
    searchTerm := c.Query("q")
    filters := make(map[string]interface{})
    
    if author := c.Query("author"); author != "" {
        filters["author"] = author
    }
    
    if isPublicStr := c.Query("is_public"); isPublicStr != "" {
        isPublic, err := strconv.ParseBool(isPublicStr)
        if err == nil {
            filters["is_public"] = isPublic
        }
    }
    
    workbooks, err := h.snowflakeService.SearchWorkbooks(searchTerm, filters)
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
        return
    }
    
    c.JSON(http.StatusOK, gin.H{
        "success": true,
        "data":    workbooks,
    })
}
```

**Impact**: Provides high-performance, scalable data access with connection pooling, query optimization, and advanced analytics capabilities for large-scale workbook management.

---
