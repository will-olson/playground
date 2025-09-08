## Product Requirements Document (PRD): Sigma Playground

### 1\. Introduction & Vision

1.1 Vision Statement:  
To create a community hub and public portfolio platform for the Sigma ecosystem. Sigma Playground will empower data professionals to showcase their work and learn from their peers while demonstrating the power and versatility of the Sigma platform.

1.2 Problem Statement:  
Sigma users lack a centralized, public platform to share their creations, build a portfolio, and engage with a broader community. Hiring managers and potential customers have no single destination to discover the talent within the Sigma community or see real-world examples of what Sigma can do.

1.3 Target Audience:

* Creators: Data Analysts, BI Developers, Data Scientists, and students using Sigma who want to build a public portfolio and share their skills.  
* Consumers: The general public, hiring managers, and prospective Sigma customers who want to explore interactive data visualizations and see the platform's capabilities.  
* Community: The broader Sigma user base seeking inspiration, best practices, and connections with other practitioners.

### 2\. Core Features & User Stories

This application is a full-stack wrapper built around the core functionality of Sigma's embedding feature.

2.1 User Accounts & Profiles

* Epic: User Identity  
  * Story 1: As a new user, I want to sign up for a Sigma Playground account using my email and a password so I can start sharing my work.  
  * Story 2: As a registered user, I want to log in and out of my account securely.  
  * Story 3: As a user, I want a public profile page with a unique, customizable URL (e.g., sigmaplayground.com/app/profile/my-username).  
  * Story 4: As a user, I want to edit my profile to include my name, bio, title, organization, location, and links to my social media profiles (LinkedIn, Twitter/X, personal website).  
  * Story 5: As a user, I want to manage my account settings, including changing my password and deleting my account.

2.2 Workbook Publishing & Management

