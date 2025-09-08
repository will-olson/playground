// Shared constants for Sigma Playground

// API Configuration
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001',
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000,
} as const;

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 12,
  MAX_LIMIT: 100,
  PAGE_SIZE_OPTIONS: [12, 24, 48, 96],
} as const;

// File Upload
export const FILE_UPLOAD = {
  MAX_SIZE: 10 * 1024 * 1024, // 10MB
  ALLOWED_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
  ALLOWED_EXTENSIONS: ['.jpg', '.jpeg', '.png', '.gif', '.webp'],
} as const;

// Validation
export const VALIDATION = {
  USERNAME: {
    MIN_LENGTH: 3,
    MAX_LENGTH: 20,
    PATTERN: /^[a-zA-Z0-9_-]+$/,
  },
  PASSWORD: {
    MIN_LENGTH: 8,
    PATTERN: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]/,
  },
  EMAIL: {
    PATTERN: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  WORKBOOK_TITLE: {
    MIN_LENGTH: 1,
    MAX_LENGTH: 200,
  },
  WORKBOOK_DESCRIPTION: {
    MAX_LENGTH: 2000,
  },
  BIO: {
    MAX_LENGTH: 500,
  },
  TAG_NAME: {
    MIN_LENGTH: 1,
    MAX_LENGTH: 50,
  },
} as const;

// UI Constants
export const UI = {
  BREAKPOINTS: {
    SM: 640,
    MD: 768,
    LG: 1024,
    XL: 1280,
    '2XL': 1536,
  },
  Z_INDEX: {
    DROPDOWN: 1000,
    STICKY: 1020,
    FIXED: 1030,
    MODAL_BACKDROP: 1040,
    MODAL: 1050,
    POPOVER: 1060,
    TOOLTIP: 1070,
  },
  ANIMATION: {
    DURATION: {
      FAST: 150,
      NORMAL: 300,
      SLOW: 500,
    },
    EASING: {
      EASE_IN: 'cubic-bezier(0.4, 0, 1, 1)',
      EASE_OUT: 'cubic-bezier(0, 0, 0.2, 1)',
      EASE_IN_OUT: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
} as const;

// Feature Flags
export const FEATURES = {
  REGISTRATION: process.env.NEXT_PUBLIC_ENABLE_REGISTRATION === 'true',
  EMAIL_VERIFICATION: process.env.NEXT_PUBLIC_ENABLE_EMAIL_VERIFICATION === 'true',
  ANALYTICS: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
  MONITORING: process.env.NEXT_PUBLIC_ENABLE_MONITORING === 'true',
  SOCIAL_FEATURES: true,
  ADMIN_FEATURES: true,
  CONTENT_MODERATION: true,
} as const;

// Routes
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  PROFILE: '/profile',
  WORKBOOK: '/workbook',
  CREATE: '/create',
  SEARCH: '/search',
  ADMIN: '/admin',
  SETTINGS: '/settings',
  ABOUT: '/about',
  PRIVACY: '/privacy',
  TERMS: '/terms',
  HELP: '/help',
} as const;

// API Endpoints
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    REFRESH: '/auth/refresh',
    LOGOUT: '/auth/logout',
    PROFILE: '/auth/profile',
  },
  USERS: {
    BASE: '/users',
    PROFILE: '/users/profile',
    FOLLOW: '/users/:id/follow',
    UNFOLLOW: '/users/:id/unfollow',
    FOLLOWERS: '/users/:id/followers',
    FOLLOWING: '/users/:id/following',
  },
  WORKBOOKS: {
    BASE: '/workbooks',
    FAVORITE: '/workbooks/:id/favorite',
    UNFAVORITE: '/workbooks/:id/unfavorite',
    VIEW: '/workbooks/:id/view',
    SEARCH: '/workbooks/search',
  },
  TAGS: {
    BASE: '/tags',
    POPULAR: '/tags/popular',
  },
  ADMIN: {
    USERS: '/admin/users',
    WORKBOOKS: '/admin/workbooks',
    REPORTS: '/admin/reports',
    FEATURED: '/admin/featured',
    ANALYTICS: '/admin/analytics',
  },
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK: 'Network error. Please check your connection and try again.',
  UNAUTHORIZED: 'You must be logged in to perform this action.',
  FORBIDDEN: 'You do not have permission to perform this action.',
  NOT_FOUND: 'The requested resource was not found.',
  VALIDATION: 'Please check your input and try again.',
  SERVER: 'An unexpected error occurred. Please try again later.',
  TIMEOUT: 'Request timed out. Please try again.',
  RATE_LIMIT: 'Too many requests. Please wait before trying again.',
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  LOGIN: 'Successfully logged in!',
  REGISTER: 'Account created successfully!',
  LOGOUT: 'Successfully logged out!',
  PROFILE_UPDATE: 'Profile updated successfully!',
  WORKBOOK_CREATE: 'Workbook created successfully!',
  WORKBOOK_UPDATE: 'Workbook updated successfully!',
  WORKBOOK_DELETE: 'Workbook deleted successfully!',
  FAVORITE: 'Added to favorites!',
  UNFAVORITE: 'Removed from favorites!',
  FOLLOW: 'Successfully followed user!',
  UNFOLLOW: 'Successfully unfollowed user!',
  REPORT: 'Report submitted successfully!',
} as const;

