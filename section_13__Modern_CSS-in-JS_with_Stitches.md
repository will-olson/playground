# Section 13: 🎨 Modern CSS-in-JS with Stitches

**Lines:** 2835-3148 (313 lines)

**Code Blocks:** 4

**Key Patterns:** 5

**Implementation Steps:** 0

---

## **13. 🎨 Modern CSS-in-JS with Stitches**

### **Implementation Steps**:

**Step 1: Install Stitches**
```bash
cd frontend
npm install @stitches/react
```

**Step 2: Configure Stitches**
```typescript
// frontend/src/lib/stitches.ts
import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, keyframes, getCssText, theme } = createStitches({
  theme: {
    colors: {
      primary: '#0066cc',
      secondary: '#6c757d',
      success: '#28a745',
      danger: '#dc3545',
      warning: '#ffc107',
      info: '#17a2b8',
      light: '#f8f9fa',
      dark: '#343a40',
      white: '#ffffff',
      black: '#000000',
    },
    space: {
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
    },
    fontWeights: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    radii: {
      none: '0',
      sm: '0.125rem',
      base: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      full: '9999px',
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
    '2xl': '(min-width: 1536px)',
  },
  utils: {
    p: (value: string) => ({
      padding: value,
    }),
    pt: (value: string) => ({
      paddingTop: value,
    }),
    pr: (value: string) => ({
      paddingRight: value,
    }),
    pb: (value: string) => ({
      paddingBottom: value,
    }),
    pl: (value: string) => ({
      paddingLeft: value,
    }),
    px: (value: string) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: string) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    m: (value: string) => ({
      margin: value,
    }),
    mt: (value: string) => ({
      marginTop: value,
    }),
    mr: (value: string) => ({
      marginRight: value,
    }),
    mb: (value: string) => ({
      marginBottom: value,
    }),
    ml: (value: string) => ({
      marginLeft: value,
    }),
    mx: (value: string) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: string) => ({
      marginTop: value,
      marginBottom: value,
    }),
  },
});
```

**Step 3: Create Styled Components**
```typescript
// frontend/src/components/styled/workbook-card.tsx
import { styled } from '@/lib/stitches';

export const WorkbookCard = styled('div', {
  backgroundColor: '$white',
  borderRadius: '$lg',
  boxShadow: '$md',
  padding: '$6',
  transition: 'all 0.2s ease-in-out',
  cursor: 'pointer',
  
  '&:hover': {
    boxShadow: '$lg',
    transform: 'translateY(-2px)',
  },
  
  variants: {
    featured: {
      true: {
        border: '2px solid $primary',
        boxShadow: '$xl',
      },
    },
    size: {
      sm: {
        padding: '$4',
      },
      md: {
        padding: '$6',
      },
      lg: {
        padding: '$8',
      },
    },
  },
});

export const WorkbookTitle = styled('h3', {
  fontSize: '$xl',
  fontWeight: '$semibold',
  color: '$dark',
  marginBottom: '$2',
  
  variants: {
    featured: {
      true: {
        color: '$primary',
      },
    },
  },
});

export const WorkbookDescription = styled('p', {
  fontSize: '$sm',
  color: '$secondary',
  marginBottom: '$4',
  lineHeight: '1.5',
});

export const WorkbookMeta = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '$xs',
  color: '$secondary',
});

export const WorkbookActions = styled('div', {
  display: 'flex',
  gap: '$2',
  marginTop: '$4',
});

export const ActionButton = styled('button', {
  padding: '$2 $4',
  borderRadius: '$base',
  border: 'none',
  fontSize: '$sm',
  fontWeight: '$medium',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  
  variants: {
    variant: {
      primary: {
        backgroundColor: '$primary',
        color: '$white',
        '&:hover': {
          backgroundColor: '$primary',
          opacity: 0.9,
        },
      },
      secondary: {
        backgroundColor: '$light',
        color: '$dark',
        '&:hover': {
          backgroundColor: '$secondary',
          color: '$white',
        },
      },
      danger: {
        backgroundColor: '$danger',
        color: '$white',
        '&:hover': {
          backgroundColor: '$danger',
          opacity: 0.9,
        },
      },
    },
    size: {
      sm: {
        padding: '$1 $2',
        fontSize: '$xs',
      },
      md: {
        padding: '$2 $4',
        fontSize: '$sm',
      },
      lg: {
        padding: '$3 $6',
        fontSize: '$base',
      },
    },
  },
});
```

**Step 4: Implement Responsive Design**
```typescript
// frontend/src/components/styled/responsive-grid.tsx
import { styled } from '@/lib/stitches';

export const ResponsiveGrid = styled('div', {
  display: 'grid',
  gap: '$6',
  
  variants: {
    columns: {
      1: {
        gridTemplateColumns: '1fr',
      },
      2: {
        gridTemplateColumns: 'repeat(2, 1fr)',
        '@sm': {
          gridTemplateColumns: '1fr',
        },
      },
      3: {
        gridTemplateColumns: 'repeat(3, 1fr)',
        '@md': {
          gridTemplateColumns: 'repeat(2, 1fr)',
        },
        '@sm': {
          gridTemplateColumns: '1fr',
        },
      },
      4: {
        gridTemplateColumns: 'repeat(4, 1fr)',
        '@lg': {
          gridTemplateColumns: 'repeat(3, 1fr)',
        },
        '@md': {
          gridTemplateColumns: 'repeat(2, 1fr)',
        },
        '@sm': {
          gridTemplateColumns: '1fr',
        },
      },
    },
  },
});
```

**Impact**: Provides modern, performant CSS-in-JS with zero runtime overhead, responsive design utilities, and consistent design system.

---