* Epic: Content Creation & Display  
  * Story 1: As a logged-in user, I want to create a new post by providing a public embed URL for a Sigma workbook.  
  * Story 2: When publishing, I want to add a custom title, a detailed description, and relevant tags to make my workbook discoverable.  
  * Story 3: As a creator, I want my workbook to be displayed on a dedicated page that features the embedded Sigma content prominently.  
  * Story 4: As a creator, I want to control the visibility of my workbook, such as hiding it from my public profile while keeping the direct link active.  
  * Story 5: As a creator, I want to set permissions, such as allowing or disallowing others to download or copy the workbook (Note: This may depend on Sigma's embed API capabilities).

2.3 Discovery & Community Engagement

* Epic: Community Hub & Discovery  
  * Story 1: As a visitor, I want to see a curated "Viz of the Day" on the homepage to discover high-quality content.  
  * Story 2: As a visitor, I want to browse sections on the homepage like "Latest & Greatest" and "Highlights" to see new and popular workbooks.  
  * Story 3: As a user, I want to use robust search functionality to find workbooks based on titles, descriptions, tags, or authors.  
  * Story 4: As a user, I want to "Favorite" a workbook, and see the total favorite count on the workbook page.  
  * Story 5: As a user, I want to "Follow" authors I find interesting.  
  * Story 6: As a logged-in user, I want to see a "Recent Activity" feed on my homepage showing new workbooks from authors I follow.  
  * Story 7: As a user, I want to be able to subscribe via email to notifications for new "Viz of the Day" posts.

2.4 Administrative Curation

* Epic: Platform Curation  
  * Story 1: As a Sigma admin, I want a dashboard to review community nominations and select a "Viz of the Day."  
  * Story 2: As a Sigma admin, I want to feature specific authors on the homepage to highlight community leaders.  
  * Story 3: As a Sigma admin, I want the ability to moderate content and manage users.

### 3\. Backend Requirements & Database Architecture

This section is the technical foundation of Sigma Playground. It requires a robust, scalable, and relational backend to manage users, content metadata, and social interactions.

3.1 Recommended Technology Stack:

* Backend Framework: Node.js with NestJS (provides a structured, scalable architecture suitable for this project).  
* Database: PostgreSQL. Its support for relational data, JSONB data types (for flexible metadata), and robust performance makes it the ideal choice.  
* ORM (Object-Relational Mapping): Prisma. It offers excellent type safety, an intuitive schema definition language, and simplifies database interactions.  
* Authentication: JWT (JSON Web Tokens) managed with Passport.js library.

3.2 Database Schema & Entity Relationship Details:  
The database must be designed to efficiently store relationships between users, workbooks, and community interactions. Below are the key tables (entities) and their relationships.

**Users Table: Stores all user account information.**

* id (PK, UUID)  
  * username (VARCHAR, UNIQUE, NOT NULL) \- For the profile URL.  
  * email (VARCHAR, UNIQUE, NOT NULL)  
  * password\_hash (VARCHAR, NOT NULL)  
  * full\_name (VARCHAR)  
  * bio (TEXT)  
  * title (VARCHAR)  
  * organization (VARCHAR)  
  * location (VARCHAR)  
  * social\_links (JSONB) \- Flexible storage for links like { "linkedin": "url", "website": "url" }.  
  * profile\_image\_url (VARCHAR)  
  * created\_at (TIMESTAMP)  
  * updated\_at (TIMESTAMP)

  **Workbooks Table: Stores metadata for each embedded Sigma workbook.**

  * id (PK, UUID)  
  * author\_id (FK, references Users.id, NOT NULL)  
  * title (VARCHAR, NOT NULL)  
  * description (TEXT)  
  * sigma\_embed\_url (VARCHAR, NOT NULL)  
  * is\_publicly\_visible (BOOLEAN, default: TRUE) \- For the "Show Viz on Profile" toggle.  
  * allow\_copy (BOOLEAN, default: TRUE)  
  * view\_count (INTEGER, default: 0\)  
  * published\_at (TIMESTAMP)  
  * updated\_at (TIMESTAMP)  
  * Relationship: One User can have many Workbooks.  
    

  **Tags Table: A central repository for all tags.**  
  * id (PK, SERIAL)  
  * name (VARCHAR, UNIQUE, NOT NULL) \- e.g., "Finance", "Marketing", "SaaS".  
  * Relationship: Many-to-Many with Workbooks.

  **Workbook\_Tags (Join Table): Connects workbooks and tags.**

  * workbook\_id (FK, references Workbooks.id)  
  * tag\_id (FK, references Tags.id)  
  * Primary Key: (workbook\_id, tag\_id)


  **Favorites (Join Table): Tracks which users have favorited which workbooks.**

  * user\_id (FK, references Users.id)  
  * workbook\_id (FK, references Workbooks.id)  
  * created\_at (TIMESTAMP)  
  * Primary Key: (user\_id, workbook\_id)


  **Follows (Join Table): Represents the social graph.**

  * follower\_id (FK, references Users.id) \- The user who is doing the following.  
  * following\_id (FK, references Users.id) \- The user who is being followed.  
  * created\_at (TIMESTAMP)  
  * Primary Key: (follower\_id, following\_id)


  **Featured\_Items Table: An administrative table for curating the homepage.**

  * id (PK, SERIAL)  
  * item\_id (UUID, NOT NULL) \- The ID of the workbook or user being featured.  
  * item\_type (ENUM, ('workbook', 'user'), NOT NULL)  
  * feature\_type (ENUM, ('viz\_of\_the\_day', 'featured\_author', 'highlight'), NOT NULL)  
  * featured\_date (DATE) \- The date this item is featured (especially for "Viz of the Day").  
  * curated\_by\_admin\_id (FK, references Users.id)  
  * created\_at (TIMESTAMP)

![][image1]  
---

## Development Roadmap

Phase 1: MVP \- Core Functionality  
The goal is to launch a functional platform where users can sign up, publish workbooks, and view them.

* Backend:  
  * Set up PostgreSQL database with the defined schema (Users, Workbooks, Tags, Workbook\_Tags).  
  * Implement user authentication (signup, login, JWT generation).  
  * Build core CRUD APIs for Users (profile management) and Workbooks (create, read, update, delete).  
* Frontend:  
  * User signup and login forms.  
  * A simple, clean homepage displaying a grid of the most recently published workbooks.  
  * A functional Workbook Page that correctly embeds the Sigma viz and displays its title, author, and description.  
  * Basic User Profile page showing a user's published workbooks.  
  * "Create" page with a form to submit a new workbook embed URL and its metadata.  
* Deployment\*\*\*:  
  * ~~Set up CI/CD pipeline and initial cloud hosting (e.g., Vercel for frontend, AWS RDS/Heroku for backend/DB).~~

Phase 2: Community & Curation  
Goal is to build the features that turn the site from a simple gallery into a community hub.

* Backend:  
  * Implement Favorites and Follows tables and associated APIs.  
  * Build logic for the "Recent Activity" feed (fetch latest workbooks from followed users).  
  * Implement the Featured\_Items table and admin-only APIs to manage homepage content.  
  * Develop a basic search API (full-text search on PostgreSQL for titles, descriptions, and authors).  
* Frontend:  
  * Add "Favorite" and "Follow" buttons and functionality.  
  * Build the full homepage experience with "Viz of the Day", "Featured Author", and "Recent Activity" sections.  
  * Create a simple admin panel for content curation.  
  * Implement the search bar and search results page.  
* Analytics:  
  * Integrate a page view tracking mechanism (e.g., a simple API endpoint that increments the view\_count on the Workbooks table).

Phase 3: Polish & Expansion  
The goal is to refine the user experience and add advanced features.

* Backend/Frontend:  
  * Develop a notification system (email or in-app) for "New Viz of the Day" and new content from followed authors.  
  * Add "Community Callout" section for events/posts.  
  * Enhance author profiles with stats (total views, total favorites, follower count).  
  * Improve search with faceted filtering (by tag, author, date range).  
  * Explore deeper integration with Sigma's APIs if they become available (e.g., automatically pulling metadata).

---

### Instructions for Cursor: Backend & Database Buildout

Use the following instructions in a markdown file to guide Cursor in generating the backend code.  
markdown

````
# Sigma Playground: Backend Architecture & Database Buildout

## Objective
Your task is to generate the backend for a full-stack application called "Sigma Playground." The application is a public portfolio and community hub for Sigma BI users. You will use a modern, scalable tech stack.

## Core Technologies
*   **Framework:** NestJS (using TypeScript)
*   **Database:** PostgreSQL
*   **ORM:** Prisma
*   **Authentication:** Passport.js with JWT strategy

## 1. Prisma Schema Definition

First, create a `schema.prisma` file that defines the entire database structure. This schema should include all tables, fields, types, and relations as specified below. Use UUIDs for primary keys where appropriate.

```prisma
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id                String      @id @default(uuid())
  username          String      @unique
  email             String      @unique
  password_hash     String
  full_name         String?
  bio               String?
  title             String?
  organization      String?
  location          String?
  social_links      Json?
  profile_image_url String?
  created_at        DateTime    @default(now())
  updated_at        DateTime    @updatedAt

  workbooks         Workbook[]
  favorites         Favorite[]
  followers         Follow[]    @relation("Following")
  following         Follow[]    @relation("Followers")
  curated_features  FeaturedItem[]
}

model Workbook {
  id                  String      @id @default(uuid())
  title               String
  description         String?
  sigma_embed_url     String
  is_publicly_visible Boolean     @default(true)
  allow_copy          Boolean     @default(true)
  view_count          Int         @default(0)
  published_at        DateTime    @default(now())
  updated_at          DateTime    @updatedAt

  author    User     @relation(fields: [author_id], references: [id])
  author_id String

  tags      WorkbookTag[]
  favorited_by Favorite[]
  features    FeaturedItem[] @relation(name: "FeaturedWorkbook")
}

model Tag {
  id   Int    @id @default(autoincrement())
  name String @unique

  workbooks WorkbookTag[]
}

model WorkbookTag {
  workbook    Workbook @relation(fields: [workbook_id], references: [id])
  workbook_id String
  tag         Tag      @relation(fields: [tag_id], references: [id])
  tag_id      Int

  @@id([workbook_id, tag_id])
}

model Favorite {
  user        User     @relation(fields: [user_id], references: [id])
  user_id     String
  workbook    Workbook @relation(fields: [workbook_id], references: [id])
  workbook_id String
  created_at  DateTime @default(now())

  @@id([user_id, workbook_id])
}

model Follow {
  follower     User     @relation("Followers", fields: [follower_id], references: [id])
  follower_id  String
  following    User     @relation("Following", fields: [following_id], references: [id])
  following_id String
  created_at   DateTime @default(now())

  @@id([follower_id, following_id])
}

model FeaturedItem {
  id                  Int      @id @default(autoincrement())
  item_id             String   // Can be a Workbook ID or User ID
  item_type           ItemType
  feature_type        FeatureType
  featured_date       DateTime @db.Date
  created_at          DateTime @default(now())

  curated_by          User     @relation(fields: [curated_by_admin_id], references: [id])
  curated_by_admin_id String

  // Optional relations to enforce integrity if desired
  workbook            Workbook? @relation(name: "FeaturedWorkbook", fields: [item_id], references: [id])
}

enum ItemType {
  workbook
  user
}

enum FeatureType {
  viz_of_the_day
  featured_author
  highlight
}
```

## 2. API Endpoints (NestJS Modules)

Generate the necessary NestJS modules, controllers, and services to expose the following RESTful API endpoints. Implement DTOs (Data Transfer Objects) for request validation.

*   **Auth Module (`/auth`)**
    *   `POST /register`: Register a new user.
    *   `POST /login`: Authenticate a user and return a JWT.

*   **Users Module (`/users`)**
    *   `GET /:username`: Get a user's public profile data.
    *   `PUT /profile`: (Authenticated) Update the logged-in user's profile.
    *   `POST /:username/follow`: (Authenticated) Follow/unfollow a user.

*   **Workbooks Module (`/workbooks`)**
    *   `POST /`: (Authenticated) Create a new workbook post.
    *   `GET /:id`: Get details for a single workbook.
    *   `PUT /:id`: (Authenticated, Author only) Update a workbook's metadata.
    *   `DELETE /:id`: (Authenticated, Author only) Delete a workbook.
    *   `POST /:id/favorite`: (Authenticated) Favorite/unfavorite a workbook.
    *   `GET /feed`: (Authenticated) Get a chronological feed of workbooks from followed users.

*   **Admin Module (`/admin`)** - These routes should be protected by an admin role guard.
    *   `POST /feature`: Create a new featured item (Viz of the Day, etc.).

Start by generating the `AuthModule` with user registration and JWT-based login. Then, proceed to the `WorkbooksModule`.
````

---

### Structured Prompt for Lovable: Frontend Experience

Use this prompt to guide an AI design tool like Lovable in generating the UI/UX for Sigma Playground.  
text

```
# Lovable Design Prompt: Sigma Playground Frontend

## 1. Role

You are a world-class UX/UI designer specializing in creating clean, modern, and engaging community platforms for data and technology products. Your designs should be intuitive, visually appealing, and data-forward.

## 2. Project Overview

**Project Name:** Sigma Playground
**Core Concept:** A public portfolio and community showcase platform for users of the Sigma BI tool, inspired by Tableau Public. Users can publish their embedded Sigma workbooks, get discovered, and interact with a community.

## 3. Design Ethos & Keywords

*   **Clean & Professional:** Use ample white space. The focus should be on the user-generated content (the visualizations).
*   **Data-Forward:** Typography and layout should feel precise and analytical.
*   **Community-Focused:** The design should encourage interaction (following, favoriting).
*   **Modern & Approachable:** Use a contemporary color palette (inspired by Sigma's branding, but with its own identity), rounded corners on containers, and clear, sans-serif fonts.
*   **Responsive:** The design must be fully responsive for desktop, tablet, and mobile.

## 4. Key Screens to Design

Please generate high-fidelity designs and user flows for the following key screens:

**a) The Homepage (Discover Page):**
*   **Header:** Clean navigation with links to "Learn," "Create," and the User Profile/Login button.
*   **Hero Section: "Viz of the Day"**
    *   A large, prominent card featuring a single workbook.
    *   Must include: a large thumbnail/preview of the viz, the title, the author's name and profile picture, and key stats (views, favorites). A "See All" link to a history page.
*   **Section 2: "Latest & Greatest"**
    *   A horizontal-scrolling or grid-based layout of 4-8 workbook cards.
    *   Each card should be a smaller version of the hero card: thumbnail, title, author.
*   **Section 3: "Recent Activity" (For logged-in users)**
    *   A social-style feed showing recent workbook uploads from authors the user follows.
*   **Section 4: "Featured Author"**
    *   A dedicated card highlighting one community member. Include their profile picture, name, a short bio snippet, and a "Follow" button.
*   **Section 5: "Sigma Public Blog"**
    *   A section with 2-3 cards linking to recent blog posts.

**b) The Workbook Page:**
*   **Main Content:** The embedded Sigma workbook should take up the majority of the initial viewport width and height.
*   **Action Bar (Above or next to embed):** Buttons for "Copy," "Favorite," "Share," and "Export."
*   **Details Section (Below the embed):**
    *   **Left Side:** Workbook Title, Author (link to profile), and full description.
    *   **Right Side:** A box showing total pageviews and favorites. A list of "Tags" displayed as clean, clickable pills/bubbles. Published/Updated dates.
*   **Permissions:** For the author viewing their own workbook, show the visibility toggles ("Show Viz on Profile," "Allow Access") in an intuitive way.

**c) The User Profile Page:**
*   **Profile Header:** User's profile picture, full name, title, organization, location. A prominent "Follow" button for visitors.
*   **Stats Bar:** Key metrics like "Followers," "Following," "Workbooks," and "Total Favorites."
*   **Bio & Links:** A section for the user's bio and clearly visible icons linking to their social profiles.
*   **Content Gallery:** A tabbed interface.
    *   **Tab 1 (Default): "Workbooks"** - A responsive grid of all the user's public workbooks.
    *   **Tab 2: "Favorites"** - A grid of workbooks the user has favorited.

## 5. User Flow to Illustrate

Please create a click-through prototype for the following user journey:
*A new visitor lands on the Homepage -> They click on the "Viz of the Day" -> They view the Workbook Page -> They are impressed and click on the author's name to visit their Profile Page -> They click the "Follow" button on the profile -> They are prompted to "Sign Up" to follow.*
```

// \----------------------------------------------------  
// DBML Schema for Sigma Playground  
// Database: PostgreSQL  
// \----------------------------------------------------

Project SigmaPlayground {  
  database\_type: 'PostgreSQL'  
  Note: 'Database schema for the Sigma Playground community platform, inspired by Tableau Public.'  
}

// Enum definitions for curated content  
Enum item\_type {  
  workbook  
  user  
}

Enum feature\_type {  
  viz\_of\_the\_day  
  featured\_author  
  highlight  
}

// \--- Core Tables \---

Table Users as U {  
  id varchar \[pk, note: 'UUID'\]  
  username varchar \[unique, not null, note: 'Used for the public profile URL'\]  
  email varchar \[unique, not null\]  
  password\_hash varchar \[not null\]  
  full\_name varchar  
  bio text  
  title varchar  
  organization varchar  
  location varchar  
  social\_links jsonb \[note: 'Flexible storage for links like { "linkedin": "url" }'\]  
  profile\_image\_url varchar  
  created\_at timestamp \[default: \`now()\`\]  
  updated\_at timestamp \[default: \`now()\`\]

  Note: 'Stores all user account information.'  
}

Table Workbooks as W {  
  id varchar \[pk, note: 'UUID'\]  
  author\_id varchar \[not null\]  
  title varchar \[not null\]  
  description text  
  sigma\_embed\_url varchar \[not null\]  
  is\_publicly\_visible boolean \[default: true, note: 'For the "Show Viz on Profile" toggle'\]  
  allow\_copy boolean \[default: true\]  
  view\_count integer \[default: 0\]  
  published\_at timestamp \[default: \`now()\`\]  
  updated\_at timestamp \[default: \`now()\`\]

  Note: 'Stores metadata for each embedded Sigma workbook.'  
}

Table Tags as T {  
  id integer \[pk, increment\]  
  name varchar \[unique, not null\]

  Note: 'A central repository for all tags (e.g., "Finance", "Marketing").'  
}

// \--- Join Tables for Relationships \---

Table Workbook\_Tags {  
  workbook\_id varchar \[not null\]  
  tag\_id integer \[not null\]

  indexes {  
    (workbook\_id, tag\_id) \[pk\]  
  }  
  Note: 'Many-to-many relationship between Workbooks and Tags.'  
}

Table Favorites {  
  user\_id varchar \[not null\]  
  workbook\_id varchar \[not null\]  
  created\_at timestamp \[default: \`now()\`\]

  indexes {  
    (user\_id, workbook\_id) \[pk\]  
  }  
  Note: 'Tracks which users have favorited which workbooks.'  
}

Table Follows {  
  follower\_id varchar \[not null, note: 'The user who is doing the following'\]  
  following\_id varchar \[not null, note: 'The user who is being followed'\]  
  created\_at timestamp \[default: \`now()\`\]

  indexes {  
    (follower\_id, following\_id) \[pk\]  
  }  
  Note: 'Represents the social follower/following graph.'  
}

// \--- Administrative Tables \---

Table Featured\_Items {  
  id integer \[pk, increment\]  
  item\_id varchar \[not null, note: 'UUID of the Workbook or User being featured'\]  
  item\_type item\_type \[not null\]  
  feature\_type feature\_type \[not null\]  
  featured\_date date \[note: 'The specific date an item is featured'\]  
  curated\_by\_admin\_id varchar \[not null\]  
  created\_at timestamp \[default: \`now()\`\]

  Note: 'An administrative table for curating the homepage content.'  
}

// \--- Relationship Definitions \---

// One User has Many Workbooks  
Ref: W.author\_id \> U.id

// Many-to-Many relationship for Workbook Tags  
Ref: Workbook\_Tags.workbook\_id \> W.id  
Ref: Workbook\_Tags.tag\_id \> T.id

// Many-to-Many relationship for Favorites  
Ref: Favorites.user\_id \> U.id  
Ref: Favorites.workbook\_id \> W.id

// Social Graph (Users following Users)  
Ref: Follows.follower\_id \> U.id  
Ref: Follows.following\_id \> U.id

// Admin Curation  
Ref: Featured\_Items.curated\_by\_admin\_id \> U.id

[image1]: <data:image/png;base64,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>