# Sigma Playground

A community hub and public portfolio platform for the Sigma ecosystem. Sigma Playground empowers data professionals to showcase their work and learn from their peers while demonstrating the power and versatility of the Sigma platform.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm 9+
- SQLite (development) / PostgreSQL 13+ (production)
- Redis 6+ (optional for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sigma-playground
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   cd backend && npm install
   
   # Install frontend dependencies
   cd ../frontend && npm install
   ```

3. **Set up environment variables**
   ```bash
   # Backend environment
   cp env.example backend/.env
   # Edit backend/.env with your configuration
   
   # Frontend environment (optional)
   # Create frontend/.env.local if needed
   ```

4. **Set up the database**
   ```bash
   cd backend
   npm run db:migrate
   npm run db:seed
   ```

5. **Start development servers**
   ```bash
   # Terminal 1 - Backend
   cd backend && npm run start:dev
   
   # Terminal 2 - Frontend  
   cd frontend && npm run dev
   ```

This will start:
- Backend API server on http://localhost:3001
- Frontend development server on http://localhost:3000
- Prisma Studio on http://localhost:5556 (run `cd backend && npx prisma studio --port 5556`)

### Quick Access URLs
- **Application**: http://localhost:3000
- **API Documentation**: http://localhost:3001/api/docs
- **Database Studio**: http://localhost:5556
- **Profile Testing**: http://localhost:3000/profile-test

## 📁 Project Structure

```
sigma-playground/
├── backend/          # NestJS API server
├── frontend/         # React/Next.js frontend
├── database/         # Prisma migrations and seeds
├── docs/            # Documentation
├── scripts/         # Deployment and utility scripts
└── shared/          # Shared types and utilities
```

## 🛠️ Development

### Available Scripts

**Backend (from `backend/` directory):**
- `npm run start:dev` - Start NestJS server in development mode
- `npm run build` - Build backend for production
- `npm run start:prod` - Start production server
- `npm run db:generate` - Generate Prisma client
- `npm run db:migrate` - Run database migrations
- `npm run db:seed` - Seed database with sample data
- `npm run db:studio` - Open Prisma Studio
- `npm run db:reset` - Reset database (⚠️ destructive)

**Frontend (from `frontend/` directory):**
- `npm run dev` - Start Next.js development server
- `npm run build` - Build frontend for production
- `npm run start` - Start production server
- `npm run lint` - Lint code

### Technology Stack

**Backend:**
- NestJS (Node.js framework)
- TypeScript
- SQLite (development) / PostgreSQL (production)
- Prisma (ORM)
- JWT (authentication)
- Redis (caching, optional for development)
- Sigma Embedding API integration

**Frontend:**
- React 18
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- React Query (data fetching)
- Zustand (state management)
- Radix UI (component primitives)

## 🎯 Features

### ✅ Implemented Features
- **User Authentication** - JWT-based registration and login system
- **Workbook Management** - CRUD operations for Sigma workbooks
- **Public Discovery** - Browse and search workbooks with filtering
- **User Profiles** - User management and profile system
- **Sigma Embedding** - Secure JWT-based Sigma workbook embedding
- **Test Interface** - Comprehensive testing page for embed functionality
- **Admin Dashboard** - Content moderation and analytics
- **Database Schema** - Complete Prisma schema with migrations
- **API Documentation** - Swagger/OpenAPI documentation

### 🚧 In Development
- **Real Sigma Integration** - Requires Sigma credentials for full functionality
- **Social Features** - Follow users and favorite workbooks
- **Content Curation** - Feature workbooks and authors

## 🔧 Configuration

### Environment Variables

**Backend Configuration (`backend/.env`):**
```bash
# Database
DATABASE_URL="file:./dev.db"  # SQLite for development
DIRECT_URL="file:./dev.db"

# JWT
JWT_SECRET="your-jwt-secret"
JWT_EXPIRES_IN="7d"

# Sigma Integration (REQUIRED for full functionality)
SIGMA_CLIENT_ID="your-sigma-client-id"
SIGMA_CLIENT_SECRET="your-sigma-client-secret"
SIGMA_ORG_SLUG="your-org-slug"
SIGMA_BASE_URL="https://app.sigmacomputing.com"

# Redis (optional for development)
REDIS_URL="redis://localhost:6379"
```

**Frontend Configuration (`frontend/.env.local`):**
```bash
NEXT_PUBLIC_API_URL="http://localhost:3001/api/v1"
NEXT_PUBLIC_SIGMA_BASE_URL="https://app.sigmacomputing.com"
```

### Database Setup

1. **Development (SQLite):**
   ```bash
   cd backend
   npm run db:migrate
   npm run db:seed
   ```

2. **Production (PostgreSQL):**
   - Create a PostgreSQL database
   - Update `DATABASE_URL` in your `.env` file
   - Run migrations: `npm run db:migrate`
   - Seed with sample data: `npm run db:seed`

## 🛠️ Development Tools

### Built-in Development Experience

The application includes powerful built-in development tools for enhanced debugging and testing:

#### Prisma Studio - Database Management
- **URL**: http://localhost:5556/
- **Purpose**: Visual database management and data exploration
- **Features**:
  - Browse and edit data through intuitive web interface
  - View relationships between Users, Workbooks, Tags, Favorites
  - Real-time data validation and integrity checking
  - Quick data modifications without SQL knowledge
  - Test data creation for profile testing

#### Next.js Development Tools
- **Next.js DevTools**: Bottom-left circular "N" icon
  - Route information (Static/SSR/SSG)
  - Turbopack bundler status
  - Performance metrics and compilation stats
- **React Query DevTools**: TanStack Query panel
  - Query status monitoring (Fresh/Fetching/Stale/Inactive)
  - API call tracking and performance insights
  - Cache behavior visualization
  - Error debugging and query management

#### Development Environment Stack
- **Frontend**: http://localhost:3000 (Next.js with dev tools)
- **Backend API**: http://localhost:3001 (NestJS with logging)
- **Database Studio**: http://localhost:5556 (Prisma Studio)

#### Profile Testing Workflow
1. Navigate to http://localhost:3000/profile-test
2. Click on profiles - watch React Query DevTools show new queries
3. Monitor API calls and caching behavior in real-time
4. Cross-reference data in Prisma Studio with frontend display
5. Debug loading states and performance issues

For detailed information, see [Development Tools & Database Management Guide](documentation/Development%20Tools%20&%20Database%20Management%20Guide.md).

## 🧪 Testing

### Current Testing Status

**✅ Working:**
- All UI components and pages load correctly
- Backend API endpoints respond properly
- Database operations (CRUD) function correctly
- JWT generation and validation
- Embed URL construction
- Configuration testing interface

**❌ Requires Sigma Credentials:**
- Real Sigma workbook embedding
- Actual authentication with Sigma
- Permission validation
- Cross-domain iframe communication

### Testing Commands

**Backend API Testing:**
```bash
# Test Sigma health endpoint
curl -X GET http://localhost:3001/api/v1/sigma/health

# Test embed generation
curl -X POST http://localhost:3001/api/v1/sigma/embed \
  -H "Content-Type: application/json" \
  -d '{
    "workbookPath": "workbook/test/abc123",
    "userEmail": "test@example.com",
    "options": {"theme": "dark"}
  }'
```

**Frontend Testing:**
```bash
# Test pages
curl -X GET http://localhost:3000/          # Home
curl -X GET http://localhost:3000/workbooks # Workbooks
curl -X GET http://localhost:3000/create    # Create
curl -X GET http://localhost:3000/test-embed # Test Embed
```

## 🚀 Next Steps

### To Enable Full Functionality:

1. **Get Sigma Credentials** from your Sigma admin:
   - Client ID and Secret for embed authentication
   - Organization slug
   - Base URL for your Sigma instance

2. **Update Environment Variables:**
   - Add credentials to `backend/.env`
   - Restart backend server

3. **Test Real Integration:**
   - Use actual Sigma workbook paths
   - Test different user roles and permissions
   - Validate embed functionality end-to-end

4. **Deploy to Production:**
   - Set up PostgreSQL database
   - Configure production environment variables
   - Deploy backend and frontend

