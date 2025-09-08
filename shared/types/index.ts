// Shared types for Sigma Playground

export interface User {
  id: string;
  username: string;
  email: string;
  full_name?: string;
  bio?: string;
  title?: string;
  organization?: string;
  location?: string;
  social_links?: SocialLinks;
  profile_image_url?: string;
  is_admin: boolean;
  is_verified: boolean;
  is_active: boolean;
  last_login_at?: Date;
  created_at: Date;
  updated_at: Date;
}

export interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  website?: string;
  github?: string;
}

export interface Workbook {
  id: string;
  title: string;
  description?: string;
  sigma_embed_url: string;
  thumbnail_url?: string;
  is_publicly_visible: boolean;
  allow_copy: boolean;
  view_count: number;
  favorite_count: number;
  is_featured: boolean;
  featured_at?: Date;
  published_at: Date;
  updated_at: Date;
  author_id: string;
  author?: User;
  tags?: Tag[];
  favorited_by?: Favorite[];
  features?: FeaturedItem[];
}

export interface Tag {
  id: number;
  name: string;
  description?: string;
  color?: string;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface Favorite {
  user_id: string;
  workbook_id: string;
  created_at: Date;
  user?: User;
  workbook?: Workbook;
}

export interface Follow {
  follower_id: string;
  following_id: string;
  created_at: Date;
  follower?: User;
  following?: User;
}

export interface FeaturedItem {
  id: number;
  item_id: string;
  item_type: ItemType;
  feature_type: FeatureType;
  featured_date: Date;
  expires_at?: Date;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
  curated_by_admin_id: string;
  curated_by?: User;
  workbook?: Workbook;
}

export interface Report {
  id: string;
  report_type: ReportType;
  reason: string;
  description?: string;
  status: ReportStatus;
  admin_notes?: string;
  created_at: Date;
  updated_at: Date;
  reporter_id: string;
  reported_user_id?: string;
  reported_workbook_id?: string;
  reporter?: User;
  reported_user?: User;
  reported_workbook?: Workbook;
}

export interface WorkbookView {
  id: string;
  workbook_id: string;
  user_id?: string;
  ip_address?: string;
  user_agent?: string;
  referrer?: string;
  created_at: Date;
  workbook?: Workbook;
}

// Enums
export enum ItemType {
  WORKBOOK = 'workbook',
  USER = 'user',
}

export enum FeatureType {
  VIZ_OF_THE_DAY = 'viz_of_the_day',
  FEATURED_AUTHOR = 'featured_author',
  HIGHLIGHT = 'highlight',
  TRENDING = 'trending',
}

export enum ReportType {
  SPAM = 'SPAM',
  INAPPROPRIATE_CONTENT = 'INAPPROPRIATE_CONTENT',
  HARASSMENT = 'HARASSMENT',
  COPYRIGHT_VIOLATION = 'COPYRIGHT_VIOLATION',
  FAKE_ACCOUNT = 'FAKE_ACCOUNT',
  OTHER = 'OTHER',
}

export enum ReportStatus {
  PENDING = 'PENDING',
  IN_REVIEW = 'IN_REVIEW',
  RESOLVED = 'RESOLVED',
  DISMISSED = 'DISMISSED',
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T = any> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

// Request types
export interface CreateUserRequest {
  username: string;
  email: string;
  password: string;
  full_name?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface CreateWorkbookRequest {
  title: string;
  description?: string;
  sigma_embed_url: string;
  thumbnail_url?: string;
  is_publicly_visible?: boolean;
  allow_copy?: boolean;
  tags?: string[];
}

export interface UpdateWorkbookRequest {
  title?: string;
  description?: string;
  sigma_embed_url?: string;
  thumbnail_url?: string;
  is_publicly_visible?: boolean;
  allow_copy?: boolean;
  tags?: string[];
}

export interface UpdateUserRequest {
  full_name?: string;
  bio?: string;
  title?: string;
  organization?: string;
  location?: string;
  social_links?: SocialLinks;
  profile_image_url?: string;
}

// Filter and search types
export interface WorkbookFilters {
  search?: string;
  tags?: string[];
  author?: string;
  sort?: 'newest' | 'oldest' | 'popular' | 'trending';
  page?: number;
  limit?: number;
}

export interface UserFilters {
  search?: string;
  sort?: 'newest' | 'oldest' | 'most_workbooks' | 'most_followers';
  page?: number;
  limit?: number;
}

// Authentication types
export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface AuthUser {
  id: string;
  username: string;
  email: string;
  is_admin: boolean;
  is_verified: boolean;
}

// Component props types
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  shadow?: 'soft' | 'medium' | 'hard' | 'none';
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
}

// Form types
export interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'password' | 'textarea' | 'select' | 'file';
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  helpText?: string;
  options?: { value: string; label: string }[];
  rows?: number;
  className?: string;
}

// Error types
export interface ApiError {
  message: string;
  statusCode: number;
  error?: string;
  details?: any;
}

export interface ValidationError {
  field: string;
  message: string;
}

// Utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;
export type PartialExcept<T, K extends keyof T> = Partial<T> & Pick<T, K>;
