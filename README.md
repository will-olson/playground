# Sigma Playground

A community hub and public portfolio platform for the Sigma ecosystem. Sigma Playground empowers data professionals to showcase their work and learn from their peers while demonstrating the power and versatility of the Sigma platform.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm 9+
- PostgreSQL 13+
- Redis 6+

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sigma-playground
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env
   # Edit .env with your configuration
   ```

4. **Set up the database**
   ```bash
   npm run db:migrate
   npm run db:seed
   ```

5. **Start development servers**
   ```bash
   npm run dev
   ```

This will start:
- Backend API server on http://localhost:3001
- Frontend development server on http://localhost:3000

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

- `npm run dev` - Start both backend and frontend in development mode
- `npm run dev:backend` - Start only the backend server
- `npm run dev:frontend` - Start only the frontend server
- `npm run build` - Build both backend and frontend for production
- `npm run test` - Run all tests
- `npm run lint` - Lint all code
- `npm run format` - Format code with Prettier
- `npm run db:generate` - Generate Prisma client
- `npm run db:migrate` - Run database migrations
- `npm run db:seed` - Seed database with sample data
- `npm run db:studio` - Open Prisma Studio

### Technology Stack

**Backend:**
- NestJS (Node.js framework)
- TypeScript
- PostgreSQL (database)
- Prisma (ORM)
- JWT (authentication)
- Redis (caching)

**Frontend:**
- React 18
- Next.js 14
- TypeScript
- Tailwind CSS
- React Query (data fetching)
- Zustand (state management)

## 🎯 Features

### Core Features
- **User Authentication** - Secure registration and login
- **Workbook Publishing** - Share Sigma visualizations
- **Public Discovery** - Browse and search workbooks
- **User Profiles** - Showcase your work and bio
- **Social Features** - Follow users and favorite workbooks

### Admin Features
- **Content Curation** - Feature workbooks and authors
- **Moderation Tools** - Manage content and users
- **Analytics Dashboard** - Platform insights and metrics

## 🔧 Configuration

### Environment Variables

See `env.example` for all available configuration options.

### Database Setup

1. Create a PostgreSQL database
2. Update `DATABASE_URL` in your `.env` file
3. Run migrations: `npm run db:migrate`
4. Seed with sample data: `npm run db:seed`

