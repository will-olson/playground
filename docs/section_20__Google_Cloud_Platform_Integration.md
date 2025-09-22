# Section 20: ☁️ Google Cloud Platform Integration

**Lines:** 4786-5066 (280 lines)

**Code Blocks:** 3

**Key Patterns:** 4

**Implementation Steps:** 0

---

## **20. ☁️ Google Cloud Platform Integration**

### **Implementation Steps**:

**Step 1: Install Google Cloud Go Dependencies**
```bash
cd backend
go get cloud.google.com/go/storage
go get cloud.google.com/go/bigquery
go get cloud.google.com/go/pubsub
go get cloud.google.com/go/secretmanager
go get cloud.google.com/go/logging
```

**Step 2: Create Google Cloud Services**
```go
// backend/src/cloud/gcp.service.go
package cloud

import (
    "context"
    "fmt"
    "io"
    "log"
    
    "cloud.google.com/go/bigquery"
    "cloud.google.com/go/logging"
    "cloud.google.com/go/pubsub"
    "cloud.google.com/go/secretmanager/apiv1"
    "cloud.google.com/go/storage"
    "google.golang.org/api/option"
)

type GCPService struct {
    projectID    string
    storage      *storage.Client
    bigquery     *bigquery.Client
    pubsub       *pubsub.Client
    secretClient *secretmanager.Client
    logger       *logging.Client
}

func NewGCPService(projectID string, credentialsPath string) (*GCPService, error) {
    ctx := context.Background()
    
    // Initialize Storage client
    storageClient, err := storage.NewClient(ctx, option.WithCredentialsFile(credentialsPath))
    if err != nil {
        return nil, fmt.Errorf("failed to create storage client: %w", err)
    }
    
    // Initialize BigQuery client
    bigqueryClient, err := bigquery.NewClient(ctx, projectID, option.WithCredentialsFile(credentialsPath))
    if err != nil {
        return nil, fmt.Errorf("failed to create bigquery client: %w", err)
    }
    
    // Initialize Pub/Sub client
    pubsubClient, err := pubsub.NewClient(ctx, projectID, option.WithCredentialsFile(credentialsPath))
    if err != nil {
        return nil, fmt.Errorf("failed to create pubsub client: %w", err)
    }
    
    // Initialize Secret Manager client
    secretClient, err := secretmanager.NewClient(ctx, option.WithCredentialsFile(credentialsPath))
    if err != nil {
        return nil, fmt.Errorf("failed to create secret manager client: %w", err)
    }
    
    // Initialize Cloud Logging client
    loggerClient, err := logging.NewClient(ctx, projectID, option.WithCredentialsFile(credentialsPath))
    if err != nil {
        return nil, fmt.Errorf("failed to create logging client: %w", err)
    }
    
    return &GCPService{
        projectID:    projectID,
        storage:      storageClient,
        bigquery:     bigqueryClient,
        pubsub:       pubsubClient,
        secretClient: secretClient,
        logger:       loggerClient,
    }, nil
}

func (g *GCPService) UploadWorkbookThumbnail(ctx context.Context, bucketName, objectName string, data []byte) error {
    bucket := g.storage.Bucket(bucketName)
    obj := bucket.Object(objectName)
    
    writer := obj.NewWriter(ctx)
    writer.ContentType = "image/png"
    writer.CacheControl = "public, max-age=3600"
    
    if _, err := writer.Write(data); err != nil {
        return fmt.Errorf("failed to write to storage: %w", err)
    }
    
    if err := writer.Close(); err != nil {
        return fmt.Errorf("failed to close writer: %w", err)
    }
    
    return nil
}

func (g *GCPService) GetWorkbookThumbnail(ctx context.Context, bucketName, objectName string) ([]byte, error) {
    bucket := g.storage.Bucket(bucketName)
    obj := bucket.Object(objectName)
    
    reader, err := obj.NewReader(ctx)
    if err != nil {
        return nil, fmt.Errorf("failed to create reader: %w", err)
    }
    defer reader.Close()
    
    return io.ReadAll(reader)
}

func (g *GCPService) PublishWorkbookEvent(ctx context.Context, topicName string, event map[string]interface{}) error {
    topic := g.pubsub.Topic(topicName)
    
    message := &pubsub.Message{
        Data: []byte(fmt.Sprintf("%v", event)),
        Attributes: map[string]string{
            "event_type": "workbook_event",
            "timestamp":  fmt.Sprintf("%d", time.Now().Unix()),
        },
    }
    
    result := topic.Publish(ctx, message)
    _, err := result.Get(ctx)
    if err != nil {
        return fmt.Errorf("failed to publish message: %w", err)
    }
    
    return nil
}

func (g *GCPService) QueryAnalytics(ctx context.Context, query string) (*bigquery.RowIterator, error) {
    q := g.bigquery.Query(query)
    return q.Read(ctx)
}

func (g *GCPService) GetSecret(ctx context.Context, secretName string) (string, error) {
    req := &secretmanagerpb.AccessSecretVersionRequest{
        Name: fmt.Sprintf("projects/%s/secrets/%s/versions/latest", g.projectID, secretName),
    }
    
    result, err := g.secretClient.AccessSecretVersion(ctx, req)
    if err != nil {
        return "", fmt.Errorf("failed to access secret: %w", err)
    }
    
    return string(result.Payload.Data), nil
}

func (g *GCPService) LogEvent(ctx context.Context, severity logging.Severity, message string, labels map[string]string) error {
    logger := g.logger.Logger("sigma-playground")
    
    entry := logging.Entry{
        Severity: severity,
        Payload:  message,
        Labels:   labels,
    }
    
    return logger.LogSync(ctx, entry)
}
```

