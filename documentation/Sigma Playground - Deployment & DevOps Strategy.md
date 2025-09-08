# Sigma Playground - Deployment & DevOps Strategy

## Executive Summary
This document outlines the comprehensive DevOps strategy for Sigma Playground, covering infrastructure as code, containerization, CI/CD pipelines, environment management, monitoring, and scaling strategies.

---

## Table of Contents
1. [Infrastructure as Code](#infrastructure-as-code)
2. [Containerization Strategy](#containerization-strategy)
3. [CI/CD Pipeline](#cicd-pipeline)
4. [Environment Management](#environment-management)
5. [Monitoring & Logging](#monitoring--logging)
6. [Backup & Disaster Recovery](#backup--disaster-recovery)
7. [Scaling Strategies](#scaling-strategies)
8. [Security & Compliance](#security--compliance)
9. [Cost Optimization](#cost-optimization)
10. [Troubleshooting & Maintenance](#troubleshooting--maintenance)

---

## Infrastructure as Code

### Terraform Configuration

```hcl
# terraform/main.tf
terraform {
  required_version = ">= 1.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
  
  backend "s3" {
    bucket = "sigma-playground-terraform-state"
    key    = "infrastructure/terraform.tfstate"
    region = "us-west-2"
  }
}

provider "aws" {
  region = var.aws_region
}

# VPC Configuration
resource "aws_vpc" "main" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    Name        = "sigma-playground-vpc"
    Environment = var.environment
  }
}

# Public Subnets
resource "aws_subnet" "public" {
  count = 2

  vpc_id                  = aws_vpc.main.id
  cidr_block              = "10.0.${count.index + 1}.0/24"
  availability_zone       = data.aws_availability_zones.available.names[count.index]
  map_public_ip_on_launch = true

  tags = {
    Name        = "sigma-playground-public-${count.index + 1}"
    Environment = var.environment
    Type        = "public"
  }
}

# Private Subnets
resource "aws_subnet" "private" {
  count = 2

  vpc_id            = aws_vpc.main.id
  cidr_block        = "10.0.${count.index + 10}.0/24"
  availability_zone = data.aws_availability_zones.available.names[count.index]

  tags = {
    Name        = "sigma-playground-private-${count.index + 1}"
    Environment = var.environment
    Type        = "private"
  }
}

# RDS Database
resource "aws_db_instance" "postgres" {
  identifier = "sigma-playground-${var.environment}"

  engine         = "postgres"
  engine_version = "15.4"
  instance_class = var.database_instance_class

  allocated_storage     = 20
  max_allocated_storage = 100
  storage_type          = "gp3"
  storage_encrypted     = true

  db_name  = "sigma_playground"
  username = var.database_username
  password = var.database_password

  vpc_security_group_ids = [aws_security_group.database.id]
  db_subnet_group_name   = aws_db_subnet_group.main.name

  backup_retention_period = 7
  backup_window          = "03:00-04:00"
  maintenance_window     = "sun:04:00-sun:05:00"

  skip_final_snapshot = var.environment == "development"
  deletion_protection = var.environment == "production"

  tags = {
    Name        = "sigma-playground-database"
    Environment = var.environment
  }
}

# EKS Cluster
resource "aws_eks_cluster" "main" {
  name     = "sigma-playground-${var.environment}"
  role_arn = aws_iam_role.eks_cluster.arn
  version  = "1.28"

  vpc_config {
    subnet_ids              = concat(aws_subnet.public[*].id, aws_subnet.private[*].id)
    endpoint_private_access = true
    endpoint_public_access  = true
    public_access_cidrs     = ["0.0.0.0/0"]
  }

  encryption_config {
    provider {
      key_arn = aws_kms_key.eks.arn
    }
    resources = ["secrets"]
  }

  depends_on = [
    aws_iam_role_policy_attachment.eks_cluster_policy,
    aws_cloudwatch_log_group.eks_cluster,
  ]

  tags = {
    Name        = "sigma-playground-eks"
    Environment = var.environment
  }
}

# Redis Cluster
resource "aws_elasticache_replication_group" "redis" {
  replication_group_id       = "sigma-playground-${var.environment}"
  description                = "Redis cluster for Sigma Playground"

  node_type                  = var.redis_node_type
  port                       = 6379
  parameter_group_name       = "default.redis7"

  num_cache_clusters         = 2
  automatic_failover_enabled = true
  multi_az_enabled          = true

  subnet_group_name = aws_elasticache_subnet_group.main.name
  security_group_ids = [aws_security_group.redis.id]

  at_rest_encryption_enabled = true
  transit_encryption_enabled = true

  tags = {
    Name        = "sigma-playground-redis"
    Environment = var.environment
  }
}
```

### Environment Variables

```bash
# terraform/terraform.tfvars
aws_region = "us-west-2"
environment = "production"

# Database Configuration
database_instance_class = "db.t3.medium"
database_username = "sigma_admin"
database_password = "your-secure-password"

# Redis Configuration
redis_node_type = "cache.t3.micro"

# EKS Configuration
eks_node_instance_types = ["t3.medium", "t3.large"]
eks_node_desired_size = 2
eks_node_max_size = 10
eks_node_min_size = 1
```

---

## Containerization Strategy

### Dockerfile Configuration

```dockerfile
# Dockerfile.backend
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm ci --only=production

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Generate Prisma Client
RUN npx prisma generate

# Build the application
RUN npm run build

# Production image, copy all the files and run the app
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nestjs

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/prisma ./prisma

USER nestjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "dist/main.js"]
```

```dockerfile
# Dockerfile.frontend
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the application
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### Docker Compose

```yaml
# docker-compose.yml
version: '3.8'

services:
  postgres:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: sigma_playground
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./database/init.sql:/docker-entrypoint-initdb.d/init.sql
    ports:
      - "5432:5432"
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 10s
      timeout: 5s
      retries: 5

  redis:
    image: redis:7-alpine
    command: redis-server --appendonly yes
    volumes:
      - redis_data:/data
    ports:
      - "6379:6379"
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 10s
      timeout: 5s
      retries: 5

  backend:
    build:
      context: .
      dockerfile: Dockerfile.backend
    environment:
      NODE_ENV: development
      DATABASE_URL: postgresql://postgres:postgres@postgres:5432/sigma_playground
      REDIS_URL: redis://redis:6379
      JWT_ACCESS_SECRET: your-access-secret
      JWT_REFRESH_SECRET: your-refresh-secret
    ports:
      - "3001:3000"
    depends_on:
      postgres:
        condition: service_healthy
      redis:
        condition: service_healthy
    volumes:
      - ./src:/app/src
      - ./prisma:/app/prisma

  frontend:
    build:
      context: .
      dockerfile: Dockerfile.frontend
    environment:
      NODE_ENV: development
      NEXT_PUBLIC_API_URL: http://localhost:3001
    ports:
      - "3000:3000"
    depends_on:
      - backend

volumes:
  postgres_data:
  redis_data:
```

---

## CI/CD Pipeline

### GitHub Actions Workflow

```yaml
# .github/workflows/ci-cd.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

env:
  AWS_REGION: us-west-2
  ECR_REGISTRY: ${{ secrets.AWS_ACCOUNT_ID }}.dkr.ecr.us-west-2.amazonaws.com
  EKS_CLUSTER_NAME: sigma-playground-production

jobs:
  test:
    runs-on: ubuntu-latest
    
    services:
      postgres:
        image: postgres:15
        env:
          POSTGRES_PASSWORD: postgres
          POSTGRES_DB: sigma_playground_test
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          - 5432:5432

      redis:
        image: redis:7
        options: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          - 6379:6379

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: |
          npm ci
          cd frontend && npm ci

      - name: Run linting
        run: |
          npm run lint
          cd frontend && npm run lint

      - name: Run type checking
        run: |
          npm run type-check
          cd frontend && npm run type-check

      - name: Run tests
        run: |
          npm run test:coverage
          cd frontend && npm run test:coverage
        env:
          DATABASE_URL: postgresql://postgres:postgres@localhost:5432/sigma_playground_test
          REDIS_URL: redis://localhost:6379

      - name: Upload coverage reports
        uses: codecov/codecov-action@v3
        with:
          files: ./coverage/lcov.info,./frontend/coverage/lcov.info

  security:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Run security audit
        run: |
          npm audit --audit-level moderate
          cd frontend && npm audit --audit-level moderate

      - name: Run Snyk security scan
        uses: snyk/actions/node@master
        env:
          SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}

  build-and-push:
    needs: [test, security]
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main' || github.ref == 'refs/heads/develop'
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ${{ env.AWS_REGION }}

      - name: Login to Amazon ECR
        id: login-ecr
        uses: aws-actions/amazon-ecr-login@v2

      - name: Build and push backend image
        run: |
          docker build -f Dockerfile.backend -t $ECR_REGISTRY/sigma-playground-backend:${{ github.sha }} .
          docker push $ECR_REGISTRY/sigma-playground-backend:${{ github.sha }}

      - name: Build and push frontend image
        run: |
          docker build -f Dockerfile.frontend -t $ECR_REGISTRY/sigma-playground-frontend:${{ github.sha }} .
          docker push $ECR_REGISTRY/sigma-playground-frontend:${{ github.sha }}

  deploy:
    needs: build-and-push
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ${{ env.AWS_REGION }}

      - name: Update kubeconfig
        run: |
          aws eks update-kubeconfig --region ${{ env.AWS_REGION }} --name ${{ env.EKS_CLUSTER_NAME }}

      - name: Deploy to EKS
        run: |
          # Update image tags in Kubernetes manifests
          sed -i "s|IMAGE_TAG|${{ github.sha }}|g" k8s/*.yaml
          
          # Apply Kubernetes manifests
          kubectl apply -f k8s/
          
          # Wait for rollout to complete
          kubectl rollout status deployment/sigma-playground-backend
          kubectl rollout status deployment/sigma-playground-frontend

      - name: Run database migrations
        run: |
          kubectl run migration-job --image=$ECR_REGISTRY/sigma-playground-backend:${{ github.sha }} --rm -i --restart=Never -- npx prisma migrate deploy

  notify:
    needs: [deploy]
    runs-on: ubuntu-latest
    if: always()
    
    steps:
      - name: Notify deployment status
        uses: 8398a7/action-slack@v3
        with:
          status: ${{ job.status }}
          channel: '#deployments'
          webhook_url: ${{ secrets.SLACK_WEBHOOK }}
```

### Kubernetes Manifests

```yaml
# k8s/namespace.yaml
apiVersion: v1
kind: Namespace
metadata:
  name: sigma-playground
  labels:
    name: sigma-playground

---
# k8s/configmap.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: sigma-playground-config
  namespace: sigma-playground
data:
  NODE_ENV: "production"
  PORT: "3000"
  DATABASE_URL: "postgresql://sigma_admin:${DB_PASSWORD}@postgres-service:5432/sigma_playground"
  REDIS_URL: "redis://redis-service:6379"

---
# k8s/secret.yaml
apiVersion: v1
kind: Secret
metadata:
  name: sigma-playground-secrets
  namespace: sigma-playground
type: Opaque
data:
  JWT_ACCESS_SECRET: <base64-encoded-secret>
  JWT_REFRESH_SECRET: <base64-encoded-secret>
  DB_PASSWORD: <base64-encoded-password>

---
# k8s/backend-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: sigma-playground-backend
  namespace: sigma-playground
spec:
  replicas: 3
  selector:
    matchLabels:
      app: sigma-playground-backend
  template:
    metadata:
      labels:
        app: sigma-playground-backend
    spec:
      containers:
      - name: backend
        image: IMAGE_TAG
        ports:
        - containerPort: 3000
        env:
        - name: NODE_ENV
          valueFrom:
            configMapKeyRef:
              name: sigma-playground-config
              key: NODE_ENV
        - name: DATABASE_URL
          valueFrom:
            configMapKeyRef:
              name: sigma-playground-config
              key: DATABASE_URL
        - name: JWT_ACCESS_SECRET
          valueFrom:
            secretKeyRef:
              name: sigma-playground-secrets
              key: JWT_ACCESS_SECRET
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /health/ready
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 5

---
# k8s/frontend-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: sigma-playground-frontend
  namespace: sigma-playground
spec:
  replicas: 2
  selector:
    matchLabels:
      app: sigma-playground-frontend
  template:
    metadata:
      labels:
        app: sigma-playground-frontend
    spec:
      containers:
      - name: frontend
        image: IMAGE_TAG
        ports:
        - containerPort: 3000
        env:
        - name: NODE_ENV
          valueFrom:
            configMapKeyRef:
              name: sigma-playground-config
              key: NODE_ENV
        - name: NEXT_PUBLIC_API_URL
          value: "https://api.sigmaplayground.com"
        resources:
          requests:
            memory: "128Mi"
            cpu: "100m"
          limits:
            memory: "256Mi"
            cpu: "200m"

---
# k8s/service.yaml
apiVersion: v1
kind: Service
metadata:
  name: sigma-playground-backend-service
  namespace: sigma-playground
spec:
  selector:
    app: sigma-playground-backend
  ports:
  - port: 80
    targetPort: 3000
  type: ClusterIP

---
apiVersion: v1
kind: Service
metadata:
  name: sigma-playground-frontend-service
  namespace: sigma-playground
spec:
  selector:
    app: sigma-playground-frontend
  ports:
  - port: 80
    targetPort: 3000
  type: ClusterIP

---
# k8s/ingress.yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: sigma-playground-ingress
  namespace: sigma-playground
  annotations:
    kubernetes.io/ingress.class: "alb"
    alb.ingress.kubernetes.io/scheme: internet-facing
    alb.ingress.kubernetes.io/target-type: ip
    alb.ingress.kubernetes.io/ssl-redirect: "443"
    alb.ingress.kubernetes.io/certificate-arn: arn:aws:acm:us-west-2:ACCOUNT:certificate/CERT-ID
spec:
  rules:
  - host: api.sigmaplayground.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: sigma-playground-backend-service
            port:
              number: 80
  - host: sigmaplayground.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: sigma-playground-frontend-service
            port:
              number: 80
```

---

## Environment Management

### Environment Configuration

```typescript
// config/environments.ts
export const environments = {
  development: {
    database: {
      url: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/sigma_playground_dev',
      ssl: false
    },
    redis: {
      url: process.env.REDIS_URL || 'redis://localhost:6379'
    },
    jwt: {
      accessSecret: process.env.JWT_ACCESS_SECRET || 'dev-access-secret',
      refreshSecret: process.env.JWT_REFRESH_SECRET || 'dev-refresh-secret',
      accessExpiry: '15m',
      refreshExpiry: '7d'
    },
    cors: {
      origin: ['http://localhost:3000', 'http://localhost:3001'],
      credentials: true
    }
  },
  
  staging: {
    database: {
      url: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false }
    },
    redis: {
      url: process.env.REDIS_URL
    },
    jwt: {
      accessSecret: process.env.JWT_ACCESS_SECRET,
      refreshSecret: process.env.JWT_REFRESH_SECRET,
      accessExpiry: '15m',
      refreshExpiry: '7d'
    },
    cors: {
      origin: ['https://staging.sigmaplayground.com'],
      credentials: true
    }
  },
  
  production: {
    database: {
      url: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: true }
    },
    redis: {
      url: process.env.REDIS_URL
    },
    jwt: {
      accessSecret: process.env.JWT_ACCESS_SECRET,
      refreshSecret: process.env.JWT_REFRESH_SECRET,
      accessExpiry: '15m',
      refreshExpiry: '7d'
    },
    cors: {
      origin: ['https://sigmaplayground.com'],
      credentials: true
    }
  }
};

export const getEnvironmentConfig = () => {
  const env = process.env.NODE_ENV || 'development';
  return environments[env] || environments.development;
};
```

### Environment Promotion

```bash
#!/bin/bash
# scripts/promote-environment.sh

ENVIRONMENT=$1
VERSION=$2

if [ -z "$ENVIRONMENT" ] || [ -z "$VERSION" ]; then
  echo "Usage: $0 <environment> <version>"
  echo "Example: $0 staging v1.2.3"
  exit 1
fi

echo "Promoting version $VERSION to $ENVIRONMENT environment..."

# Update Kubernetes manifests
kubectl set image deployment/sigma-playground-backend \
  backend=$ECR_REGISTRY/sigma-playground-backend:$VERSION \
  -n sigma-playground-$ENVIRONMENT

kubectl set image deployment/sigma-playground-frontend \
  frontend=$ECR_REGISTRY/sigma-playground-frontend:$VERSION \
  -n sigma-playground-$ENVIRONMENT

# Wait for rollout
kubectl rollout status deployment/sigma-playground-backend -n sigma-playground-$ENVIRONMENT
kubectl rollout status deployment/sigma-playground-frontend -n sigma-playground-$ENVIRONMENT

# Run health checks
kubectl run health-check --image=curlimages/curl --rm -i --restart=Never -- \
  curl -f http://sigma-playground-backend-service:80/health

echo "Promotion to $ENVIRONMENT completed successfully!"
```

---

## Monitoring & Logging

### Prometheus Configuration

```yaml
# monitoring/prometheus.yml
global:
  scrape_interval: 15s
  evaluation_interval: 15s

rule_files:
  - "rules/*.yml"

alerting:
  alertmanagers:
    - static_configs:
        - targets:
          - alertmanager:9093

scrape_configs:
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']

  - job_name: 'kubernetes-pods'
    kubernetes_sd_configs:
      - role: pod
    relabel_configs:
      - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_scrape]
        action: keep
        regex: true
      - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_path]
        action: replace
        target_label: __metrics_path__
        regex: (.+)

  - job_name: 'sigma-playground-backend'
    static_configs:
      - targets: ['sigma-playground-backend-service:80']
    metrics_path: '/metrics'
    scrape_interval: 30s

  - job_name: 'postgres'
    static_configs:
      - targets: ['postgres-exporter:9187']

  - job_name: 'redis'
    static_configs:
      - targets: ['redis-exporter:9121']
```

### Grafana Dashboards

```json
{
  "dashboard": {
    "id": null,
    "title": "Sigma Playground - Application Metrics",
    "tags": ["sigma-playground", "application"],
    "timezone": "browser",
    "panels": [
      {
        "id": 1,
        "title": "Request Rate",
        "type": "graph",
        "targets": [
          {
            "expr": "rate(http_requests_total[5m])",
            "legendFormat": "{{method}} {{route}}"
          }
        ],
        "yAxes": [
          {
            "label": "requests/sec"
          }
        ]
      },
      {
        "id": 2,
        "title": "Response Time",
        "type": "graph",
        "targets": [
          {
            "expr": "histogram_quantile(0.95, rate(http_request_duration_seconds_bucket[5m]))",
            "legendFormat": "95th percentile"
          },
          {
            "expr": "histogram_quantile(0.50, rate(http_request_duration_seconds_bucket[5m]))",
            "legendFormat": "50th percentile"
          }
        ],
        "yAxes": [
          {
            "label": "seconds"
          }
        ]
      },
      {
        "id": 3,
        "title": "Error Rate",
        "type": "graph",
        "targets": [
          {
            "expr": "rate(http_requests_total{status_code=~\"5..\"}[5m]) / rate(http_requests_total[5m]) * 100",
            "legendFormat": "Error Rate %"
          }
        ],
        "yAxes": [
          {
            "label": "percentage"
          }
        ]
      },
      {
        "id": 4,
        "title": "Database Connections",
        "type": "graph",
        "targets": [
          {
            "expr": "pg_stat_database_numbackends",
            "legendFormat": "Active Connections"
          }
        ]
      }
    ],
    "time": {
      "from": "now-1h",
      "to": "now"
    },
    "refresh": "30s"
  }
}
```

### ELK Stack Configuration

```yaml
# logging/elasticsearch.yml
cluster.name: sigma-playground
node.name: node-1
network.host: 0.0.0.0
discovery.type: single-node
xpack.security.enabled: false

---
# logging/logstash.conf
input {
  beats {
    port => 5044
  }
}

filter {
  if [fields][service] == "sigma-playground-backend" {
    grok {
      match => { "message" => "%{TIMESTAMP_ISO8601:timestamp} %{LOGLEVEL:level} %{GREEDYDATA:message}" }
    }
    
    date {
      match => [ "timestamp", "ISO8601" ]
    }
    
    mutate {
      add_field => { "service" => "backend" }
    }
  }
  
  if [fields][service] == "sigma-playground-frontend" {
    grok {
      match => { "message" => "%{TIMESTAMP_ISO8601:timestamp} %{LOGLEVEL:level} %{GREEDYDATA:message}" }
    }
    
    date {
      match => [ "timestamp", "ISO8601" ]
    }
    
    mutate {
      add_field => { "service" => "frontend" }
    }
  }
}

output {
  elasticsearch {
    hosts => ["elasticsearch:9200"]
    index => "sigma-playground-%{+YYYY.MM.dd}"
  }
}
```

---

## Backup & Disaster Recovery

### Database Backup Strategy

```bash
#!/bin/bash
# scripts/backup-database.sh

# Configuration
DB_HOST="postgres-service"
DB_PORT="5432"
DB_NAME="sigma_playground"
BACKUP_BUCKET="sigma-playground-backups"
RETENTION_DAYS=30

# Generate backup filename
BACKUP_FILE="sigma-playground-$(date +%Y%m%d_%H%M%S).sql"

echo "Starting database backup..."

# Create backup
kubectl exec -n sigma-playground postgres-pod -- pg_dump \
  -h $DB_HOST \
  -p $DB_PORT \
  -U sigma_admin \
  -d $DB_NAME \
  --verbose --clean --no-owner --no-privileges \
  --format=plain > /tmp/$BACKUP_FILE

# Compress backup
gzip /tmp/$BACKUP_FILE

# Upload to S3
aws s3 cp /tmp/$BACKUP_FILE.gz s3://$BACKUP_BUCKET/database/

# Clean up local file
rm /tmp/$BACKUP_FILE.gz

# Clean up old backups
aws s3 ls s3://$BACKUP_BUCKET/database/ --recursive | \
  awk '$1 < "'$(date -d "$RETENTION_DAYS days ago" +%Y-%m-%d)'" {print $4}' | \
  xargs -I {} aws s3 rm s3://$BACKUP_BUCKET/{}

echo "Database backup completed: $BACKUP_FILE.gz"
```

### Disaster Recovery Plan

```yaml
# disaster-recovery/restore-plan.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: disaster-recovery-plan
  namespace: sigma-playground
data:
  restore-database.sh: |
    #!/bin/bash
    echo "Starting disaster recovery restore..."
    
    # Get latest backup
    LATEST_BACKUP=$(aws s3 ls s3://sigma-playground-backups/database/ --recursive | sort | tail -n 1 | awk '{print $4}')
    
    # Download backup
    aws s3 cp s3://sigma-playground-backups/$LATEST_BACKUP /tmp/restore.sql.gz
    
    # Decompress
    gunzip /tmp/restore.sql.gz
    
    # Restore database
    kubectl exec -i -n sigma-playground postgres-pod -- psql -U sigma_admin -d sigma_playground < /tmp/restore.sql
    
    # Clean up
    rm /tmp/restore.sql
    
    echo "Database restore completed"
  
  restore-redis.sh: |
    #!/bin/bash
    echo "Starting Redis restore..."
    
    # Get latest Redis backup
    LATEST_REDIS_BACKUP=$(aws s3 ls s3://sigma-playground-backups/redis/ --recursive | sort | tail -n 1 | awk '{print $4}')
    
    # Download and restore
    aws s3 cp s3://sigma-playground-backups/$LATEST_REDIS_BACKUP - | kubectl exec -i -n sigma-playground redis-pod -- redis-cli --pipe
    
    echo "Redis restore completed"
```

---

## Scaling Strategies

### Horizontal Pod Autoscaler

```yaml
# k8s/hpa.yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: sigma-playground-backend-hpa
  namespace: sigma-playground
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: sigma-playground-backend
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
  - type: Resource
    resource:
      name: memory
      target:
        type: Utilization
        averageUtilization: 80
  behavior:
    scaleUp:
      stabilizationWindowSeconds: 60
      policies:
      - type: Percent
        value: 100
        periodSeconds: 15
    scaleDown:
      stabilizationWindowSeconds: 300
      policies:
      - type: Percent
        value: 10
        periodSeconds: 60

---
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: sigma-playground-frontend-hpa
  namespace: sigma-playground
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: sigma-playground-frontend
  minReplicas: 2
  maxReplicas: 5
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
```

### Cluster Autoscaler

```yaml
# k8s/cluster-autoscaler.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: cluster-autoscaler
  namespace: kube-system
  labels:
    app: cluster-autoscaler
spec:
  replicas: 1
  selector:
    matchLabels:
      app: cluster-autoscaler
  template:
    metadata:
      labels:
        app: cluster-autoscaler
    spec:
      serviceAccountName: cluster-autoscaler
      containers:
      - image: k8s.gcr.io/autoscaling/cluster-autoscaler:v1.21.0
        name: cluster-autoscaler
        resources:
          limits:
            cpu: 100m
            memory: 300Mi
          requests:
            cpu: 100m
            memory: 300Mi
        command:
        - ./cluster-autoscaler
        - --v=4
        - --stderrthreshold=info
        - --cloud-provider=aws
        - --skip-nodes-with-local-storage=false
        - --expander=least-waste
        - --node-group-auto-discovery=asg:tag=k8s.io/cluster-autoscaler/enabled,k8s.io/cluster-autoscaler/sigma-playground-production
        - --balance-similar-node-groups
        - --scale-down-enabled=true
        - --scale-down-delay-after-add=10m
        - --scale-down-unneeded-time=10m
        env:
        - name: AWS_REGION
          value: us-west-2
```

---

## Security & Compliance

### Security Scanning

```yaml
# security/trivy-scan.yaml
apiVersion: batch/v1
kind: CronJob
metadata:
  name: trivy-scan
  namespace: sigma-playground
spec:
  schedule: "0 2 * * *" # Daily at 2 AM
  jobTemplate:
    spec:
      template:
        spec:
          containers:
          - name: trivy
            image: aquasec/trivy:latest
            command:
            - trivy
            - image
            - --format
            - json
            - --output
            - /tmp/scan-results.json
            - $ECR_REGISTRY/sigma-playground-backend:latest
            volumeMounts:
            - name: scan-results
              mountPath: /tmp
          volumes:
          - name: scan-results
            emptyDir: {}
          restartPolicy: OnFailure
```

### Compliance Monitoring

```yaml
# compliance/policy.yaml
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: sigma-playground-security
spec:
  validationFailureAction: enforce
  background: true
  rules:
  - name: require-security-context
    match:
      any:
      - resources:
          kinds:
          - Pod
          namespaces:
          - sigma-playground
    validate:
      message: "Security context is required"
      pattern:
        spec:
          securityContext:
            runAsNonRoot: true
            runAsUser: ">0"
  
  - name: disallow-privileged
    match:
      any:
      - resources:
          kinds:
          - Pod
          namespaces:
          - sigma-playground
    validate:
      message: "Privileged containers are not allowed"
      pattern:
        spec:
          containers:
          - name: "*"
            securityContext:
              privileged: false
```

---

## Cost Optimization

### Resource Optimization

```yaml
# cost-optimization/resource-quotas.yaml
apiVersion: v1
kind: ResourceQuota
metadata:
  name: sigma-playground-quota
  namespace: sigma-playground
spec:
  hard:
    requests.cpu: "4"
    requests.memory: 8Gi
    limits.cpu: "8"
    limits.memory: 16Gi
    persistentvolumeclaims: "4"
    pods: "20"
    services: "10"

---
apiVersion: v1
kind: LimitRange
metadata:
  name: sigma-playground-limits
  namespace: sigma-playground
spec:
  limits:
  - default:
      cpu: "500m"
      memory: "512Mi"
    defaultRequest:
      cpu: "100m"
      memory: "128Mi"
    type: Container
```

### Spot Instance Configuration

```yaml
# cost-optimization/spot-instances.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: spot-instance-config
  namespace: sigma-playground
data:
  node-affinity.yaml: |
    apiVersion: v1
    kind: Pod
    metadata:
      name: spot-instance-pod
    spec:
      affinity:
        nodeAffinity:
          preferredDuringSchedulingIgnoredDuringExecution:
          - weight: 100
            preference:
              matchExpressions:
              - key: node.kubernetes.io/instance-type
                operator: In
                values:
                - t3.medium
                - t3.large
                - t3.xlarge
          - weight: 50
            preference:
              matchExpressions:
              - key: karpenter.sh/capacity-type
                operator: In
                values:
                - spot
```

---

## Troubleshooting & Maintenance

### Health Check Scripts

```bash
#!/bin/bash
# scripts/health-check.sh

echo "=== Sigma Playground Health Check ==="

# Check Kubernetes pods
echo "Checking pod status..."
kubectl get pods -n sigma-playground

# Check services
echo "Checking services..."
kubectl get services -n sigma-playground

# Check ingress
echo "Checking ingress..."
kubectl get ingress -n sigma-playground

# Check database connectivity
echo "Checking database connectivity..."
kubectl run db-check --image=postgres:15 --rm -i --restart=Never -- \
  psql -h postgres-service -U sigma_admin -d sigma_playground -c "SELECT 1;"

# Check Redis connectivity
echo "Checking Redis connectivity..."
kubectl run redis-check --image=redis:7 --rm -i --restart=Never -- \
  redis-cli -h redis-service ping

# Check application health
echo "Checking application health..."
kubectl run app-check --image=curlimages/curl --rm -i --restart=Never -- \
  curl -f http://sigma-playground-backend-service:80/health

echo "Health check completed!"
```

### Maintenance Windows

```yaml
# maintenance/maintenance-window.yaml
apiVersion: batch/v1
kind: CronJob
metadata:
  name: maintenance-window
  namespace: sigma-playground
spec:
  schedule: "0 3 * * 0" # Weekly on Sunday at 3 AM
  jobTemplate:
    spec:
      template:
        spec:
          containers:
          - name: maintenance
            image: curlimages/curl:latest
            command:
            - /bin/sh
            - -c
            - |
              echo "Starting maintenance window..."
              
              # Restart deployments for updates
              kubectl rollout restart deployment/sigma-playground-backend -n sigma-playground
              kubectl rollout restart deployment/sigma-playground-frontend -n sigma-playground
              
              # Wait for rollouts to complete
              kubectl rollout status deployment/sigma-playground-backend -n sigma-playground
              kubectl rollout status deployment/sigma-playground-frontend -n sigma-playground
              
              # Clean up old images
              kubectl get images | grep sigma-playground | head -n -5 | awk '{print $1}' | xargs -r kubectl delete image
              
              echo "Maintenance window completed"
          restartPolicy: OnFailure
```

---

## References & Resources

- [Terraform AWS Provider](https://registry.terraform.io/providers/hashicorp/aws/latest)
- [Kubernetes Documentation](https://kubernetes.io/docs/)
- [Prometheus Documentation](https://prometheus.io/docs/)
- [Grafana Documentation](https://grafana.com/docs/)
- [AWS EKS Best Practices](https://aws.github.io/aws-eks-best-practices/)

---

## Version Control

- **Version:** 1.0.0
- **Last Updated:** 2024-01-01
- **Next Review:** 2024-02-01
- **Maintainer:** DevOps Team
