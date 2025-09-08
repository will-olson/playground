# Sigma Playground - Frontend Architecture & Component Library

## Executive Summary
This document outlines the frontend architecture for Sigma Playground, built with Next.js and React. It covers component hierarchy, state management, routing, responsive design, performance optimization, accessibility, and testing strategies.

---

## Table of Contents
1. [Project Structure](#project-structure)
2. [Component Hierarchy](#component-hierarchy)
3. [State Management](#state-management)
4. [Routing Structure](#routing-structure)
5. [Design System](#design-system)
6. [Responsive Design](#responsive-design)
7. [Performance Optimization](#performance-optimization)
8. [Accessibility Standards](#accessibility-standards)
9. [Testing Strategy](#testing-strategy)
10. [Build & Deployment](#build--deployment)

---

## Project Structure

### Next.js App Router Structure

```
src/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Route groups
│   │   ├── login/
│   │   └── register/
│   ├── (dashboard)/
│   │   ├── create/
│   │   ├── profile/
│   │   └── settings/
│   ├── workbooks/
│   │   ├── [id]/
│   │   └── page.tsx
│   ├── users/
│   │   └── [username]/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/                   # Reusable components
│   ├── ui/                      # Base UI components
│   ├── forms/                   # Form components
│   ├── layout/                  # Layout components
│   └── features/                # Feature-specific components
├── lib/                         # Utilities and configurations
│   ├── api.ts
│   ├── auth.ts
│   ├── utils.ts
│   └── validations.ts
├── hooks/                       # Custom React hooks
├── store/                       # State management
├── types/                       # TypeScript type definitions
└── styles/                      # Global styles and themes
```

### Component Organization

```typescript
// Component structure example
components/
├── ui/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.test.tsx
│   │   ├── Button.stories.tsx
│   │   └── index.ts
│   ├── Input/
│   ├── Modal/
│   └── index.ts
├── forms/
│   ├── LoginForm/
│   ├── RegisterForm/
│   └── CreateWorkbookForm/
├── layout/
│   ├── Header/
│   ├── Sidebar/
│   ├── Footer/
│   └── Layout.tsx
└── features/
    ├── workbook/
    │   ├── WorkbookCard/
    │   ├── WorkbookEmbed/
    │   └── WorkbookList/
    ├── user/
    │   ├── UserProfile/
    │   └── UserCard/
    └── admin/
        ├── AdminDashboard/
        └── ModerationPanel/
```

---

## Component Hierarchy

### Atomic Design Principles

```typescript
// Atoms - Basic building blocks
export const Button = ({ variant, size, children, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size }))}
      {...props}
    >
      {children}
    </button>
  );
};

// Molecules - Simple combinations of atoms
export const SearchInput = ({ onSearch, placeholder }: SearchInputProps) => {
  const [query, setQuery] = useState('');

  return (
    <div className="relative">
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="pr-10"
      />
      <Button
        size="sm"
        onClick={() => onSearch(query)}
        className="absolute right-1 top-1"
      >
        <SearchIcon className="h-4 w-4" />
      </Button>
    </div>
  );
};

// Organisms - Complex UI components
export const WorkbookCard = ({ workbook, onFavorite, onView }: WorkbookCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="line-clamp-2">{workbook.title}</CardTitle>
            <CardDescription className="line-clamp-2">
              {workbook.description}
            </CardDescription>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onFavorite(workbook.id)}
          >
            <HeartIcon className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="aspect-video bg-muted rounded-md mb-4">
          <WorkbookEmbed
            embedUrl={workbook.sigma_embed_url}
            title={workbook.title}
          />
        </div>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-4">
            <span>{workbook.view_count} views</span>
            <span>{workbook.favorite_count} favorites</span>
          </div>
          <span>{formatDate(workbook.published_at)}</span>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex items-center space-x-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={workbook.author.profile_image_url} />
            <AvatarFallback>{workbook.author.username[0]}</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">{workbook.author.username}</span>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onView(workbook.id)}
        >
          View
        </Button>
      </CardFooter>
    </Card>
  );
};

// Templates - Page-level layouts
export const HomePageTemplate = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <HeroSection />
        <FeaturedWorkbooks />
        <LatestWorkbooks />
        <FeaturedAuthors />
      </main>
      <Footer />
    </div>
  );
};
```

---

## State Management

### Zustand Store Implementation

```typescript
// Auth Store
interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
  register: (userData: RegisterData) => Promise<void>;
  refreshToken: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,

  login: async (credentials) => {
    set({ isLoading: true });
    try {
      const response = await authApi.login(credentials);
      const { user, tokens } = response.data;
      
      // Store tokens
      localStorage.setItem('access_token', tokens.accessToken);
      localStorage.setItem('refresh_token', tokens.refreshToken);
      
      set({ user, isAuthenticated: true, isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  logout: () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    set({ user: null, isAuthenticated: false });
  },

  register: async (userData) => {
    set({ isLoading: true });
    try {
      const response = await authApi.register(userData);
      const { user, tokens } = response.data;
      
      localStorage.setItem('access_token', tokens.accessToken);
      localStorage.setItem('refresh_token', tokens.refreshToken);
      
      set({ user, isAuthenticated: true, isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  refreshToken: async () => {
    try {
      const refreshToken = localStorage.getItem('refresh_token');
      if (!refreshToken) throw new Error('No refresh token');

      const response = await authApi.refreshToken(refreshToken);
      const { accessToken } = response.data;
      
      localStorage.setItem('access_token', accessToken);
    } catch (error) {
      get().logout();
      throw error;
    }
  }
}));

// Workbook Store
interface WorkbookState {
  workbooks: Workbook[];
  featuredWorkbooks: Workbook[];
  userWorkbooks: Workbook[];
  isLoading: boolean;
  filters: WorkbookFilters;
  fetchWorkbooks: (filters?: WorkbookFilters) => Promise<void>;
  fetchFeaturedWorkbooks: () => Promise<void>;
  fetchUserWorkbooks: (userId: string) => Promise<void>;
  createWorkbook: (workbookData: CreateWorkbookData) => Promise<void>;
  updateWorkbook: (id: string, updates: Partial<Workbook>) => Promise<void>;
  deleteWorkbook: (id: string) => Promise<void>;
  setFilters: (filters: Partial<WorkbookFilters>) => void;
}

export const useWorkbookStore = create<WorkbookState>((set, get) => ({
  workbooks: [],
  featuredWorkbooks: [],
  userWorkbooks: [],
  isLoading: false,
  filters: {
    search: '',
    tags: [],
    sort: 'newest',
    limit: 20,
    offset: 0
  },

  fetchWorkbooks: async (filters) => {
    set({ isLoading: true });
    try {
      const response = await workbookApi.getWorkbooks(filters || get().filters);
      set({ workbooks: response.data, isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  fetchFeaturedWorkbooks: async () => {
    try {
      const response = await workbookApi.getFeaturedWorkbooks();
      set({ featuredWorkbooks: response.data });
    } catch (error) {
      console.error('Failed to fetch featured workbooks:', error);
    }
  },

  createWorkbook: async (workbookData) => {
    try {
      const response = await workbookApi.createWorkbook(workbookData);
      const newWorkbook = response.data;
      
      set((state) => ({
        workbooks: [newWorkbook, ...state.workbooks],
        userWorkbooks: [newWorkbook, ...state.userWorkbooks]
      }));
    } catch (error) {
      throw error;
    }
  },

  setFilters: (filters) => {
    set((state) => ({
      filters: { ...state.filters, ...filters }
    }));
  }
}));
```

### React Query Integration

```typescript
// API Hooks with React Query
export const useWorkbooks = (filters: WorkbookFilters) => {
  return useQuery({
    queryKey: ['workbooks', filters],
    queryFn: () => workbookApi.getWorkbooks(filters),
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  });
};

export const useWorkbook = (id: string) => {
  return useQuery({
    queryKey: ['workbook', id],
    queryFn: () => workbookApi.getWorkbook(id),
    enabled: !!id,
  });
};

export const useCreateWorkbook = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: workbookApi.createWorkbook,
    onSuccess: (data) => {
      queryClient.invalidateQueries(['workbooks']);
      queryClient.setQueryData(['workbook', data.id], data);
    },
  });
};

export const useFavoriteWorkbook = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ workbookId, isFavorited }: { workbookId: string; isFavorited: boolean }) =>
      workbookApi.toggleFavorite(workbookId, isFavorited),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries(['workbooks']);
      queryClient.invalidateQueries(['workbook', variables.workbookId]);
    },
  });
};
```

---

## Routing Structure

### Next.js App Router Configuration

```typescript
// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <Providers>
          <Toaster />
          {children}
        </Providers>
      </body>
    </html>
  );
}

// app/page.tsx - Homepage
export default function HomePage() {
  return <HomePageTemplate />;
}

// app/workbooks/page.tsx - Workbooks listing
export default function WorkbooksPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <WorkbooksList />
      </main>
      <Footer />
    </div>
  );
}

// app/workbooks/[id]/page.tsx - Individual workbook
export default function WorkbookPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <WorkbookDetail workbookId={params.id} />
      </main>
      <Footer />
    </div>
  );
}

// app/users/[username]/page.tsx - User profile
export default function UserProfilePage({ params }: { params: { username: string } }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <UserProfile username={params.username} />
      </main>
      <Footer />
    </div>
  );
}
```

### Protected Routes

```typescript
// components/auth/ProtectedRoute.tsx
interface ProtectedRouteProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  requireAuth?: boolean;
  requireAdmin?: boolean;
}

export function ProtectedRoute({ 
  children, 
  fallback = <LoginPrompt />,
  requireAuth = true,
  requireAdmin = false 
}: ProtectedRouteProps) {
  const { isAuthenticated, user, isLoading } = useAuthStore();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (requireAuth && !isAuthenticated) {
    return <>{fallback}</>;
  }

  if (requireAdmin && user?.role !== 'admin') {
    return <AccessDenied />;
  }

  return <>{children}</>;
}

// app/(dashboard)/create/page.tsx
export default function CreateWorkbookPage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <CreateWorkbookForm />
        </main>
        <Footer />
      </div>
    </ProtectedRoute>
  );
}
```

---

## Design System

### Theme Configuration

```typescript
// lib/theme.ts
export const theme = {
  colors: {
    primary: {
      50: '#eff6ff',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
    },
    secondary: {
      50: '#f8fafc',
      500: '#64748b',
      600: '#475569',
    },
    accent: {
      50: '#f0f9ff',
      500: '#0ea5e9',
      600: '#0284c7',
    },
    success: {
      50: '#f0fdf4',
      500: '#22c55e',
      600: '#16a34a',
    },
    warning: {
      50: '#fffbeb',
      500: '#f59e0b',
      600: '#d97706',
    },
    error: {
      50: '#fef2f2',
      500: '#ef4444',
      600: '#dc2626',
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
  },
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
    },
  },
};

// Tailwind CSS Configuration
export const tailwindConfig = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: theme.colors,
      fontFamily: theme.typography.fontFamily,
      spacing: theme.spacing,
      borderRadius: theme.borderRadius,
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
```

### Component Variants

```typescript
// components/ui/Button.tsx
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'underline-offset-4 hover:underline text-primary',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-3 rounded-md',
        lg: 'h-11 px-8 rounded-md',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
```

---

## Responsive Design

### Breakpoint System

```typescript
// lib/responsive.ts
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Responsive Hook
export function useResponsive() {
  const [screenSize, setScreenSize] = useState<'sm' | 'md' | 'lg' | 'xl' | '2xl'>('lg');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setScreenSize('sm');
      else if (width < 768) setScreenSize('md');
      else if (width < 1024) setScreenSize('lg');
      else if (width < 1280) setScreenSize('xl');
      else setScreenSize('2xl');
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    screenSize,
    isMobile: screenSize === 'sm',
    isTablet: screenSize === 'md',
    isDesktop: screenSize === 'lg' || screenSize === 'xl' || screenSize === '2xl',
  };
}
```

### Responsive Components

```typescript
// components/layout/Header.tsx
export function Header() {
  const { isMobile } = useResponsive();
  const { isAuthenticated, user } = useAuthStore();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">Sigma Playground</span>
          </Link>
        </div>
        
        {isMobile ? (
          <MobileNavigation />
        ) : (
          <DesktopNavigation />
        )}
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <SearchInput className="hidden md:block" />
          <UserMenu user={user} isAuthenticated={isAuthenticated} />
        </div>
      </div>
    </header>
  );
}

// components/layout/MobileNavigation.tsx
export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64">
        <div className="flex flex-col space-y-4">
          <Link href="/" className="flex items-center space-x-2">
            <Logo className="h-6 w-6" />
            <span className="font-bold">Sigma Playground</span>
          </Link>
          <NavigationMenu />
        </div>
      </SheetContent>
    </Sheet>
  );
}
```

---

## Performance Optimization

### Code Splitting & Lazy Loading

```typescript
// Lazy loading components
const CreateWorkbookForm = lazy(() => import('@/components/forms/CreateWorkbookForm'));
const AdminDashboard = lazy(() => import('@/components/admin/AdminDashboard'));
const WorkbookEmbed = lazy(() => import('@/components/features/workbook/WorkbookEmbed'));

// Route-based code splitting
export default function CreateWorkbookPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ProtectedRoute>
        <CreateWorkbookForm />
      </ProtectedRoute>
    </Suspense>
  );
}

// Image optimization
export function OptimizedImage({ src, alt, ...props }: ImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={props.width || 400}
      height={props.height || 300}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
      {...props}
    />
  );
}
```

### Memoization & Optimization

```typescript
// Memoized components
export const WorkbookCard = memo(({ workbook, onFavorite, onView }: WorkbookCardProps) => {
  const handleFavorite = useCallback(() => {
    onFavorite(workbook.id);
  }, [workbook.id, onFavorite]);

  const handleView = useCallback(() => {
    onView(workbook.id);
  }, [workbook.id, onView]);

  return (
    <Card className="group hover:shadow-lg transition-shadow">
      {/* Component content */}
    </Card>
  );
});

// Virtual scrolling for large lists
export function VirtualizedWorkbookList({ workbooks }: { workbooks: Workbook[] }) {
  const parentRef = useRef<HTMLDivElement>(null);
  
  const { virtualItems, totalSize } = useVirtualizer({
    count: workbooks.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 300,
    overscan: 5,
  });

  return (
    <div ref={parentRef} className="h-96 overflow-auto">
      <div style={{ height: `${totalSize}px`, position: 'relative' }}>
        {virtualItems.map((virtualItem) => (
          <div
            key={virtualItem.index}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: `${virtualItem.size}px`,
              transform: `translateY(${virtualItem.start}px)`,
            }}
          >
            <WorkbookCard workbook={workbooks[virtualItem.index]} />
          </div>
        ))}
      </div>
    </div>
  );
}
```

---

## Accessibility Standards

### ARIA Implementation

```typescript
// Accessible form components
export function AccessibleInput({ 
  label, 
  error, 
  required, 
  ...props 
}: InputProps & { label: string; error?: string; required?: boolean }) {
  const id = useId();
  const errorId = `${id}-error`;

  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-sm font-medium">
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </Label>
      <Input
        id={id}
        aria-describedby={error ? errorId : undefined}
        aria-invalid={!!error}
        required={required}
        {...props}
      />
      {error && (
        <p id={errorId} className="text-sm text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

// Accessible modal
export function AccessibleModal({ 
  isOpen, 
  onClose, 
  title, 
  children 
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      modalRef.current?.focus();
    } else {
      previousFocusRef.current?.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div
        ref={modalRef}
        className="relative bg-background p-6 rounded-lg shadow-lg max-w-md w-full mx-4"
        tabIndex={-1}
      >
        <h2 id="modal-title" className="text-lg font-semibold mb-4">
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
}
```

### Keyboard Navigation

```typescript
// Keyboard navigation hook
export function useKeyboardNavigation(items: any[], onSelect: (item: any) => void) {
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        setFocusedIndex(prev => Math.min(prev + 1, items.length - 1));
        break;
      case 'ArrowUp':
        event.preventDefault();
        setFocusedIndex(prev => Math.max(prev - 1, 0));
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (focusedIndex >= 0 && focusedIndex < items.length) {
          onSelect(items[focusedIndex]);
        }
        break;
      case 'Escape':
        setFocusedIndex(-1);
        break;
    }
  }, [focusedIndex, items, onSelect]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return { focusedIndex, setFocusedIndex };
}
```

---

## Testing Strategy

### Component Testing

```typescript
// Button component test
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies correct variant classes', () => {
    render(<Button variant="destructive">Delete</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-destructive');
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});

// WorkbookCard component test
describe('WorkbookCard', () => {
  const mockWorkbook = {
    id: '1',
    title: 'Test Workbook',
    description: 'Test Description',
    author: { username: 'testuser', profile_image_url: null },
    view_count: 100,
    favorite_count: 10,
    published_at: new Date(),
    sigma_embed_url: 'https://app.sigma.com/embed/test'
  };

  it('renders workbook information', () => {
    render(<WorkbookCard workbook={mockWorkbook} />);
    
    expect(screen.getByText('Test Workbook')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('testuser')).toBeInTheDocument();
  });

  it('calls onFavorite when favorite button is clicked', () => {
    const onFavorite = jest.fn();
    render(<WorkbookCard workbook={mockWorkbook} onFavorite={onFavorite} />);
    
    fireEvent.click(screen.getByRole('button', { name: /favorite/i }));
    expect(onFavorite).toHaveBeenCalledWith('1');
  });
});
```

### Integration Testing

```typescript
// Page integration test
describe('WorkbooksPage', () => {
  beforeEach(() => {
    // Mock API responses
    jest.spyOn(workbookApi, 'getWorkbooks').mockResolvedValue({
      data: [mockWorkbook1, mockWorkbook2],
      status: 200
    });
  });

  it('loads and displays workbooks', async () => {
    render(<WorkbooksPage />);
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    
    await waitFor(() => {
      expect(screen.getByText('Test Workbook 1')).toBeInTheDocument();
      expect(screen.getByText('Test Workbook 2')).toBeInTheDocument();
    });
  });

  it('filters workbooks by search query', async () => {
    render(<WorkbooksPage />);
    
    await waitFor(() => {
      expect(screen.getByText('Test Workbook 1')).toBeInTheDocument();
    });

    const searchInput = screen.getByPlaceholderText('Search workbooks...');
    fireEvent.change(searchInput, { target: { value: 'Test 1' } });
    fireEvent.click(screen.getByRole('button', { name: /search/i }));

    await waitFor(() => {
      expect(screen.getByText('Test Workbook 1')).toBeInTheDocument();
      expect(screen.queryByText('Test Workbook 2')).not.toBeInTheDocument();
    });
  });
});
```

---

## Build & Deployment

### Next.js Configuration

```typescript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['app.sigma.com', 'cdn.sigmaplayground.com'],
    formats: ['image/webp', 'image/avif'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.API_URL}/api/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
```

### Build Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build"
  }
}
```

---

## References & Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [React Query](https://tanstack.com/query/latest)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

## Version Control

- **Version:** 1.0.0
- **Last Updated:** 2024-01-01
- **Next Review:** 2024-02-01
- **Maintainer:** Frontend Team