// Local Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'sigma_playground_auth_token',
  REFRESH_TOKEN: 'sigma_playground_refresh_token',
  USER: 'sigma_playground_user',
  THEME: 'sigma_playground_theme',
  PREFERENCES: 'sigma_playground_preferences',
} as const;

// Query Keys for React Query
export const QUERY_KEYS = {
  AUTH: ['auth'],
  USER: ['user'],
  USERS: ['users'],
  WORKBOOKS: ['workbooks'],
  TAGS: ['tags'],
  FAVORITES: ['favorites'],
  FOLLOWS: ['follows'],
  REPORTS: ['reports'],
  ANALYTICS: ['analytics'],
} as const;

// Sigma Integration
export const SIGMA = {
  EMBED_BASE_URL: 'https://app.sigma.com/embed',
  API_BASE_URL: 'https://app.sigma.com/api',
  SUPPORTED_FORMATS: ['iframe', 'embed'],
  DEFAULT_WIDTH: '100%',
  DEFAULT_HEIGHT: '600px',
} as const;

// Social Media
export const SOCIAL_MEDIA = {
  TWITTER: 'https://twitter.com/sigmaplayground',
  LINKEDIN: 'https://linkedin.com/company/sigmaplayground',
  GITHUB: 'https://github.com/sigmaplayground',
  DISCORD: 'https://discord.gg/sigmaplayground',
} as const;

// Contact Information
export const CONTACT = {
  EMAIL: 'support@sigmaplayground.com',
  ADMIN_EMAIL: 'admin@sigmaplayground.com',
  PRESS_EMAIL: 'press@sigmaplayground.com',
  PHONE: '+1 (555) 123-4567',
  ADDRESS: '123 Data Street, Analytics City, AC 12345',
} as const;

// Legal
export const LEGAL = {
  COMPANY_NAME: 'Sigma Playground Inc.',
  COPYRIGHT_YEAR: new Date().getFullYear(),
  VERSION: '1.0.0',
  PRIVACY_POLICY_URL: '/privacy',
  TERMS_OF_SERVICE_URL: '/terms',
  COOKIE_POLICY_URL: '/cookies',
} as const;

// Development
export const DEV = {
  IS_DEVELOPMENT: process.env.NODE_ENV === 'development',
  IS_PRODUCTION: process.env.NODE_ENV === 'production',
  IS_TEST: process.env.NODE_ENV === 'test',
  DEBUG: process.env.NODE_ENV === 'development',
} as const;
