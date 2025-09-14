# Development Tools & Database Management Guide

## Prisma Studio - Database Management

### Overview
Prisma Studio provides a visual interface for database management at `http://localhost:5556/`

### Key Features
- **Visual Database Management**: Browse and edit data through a clean, modern web interface
- **Real-time Updates**: See changes instantly as you modify data
- **No SQL Knowledge Required**: Manage data through forms and tables instead of writing queries
- **Data Exploration**: Navigate between Users, Workbooks, Tags, Favorites, etc.
- **Relationship Visualization**: See how data connects across different models
- **Data Validation**: Verify seeded data and relationships are working correctly

### Value for Profile Testing
- **Profile Testing**: View actual user data that profile pages display
- **Relationship Testing**: Check follow/favorite relationships are properly set up
- **Data Integrity**: Ensure foreign keys and constraints work correctly
- **Quick Data Modifications**: Add, edit, or delete records without writing SQL
- **Test Data Creation**: Easily create test users, workbooks, and relationships

### Available Tables
- **Users**: View user profiles, check `full_name`, `profile_image_url`, etc.
- **Workbooks**: See workbook data, author relationships, tags
- **Favorites**: Check favorite relationships between users and workbooks
- **Follows**: Verify follow relationships between users
- **Tags**: Browse available tags and their usage

## Next.js Development Tools

### Next.js DevTools (Bottom-Left Panel)
The circular "N" icon provides:
- **Route Information**: Shows current route type (Static/SSR/SSG)
- **Turbopack Status**: Indicates if the fast bundler is enabled
- **Performance Metrics**: Real-time build and compilation stats
- **Quick Access**: Easy access to route info and preferences

### React Query DevTools (TanStack Query)
The dark panel showing "TANSTACK React Query v5" provides:

#### Query Status Monitoring
- 🟢 **Fresh (0)**: Recently fetched, up-to-date data
- 🔵 **Fetching (0)**: Currently loading data
- 🟠 **Stale (1)**: Data exists but may be outdated
- ⚫ **Inactive (0)**: Query is not currently active

#### Query Management
- **Search & Filter**: Find specific queries by name
- **Sort Options**: Organize by status, timestamp, etc.
- **Bulk Actions**: Delete, copy, or manage multiple queries

### Development Preferences
- **Theme**: System/Dark/Light mode for dev tools
- **Position**: Bottom Left/Right, Top Left/Right placement
- **Size**: Small/Medium/Large dev tools
- **Visibility Controls**: Hide/show tools temporarily or permanently

## Development Environment Stack

### Complete Tooling
- **Frontend**: http://localhost:3000 (Next.js)
- **Backend API**: http://localhost:3001 (NestJS)
- **Database Studio**: http://localhost:5556 (Prisma Studio)

### Testing Workflow
1. **Navigate to** http://localhost:3000/profile-test
2. **Click on a profile** - watch React Query DevTools show new queries
3. **Navigate back and forth** - see how caching improves performance
4. **Check query status** - verify data freshness and loading states
5. **View data in Prisma Studio** - verify database state matches frontend display

### Benefits for Profile Testing
- **API Monitoring**: Watch queries execute as you navigate between profiles
- **Data Flow Tracking**: See exactly what data is being requested and cached
- **Performance Insights**: Monitor how quickly profile data loads
- **Error Debugging**: Spot failed queries or stale data issues immediately
- **Cross-reference**: Compare Prisma Studio data with frontend display
