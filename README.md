# Sigma Playground

A comprehensive platform for creating, sharing, and collaborating on data workbooks with advanced Sigma integration.

## 🚀 Features

- **Dashboard**: Personal analytics and workbook performance tracking
- **Community Hub**: Discover and share workbooks with the community
- **Create Studio**: Advanced workbook creation with templates and collaborative editing
- **Enhanced Authentication**: Breakthrough Sigma integration with 2FA support
- **Real-time Collaboration**: Team-based workbook development
- **Export Scheduling**: Automated workbook exports in multiple formats

## 📁 Project Structure

```
playground/
├── backend/          # NestJS API server
├── frontend/         # Next.js React application
├── shared/           # Shared TypeScript types and utilities
├── docs/             # Documentation and guides
├── scripts/          # Development and utility scripts
├── assets/           # Static assets and templates
└── external/         # External integrations and samples
```

## 🛠️ Development Setup

### Prerequisites
- Node.js 18+
- npm or yarn
- SQLite (for development)

### Backend Setup
```bash
cd backend
npm install
cp .env.example .env  # Configure your environment variables
npx prisma migrate dev
npm run start:dev
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Environment Variables
See `backend/.env.example` for required configuration.

## 🔧 Key Technologies

- **Backend**: NestJS, Prisma, SQLite
- **Frontend**: Next.js, React, Tailwind CSS, Radix UI
- **Authentication**: JWT with Sigma integration
- **Database**: SQLite with Prisma ORM
- **Styling**: Tailwind CSS with custom design system

## 📚 Documentation

- [Development Guides](docs/)
- [API Documentation](docs/api/)
- [Authentication Setup](docs/authentication/)
- [Deployment Guide](docs/deployment/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
