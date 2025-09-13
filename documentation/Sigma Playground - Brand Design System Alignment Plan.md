# Sigma Playground - Brand Design System Alignment Plan

## Overview
This document outlines a systematic plan to align the current Sigma Playground application with the brand design system demonstrated in the Sigma Playground.pdf reference screenshots. The plan focuses on visual consistency, user experience, and brand identity implementation.

## Brand Design System Analysis

### 1. Color Palette

#### Primary Colors
- **Background Dark**: `#171717` or `#222222` (main content areas, headers)
- **Background Light**: `#F8F8F8` or `#F5F5F5` (main content areas, cards)
- **Card Background**: `#FFFFFF` (content cards, forms)
- **Text Primary**: `#171717` or `#000000` (headings, primary text)
- **Text Secondary**: `#71717A` or `#666666` (descriptions, secondary text)
- **Text Light**: `#FFFFFF` (text on dark backgrounds)

#### Accent Colors
- **Sigma Green**: `#4CAF50` or `#A7F3D0` (primary CTAs, highlights, active states)
- **Blue Accent**: `#2196F3` or `#3B82F6` (links, interactive elements)
- **Orange/Amber**: `#FF9800` or `#F59E0B` (data visualizations, trends)
- **Red Accent**: `#F44336` or `#EF4444` (negative trends, errors)

#### Neutral Colors
- **Border Light**: `#E5E7EB` or `#D1D5DB` (subtle borders, dividers)
- **Shadow**: `#00000010` or `rgba(0,0,0,0.1)` (card shadows, depth)

### 2. Typography

#### Font Family
- **Primary**: Modern sans-serif (Inter, Roboto, or system font)
- **Consistent**: Clean, readable, professional appearance

#### Font Hierarchy
- **H1 (Main Titles)**: Large, bold, dark gray/black
- **H2 (Section Titles)**: Medium-large, bold, dark gray
- **H3 (Card Titles)**: Medium, bold, dark gray
- **Body Text**: Regular weight, readable size
- **Secondary Text**: Smaller, lighter gray
- **Data Points**: Large, bold numbers for metrics

### 3. Layout & Spacing

#### Grid System
- **Card Grid**: 2-3 columns responsive layout
- **Consistent Spacing**: Generous padding and margins
- **Card Spacing**: Uniform gaps between cards

#### Component Spacing
- **Section Padding**: Consistent vertical spacing between sections
- **Card Padding**: Generous internal padding for content
- **Button Spacing**: Adequate spacing around interactive elements

### 4. Component Design Patterns

#### Cards
- **Background**: White (`#FFFFFF`)
- **Border Radius**: Subtle rounded corners (4-8px)
- **Shadow**: Soft drop shadow for depth
- **Padding**: Generous internal spacing
- **Content Structure**: Image/visual, title, description, metrics

#### Buttons
- **Primary (Create)**: Green background, white text, rounded corners
- **Secondary (Learn, See all)**: White background, dark text, thin border
- **Hover States**: Subtle color changes, smooth transitions

#### Navigation
- **Header**: Dark background with white text
- **Logo**: Prominent placement using logo file
- **Profile**: Circular avatar with dropdown
- **Tabs**: Clear active/inactive states

## Current Application Analysis

### What We Have
- ✅ Basic Next.js 15 application structure
- ✅ Tailwind CSS framework
- ✅ Component library with Radix UI primitives
- ✅ Working pages: `/`, `/workbooks`, `/create`, `/test-embed`
- ✅ Responsive layout foundation

### What Needs Alignment
- ❌ Color palette doesn't match brand
- ❌ Typography hierarchy needs refinement
- ❌ Card styling needs brand consistency
- ❌ Button styling needs brand colors
- ❌ Navigation header needs dark theme
- ❌ Missing brand-specific components
- ❌ Data visualization styling needs alignment

## Systematic Alignment Plan

### Phase 1: Foundation & Color System
**Priority: High | Timeline: 1-2 days**

#### 1.1 Update Tailwind Configuration
- [ ] Define custom color palette in `tailwind.config.js`
- [ ] Add Sigma brand colors as CSS custom properties
- [ ] Update color references throughout components

#### 1.2 Global CSS Updates
- [ ] Update `globals.css` with brand color variables
- [ ] Define consistent spacing scale
- [ ] Add brand-specific utility classes

#### 1.3 Color System Implementation
- [ ] Replace generic colors with brand colors
- [ ] Update background colors for main areas
- [ ] Implement consistent text color hierarchy

### Phase 2: Typography & Layout
**Priority: High | Timeline: 1-2 days**

#### 2.1 Typography System
- [ ] Define font hierarchy in Tailwind config
- [ ] Update heading styles across all pages
- [ ] Implement consistent text sizing and weights
- [ ] Add brand-specific font utilities

#### 2.2 Layout Improvements
- [ ] Implement consistent grid system
- [ ] Update spacing throughout application
- [ ] Ensure responsive design consistency
- [ ] Add proper section spacing

### Phase 3: Component Library Updates
**Priority: High | Timeline: 2-3 days**