**Step 3: Create Cloud Storage Integration**
```go
// backend/src/storage/cloud-storage.service.go
package storage

import (
    "context"
    "fmt"
    "io"
    "mime/multipart"
    "path/filepath"
    "strings"
    "time"
    
    "cloud.google.com/go/storage"
)

type CloudStorageService struct {
    gcpService *cloud.GCPService
    bucketName string
}

func NewCloudStorageService(gcpService *cloud.GCPService, bucketName string) *CloudStorageService {
    return &CloudStorageService{
        gcpService: gcpService,
        bucketName: bucketName,
    }
}

func (s *CloudStorageService) UploadWorkbookFile(ctx context.Context, file multipart.File, filename string, workbookId string) (string, error) {
    // Generate unique filename
    ext := filepath.Ext(filename)
    objectName := fmt.Sprintf("workbooks/%s/%d%s", workbookId, time.Now().Unix(), ext)
    
    // Upload to GCS
    bucket := s.gcpService.storage.Bucket(s.bucketName)
    obj := bucket.Object(objectName)
    
    writer := obj.NewWriter(ctx)
    writer.ContentType = getContentType(ext)
    writer.CacheControl = "public, max-age=3600"
    
    if _, err := io.Copy(writer, file); err != nil {
        return "", fmt.Errorf("failed to copy file: %w", err)
    }
    
    if err := writer.Close(); err != nil {
        return "", fmt.Errorf("failed to close writer: %w", err)
    }
    
    // Return public URL
    return fmt.Sprintf("https://storage.googleapis.com/%s/%s", s.bucketName, objectName), nil
}

func (s *CloudStorageService) UploadScreenshot(ctx context.Context, data []byte, workbookId string) (string, error) {
    objectName := fmt.Sprintf("screenshots/%s/%d.png", workbookId, time.Now().Unix())
    
    if err := s.gcpService.UploadWorkbookThumbnail(ctx, s.bucketName, objectName, data); err != nil {
        return "", err
    }
    
    return fmt.Sprintf("https://storage.googleapis.com/%s/%s", s.bucketName, objectName), nil
}

func (s *CloudStorageService) DeleteWorkbookFiles(ctx context.Context, workbookId string) error {
    bucket := s.gcpService.storage.Bucket(s.bucketName)
    
    query := &storage.Query{
        Prefix: fmt.Sprintf("workbooks/%s/", workbookId),
    }
    
    it := bucket.Objects(ctx, query)
    for {
        obj, err := it.Next()
        if err == storage.Done {
            break
        }
        if err != nil {
            return fmt.Errorf("failed to iterate objects: %w", err)
        }
        
        if err := bucket.Object(obj.Name).Delete(ctx); err != nil {
            return fmt.Errorf("failed to delete object %s: %w", obj.Name, err)
        }
    }
    
    return nil
}

func getContentType(ext string) string {
    switch strings.ToLower(ext) {
    case ".png":
        return "image/png"
    case ".jpg", ".jpeg":
        return "image/jpeg"
    case ".gif":
        return "image/gif"
    case ".pdf":
        return "application/pdf"
    case ".csv":
        return "text/csv"
    case ".json":
        return "application/json"
    default:
        return "application/octet-stream"
    }
}
```

**Impact**: Provides scalable cloud storage, real-time analytics with BigQuery, event-driven architecture with Pub/Sub, and secure secret management for production deployment.

---