#### 3.1 Card Components
- [ ] Update `WorkbookCard` with brand styling
- [ ] Implement consistent card shadows and borders
- [ ] Add proper content structure (image, title, description, metrics)
- [ ] Ensure responsive card layout

#### 3.2 Button Components
- [ ] Update `Button` component with brand colors
- [ ] Implement primary (green) and secondary (white) variants
- [ ] Add hover states and transitions
- [ ] Ensure consistent sizing and spacing

#### 3.3 Form Components
- [ ] Update `Input`, `Select`, `Switch` components
- [ ] Implement brand-consistent styling
- [ ] Add proper focus states
- [ ] Ensure accessibility compliance

### Phase 4: Navigation & Header
**Priority: Medium | Timeline: 1-2 days**

#### 4.1 Header Redesign
- [ ] Implement dark theme header
- [ ] Add Sigma logo
- [ ] Update navigation buttons with brand styling
- [ ] Implement profile dropdown styling

#### 4.2 Navigation Consistency
- [ ] Update navigation component styling
- [ ] Ensure consistent active/inactive states
- [ ] Add proper hover effects
- [ ] Implement responsive navigation

### Phase 5: Page-Specific Updates
**Priority: Medium | Timeline: 2-3 days**

#### 5.1 Home Page (`/`)
- [ ] Implement "Viz of the day" section
- [ ] Add "Recent Activity" grid layout
- [ ] Update featured content styling
- [ ] Add proper section headers and descriptions

#### 5.2 Workbooks Page (`/workbooks`)
- [ ] Update workbook grid layout
- [ ] Implement proper filtering UI
- [ ] Add search functionality styling
- [ ] Ensure consistent card presentation

#### 5.3 Create Page (`/create`)
- [ ] Update form styling with brand colors
- [ ] Implement proper form layout
- [ ] Add help section styling
- [ ] Ensure consistent button styling

#### 5.4 Test Embed Page (`/test-embed`)
- [ ] Update configuration form styling
- [ ] Implement proper preview area
- [ ] Add configuration summary styling
- [ ] Ensure consistent component alignment

### Phase 6: Data Visualization & Content
**Priority: Medium | Timeline: 2-3 days**

#### 6.1 Data Visualization Styling
- [ ] Update chart colors to match brand
- [ ] Implement consistent data point styling
- [ ] Add proper metric display formatting
- [ ] Ensure responsive chart layouts

#### 6.2 Content Presentation
- [ ] Update text content to match brand tone
- [ ] Implement consistent description styling
- [ ] Add proper tag/hashtag styling
- [ ] Ensure content hierarchy clarity

### Phase 7: Interactive Elements & States
**Priority: Low | Timeline: 1-2 days**

#### 7.1 Hover States
- [ ] Implement consistent hover effects
- [ ] Add smooth transitions
- [ ] Ensure accessibility compliance
- [ ] Test across all interactive elements

#### 7.2 Loading States
- [ ] Update loading indicators with brand styling
- [ ] Implement consistent loading patterns
- [ ] Add proper error state styling
- [ ] Ensure user feedback clarity

### Phase 8: Responsive Design & Polish
**Priority: Low | Timeline: 1-2 days**

#### 8.1 Mobile Responsiveness
- [ ] Test and refine mobile layouts
- [ ] Ensure proper touch targets
- [ ] Implement mobile-specific navigation
- [ ] Test across device sizes

#### 8.2 Final Polish
- [ ] Review and refine all components
- [ ] Ensure consistent spacing and alignment
- [ ] Test accessibility compliance
- [ ] Perform final visual review

## Implementation Guidelines

### Design Tokens
- Use CSS custom properties for all brand colors
- Implement consistent spacing scale
- Define typography scale in Tailwind config
- Create reusable component variants

### Component Standards
- Follow atomic design principles
- Implement consistent prop interfaces
- Ensure accessibility compliance
- Add proper TypeScript types

### Quality Assurance
- Test across multiple browsers
- Ensure responsive design works
- Validate accessibility standards
- Perform visual regression testing

## Success Metrics

### Visual Consistency
- [ ] All components use brand color palette
- [ ] Typography hierarchy is consistent
- [ ] Spacing follows design system
- [ ] Components match reference screenshots

### User Experience
- [ ] Navigation is intuitive and consistent
- [ ] Forms are easy to use and understand
- [ ] Content is well-organized and scannable
- [ ] Interactive elements provide clear feedback

### Technical Quality
- [ ] Code is maintainable and reusable
- [ ] Components are properly typed
- [ ] Performance is optimized
- [ ] Accessibility standards are met

## Next Steps

1. **Review and Refine Plan**: Review this plan with stakeholders and refine priorities
2. **Create Design Tokens**: Define exact color values and spacing measurements
3. **Start with Phase 1**: Begin with foundation updates (colors, typography)
4. **Iterative Implementation**: Implement phases incrementally with testing
5. **Continuous Review**: Regularly compare against reference screenshots

## Notes

- This plan is designed to be iterative and can be refined based on feedback
- Priority levels can be adjusted based on business needs
- Timeline estimates are rough and may vary based on complexity
- Each phase should include testing and validation before moving to the next
