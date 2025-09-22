#!/usr/bin/env python3
"""
Sigma Playground Development Assistant

This script provides structured guidance for Cursor to autonomously build the Sigma Playground
application by referencing the comprehensive documentation files. It acts as a prompt engineering
tool that guides the development process step by step.

Usage:
    python sigma_playground_development_assistant.py [phase] [options]

Phases:
    - setup: Initial project setup and configuration
    - backend: Backend API development
    - frontend: Frontend application development
    - database: Database setup and migrations
    - deployment: Deployment and DevOps setup
    - testing: Testing implementation
    - monitoring: Performance monitoring setup
    - security: Security implementation
    - content: Content management system
    - integration: Sigma integration features
"""

import os
import json
import argparse
from pathlib import Path
from typing import Dict, List, Any, Optional
from dataclasses import dataclass
from enum import Enum

class DevelopmentPhase(Enum):
    SETUP = "setup"
    BACKEND = "backend"
    FRONTEND = "frontend"
    DATABASE = "database"
    DEPLOYMENT = "deployment"
    TESTING = "testing"
    MONITORING = "monitoring"
    SECURITY = "security"
    CONTENT = "content"
    INTEGRATION = "integration"

@dataclass
class DocumentationReference:
    """Represents a reference to a specific documentation file and section"""
    file_path: str
    section: str
    description: str
    priority: int  # 1-5, where 5 is highest priority
    phase: DevelopmentPhase
    dependencies: List[str] = None

class SigmaPlaygroundDevelopmentAssistant:
    """Main class for guiding Sigma Playground development"""
    
    def __init__(self, documentation_path: str = "documentation"):
        self.documentation_path = Path(documentation_path)
        self.documentation_references = self._load_documentation_references()
        self.current_phase = None
        self.completed_tasks = []
        
    def _load_documentation_references(self) -> Dict[DevelopmentPhase, List[DocumentationReference]]:
        """Load and organize documentation references by development phase"""
        
        references = {
            DevelopmentPhase.SETUP: [
                DocumentationReference(
                    file_path="Sigma Playground PRD & Roadmap_v1.md",
                    section="Project Overview & Goals",
                    description="Core project requirements and success metrics",
                    priority=5,
                    phase=DevelopmentPhase.SETUP
                ),
                DocumentationReference(
                    file_path="Sigma Playground - Development Execution Plan.md",
                    section="Project Setup & Initial Configuration",
                    description="Step-by-step setup instructions and environment configuration",
                    priority=5,
                    phase=DevelopmentPhase.SETUP
                ),
                DocumentationReference(
                    file_path="Sigma Playground - User Experience & Design System.md",
                    section="Design System & Brand Guidelines",
                    description="UI/UX design system, component library, and brand guidelines",
                    priority=4,
                    phase=DevelopmentPhase.SETUP
                )
            ],
            
            DevelopmentPhase.DATABASE: [
                DocumentationReference(
                    file_path="Sigma Playground - Database Architecture & Migration Strategy.md",
                    section="Database Schema Design",
                    description="Complete database schema with tables, relationships, and constraints",
                    priority=5,
                    phase=DevelopmentPhase.DATABASE,
                    dependencies=["setup"]
                ),
                DocumentationReference(
                    file_path="Sigma Playground - Database Architecture & Migration Strategy.md",
                    section="Migration Strategy",
                    description="Database migration scripts and version control",
                    priority=4,
                    phase=DevelopmentPhase.DATABASE,
                    dependencies=["setup"]
                ),
                DocumentationReference(
                    file_path="Sigma Playground - Performance Optimization & Monitoring.md",
                    section="Database Optimization",
                    description="Database indexing, query optimization, and connection pooling",
                    priority=3,
                    phase=DevelopmentPhase.DATABASE,
                    dependencies=["database"]
                )
            ],
            
            DevelopmentPhase.BACKEND: [
                DocumentationReference(
                    file_path="Sigma Playground - API Design & Documentation Standards.md",
                    section="API Endpoints & Specifications",
                    description="Complete API specification with endpoints, request/response schemas",
                    priority=5,
                    phase=DevelopmentPhase.BACKEND,
                    dependencies=["database"]
                ),
                DocumentationReference(
                    file_path="Sigma Playground - Backend Technical Challenges & Solutions.md",
                    section="Core Services Implementation",
                    description="Backend services architecture and implementation patterns",
                    priority=5,
                    phase=DevelopmentPhase.BACKEND,
                    dependencies=["database"]
                ),
                DocumentationReference(
                    file_path="Sigma Playground - Security Implementation Guide.md",
                    section="Authentication & Authorization",
                    description="JWT authentication, RBAC, and security middleware",
                    priority=4,
                    phase=DevelopmentPhase.BACKEND,
                    dependencies=["backend"]
                ),
                DocumentationReference(
                    file_path="Sigma Playground - Content Management & Moderation System.md",
                    section="Content Moderation Workflow",
                    description="Content moderation system and admin workflows",
                    priority=3,
                    phase=DevelopmentPhase.BACKEND,
                    dependencies=["backend"]
                )
            ],
            
            DevelopmentPhase.FRONTEND: [
                DocumentationReference(
                    file_path="Sigma Playground - Frontend Architecture & Component Library.md",
                    section="Component Library & Design System",
                    description="React components, design system, and UI patterns",
                    priority=5,
                    phase=DevelopmentPhase.FRONTEND,
                    dependencies=["backend"]
                ),
                DocumentationReference(
                    file_path="Sigma Playground - User Experience & Design System.md",
                    section="User Interface Design",
                    description="UI/UX patterns, user flows, and responsive design",
                    priority=4,
                    phase=DevelopmentPhase.FRONTEND,
                    dependencies=["backend"]
                ),
                DocumentationReference(
                    file_path="Sigma Playground - Performance Optimization & Monitoring.md",
                    section="Frontend Performance",
                    description="Code splitting, lazy loading, and performance optimization",
                    priority=3,
                    phase=DevelopmentPhase.FRONTEND,
                    dependencies=["frontend"]
                )
            ],
            
            DevelopmentPhase.INTEGRATION: [
                DocumentationReference(
                    file_path="Sigma Playground - Sigma Integration & Embedding Guide.md",
                    section="Sigma Embedding Implementation",
                    description="Sigma workbook embedding and integration patterns",
                    priority=5,
                    phase=DevelopmentPhase.INTEGRATION,
                    dependencies=["frontend", "backend"]
                ),
                DocumentationReference(
                    file_path="Sigma Playground - Sigma Integration & Embedding Guide.md",
                    section="Authentication & Security",
                    description="Sigma API authentication and security considerations",
                    priority=4,
                    phase=DevelopmentPhase.INTEGRATION,
                    dependencies=["frontend", "backend"]
                )
            ],
            
            DevelopmentPhase.TESTING: [
                DocumentationReference(
                    file_path="Sigma Playground - Testing Strategy & Quality Assurance.md",
                    section="Testing Framework Setup",
                    description="Testing infrastructure and framework configuration",
                    priority=5,
                    phase=DevelopmentPhase.TESTING,
                    dependencies=["frontend", "backend"]
                ),
                DocumentationReference(
                    file_path="Sigma Playground - Testing Strategy & Quality Assurance.md",
                    section="Test Implementation",
                    description="Unit tests, integration tests, and E2E tests",
                    priority=4,
                    phase=DevelopmentPhase.TESTING,
                    dependencies=["frontend", "backend"]
                )
            ],
            
            DevelopmentPhase.DEPLOYMENT: [
                DocumentationReference(
                    file_path="Sigma Playground - Deployment & DevOps Strategy.md",
                    section="Infrastructure Setup",
                    description="Docker, Kubernetes, and cloud infrastructure configuration",
                    priority=5,
                    phase=DevelopmentPhase.DEPLOYMENT,
                    dependencies=["testing"]
                ),
                DocumentationReference(
                    file_path="Sigma Playground - Deployment & DevOps Strategy.md",
                    section="CI/CD Pipeline",
                    description="GitHub Actions, automated testing, and deployment pipelines",
                    priority=4,
                    phase=DevelopmentPhase.DEPLOYMENT,
                    dependencies=["testing"]
                )
            ],
            
            DevelopmentPhase.MONITORING: [
                DocumentationReference(
                    file_path="Sigma Playground - Performance Optimization & Monitoring.md",
                    section="Monitoring & Alerting",
                    description="Prometheus, Grafana, and performance monitoring setup",
                    priority=4,
                    phase=DevelopmentPhase.MONITORING,
                    dependencies=["deployment"]
                ),
                DocumentationReference(
                    file_path="Sigma Playground - Performance Optimization & Monitoring.md",
                    section="Performance Testing",
                    description="Load testing and performance benchmarking",
                    priority=3,
                    phase=DevelopmentPhase.MONITORING,
                    dependencies=["deployment"]
                )
            ],
            
            DevelopmentPhase.SECURITY: [
                DocumentationReference(
                    file_path="Sigma Playground - Security Implementation Guide.md",
                    section="Security Hardening",
                    description="Security headers, input validation, and vulnerability scanning",
                    priority=4,
                    phase=DevelopmentPhase.SECURITY,
                    dependencies=["deployment"]
                ),
                DocumentationReference(
                    file_path="Sigma Playground - Security Implementation Guide.md",
                    section="Compliance & Auditing",
                    description="Security compliance and audit logging",
                    priority=3,
                    phase=DevelopmentPhase.SECURITY,
                    dependencies=["deployment"]
                )
            ],
            
            DevelopmentPhase.CONTENT: [
                DocumentationReference(
                    file_path="Sigma Playground - Content Management & Moderation System.md",
                    section="Content Lifecycle Management",
                    description="Content creation, approval, and lifecycle management",
                    priority=3,
                    phase=DevelopmentPhase.CONTENT,
                    dependencies=["frontend", "backend"]
                )
            ]
        }
        
        return references
    
    def get_phase_guidance(self, phase: DevelopmentPhase) -> str:
        """Generate comprehensive guidance for a specific development phase"""
        
        if phase not in self.documentation_references:
            return f"No guidance available for phase: {phase.value}"
        
        references = self.documentation_references[phase]
        guidance = self._generate_phase_guidance(phase, references)
        
        return guidance
    
    def _generate_phase_guidance(self, phase: DevelopmentPhase, references: List[DocumentationReference]) -> str:
        """Generate detailed guidance for a development phase"""
        
        guidance = f"""
# Sigma Playground Development Guidance - {phase.value.upper()}

## Phase Overview
This phase focuses on implementing the {phase.value} components of the Sigma Playground application.

## Key Documentation References
"""
        
        # Sort references by priority
        sorted_references = sorted(references, key=lambda x: x.priority, reverse=True)
        
        for ref in sorted_references:
            guidance += f"""
### {ref.section}
**File:** `{ref.file_path}`
**Priority:** {ref.priority}/5
**Description:** {ref.description}
"""
            
            if ref.dependencies:
                guidance += f"**Dependencies:** {', '.join(ref.dependencies)}\n"
            
            guidance += "\n"
        
        # Add phase-specific implementation guidance
        guidance += self._get_phase_specific_guidance(phase)
        
        return guidance
    
    def _get_phase_specific_guidance(self, phase: DevelopmentPhase) -> str:
        """Get phase-specific implementation guidance"""
        
        guidance_templates = {
            DevelopmentPhase.SETUP: """
## Implementation Steps

1. **Project Initialization**
   - Create project structure following the Development Execution Plan
   - Set up package.json with required dependencies
   - Configure TypeScript, ESLint, and Prettier
   - Initialize Git repository with proper .gitignore

2. **Environment Configuration**
   - Set up environment variables for development, staging, and production
   - Configure database connection strings
   - Set up Redis for caching
   - Configure external service API keys

3. **Design System Setup**
   - Install and configure Tailwind CSS
   - Set up component library structure
   - Implement design tokens and theme configuration
   - Create base components (Button, Input, Card, etc.)

4. **Development Tools**
   - Set up hot reloading for development
   - Configure debugging tools
   - Set up code formatting and linting
   - Initialize testing framework

## Key Files to Create
- `package.json` - Project dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `.env.example` - Environment variables template
- `README.md` - Project documentation
""",
            
            DevelopmentPhase.DATABASE: """
## Implementation Steps

1. **Database Schema Implementation**
   - Create Prisma schema file with all tables and relationships
   - Implement database migrations
   - Set up database connection and configuration
   - Create seed data for development

2. **Database Optimization**
   - Add proper indexes for performance
   - Configure connection pooling
   - Set up database monitoring
   - Implement query optimization

3. **Data Models**
   - Create TypeScript interfaces for all models
   - Implement data validation schemas
   - Set up database relationships and constraints
   - Create utility functions for data manipulation

## Key Files to Create
- `prisma/schema.prisma` - Database schema
- `prisma/migrations/` - Database migration files
- `src/types/database.ts` - TypeScript types
- `src/utils/database.ts` - Database utilities
""",
            
            DevelopmentPhase.BACKEND: """
## Implementation Steps

1. **API Server Setup**
   - Set up Express.js or Fastify server
   - Configure middleware (CORS, body parsing, etc.)
   - Implement error handling and logging
   - Set up request validation

2. **Authentication & Authorization**
   - Implement JWT authentication
   - Create user registration and login endpoints
   - Set up role-based access control
   - Implement password hashing and validation

3. **Core API Endpoints**
   - User management endpoints
   - Workbook CRUD operations
   - Search and filtering endpoints
   - File upload and management

4. **Content Management**
   - Implement content moderation system
   - Set up admin dashboard endpoints
   - Create reporting and analytics endpoints
   - Implement audit logging

## Key Files to Create
- `src/app.ts` - Main application file
- `src/routes/` - API route handlers
- `src/middleware/` - Custom middleware
- `src/services/` - Business logic services
- `src/controllers/` - Request controllers
""",
            
            DevelopmentPhase.FRONTEND: """
## Implementation Steps

1. **React Application Setup**
   - Create React app with TypeScript
   - Set up routing with React Router
   - Configure state management (Redux Toolkit or Zustand)
   - Set up API client and error handling

2. **Component Library**
   - Create reusable UI components
   - Implement design system components
   - Set up component documentation
   - Create responsive layouts

3. **Pages and Features**
   - Home page with workbook listings
   - User authentication pages
   - Workbook creation and editing
   - User profiles and settings
   - Admin dashboard

4. **Performance Optimization**
   - Implement code splitting and lazy loading
   - Set up image optimization
   - Configure caching strategies
   - Implement virtual scrolling for large lists

## Key Files to Create
- `src/App.tsx` - Main application component
- `src/pages/` - Page components
- `src/components/` - Reusable components
- `src/hooks/` - Custom React hooks
- `src/store/` - State management
""",
            
            DevelopmentPhase.INTEGRATION: """
## Implementation Steps

1. **Sigma API Integration**
   - Set up Sigma API client
   - Implement authentication with Sigma
   - Create workbook embedding functionality
   - Handle Sigma API responses and errors

2. **Embedding Implementation**
   - Create iframe-based embedding
   - Implement responsive embedding
   - Handle Sigma authentication flow
   - Set up error handling and fallbacks

3. **Workbook Management**
   - Implement workbook creation from Sigma
   - Set up workbook metadata management
   - Create workbook sharing and permissions
   - Implement workbook versioning

## Key Files to Create
- `src/services/sigma.ts` - Sigma API client
- `src/components/SigmaEmbed.tsx` - Embedding component
- `src/hooks/useSigma.ts` - Sigma integration hooks
- `src/utils/sigma.ts` - Sigma utility functions
""",
            
            DevelopmentPhase.TESTING: """
## Implementation Steps

1. **Testing Framework Setup**
   - Configure Jest for unit testing
   - Set up React Testing Library
   - Configure Cypress for E2E testing
   - Set up test database and fixtures

2. **Test Implementation**
   - Write unit tests for utilities and services
   - Create component tests
   - Implement integration tests
   - Set up E2E test scenarios

3. **Test Automation**
   - Configure GitHub Actions for testing
   - Set up test coverage reporting
   - Implement automated test runs
   - Set up test result notifications

## Key Files to Create
- `jest.config.js` - Jest configuration
- `cypress.config.js` - Cypress configuration
- `src/__tests__/` - Unit test files
- `cypress/e2e/` - E2E test files
""",
            
            DevelopmentPhase.DEPLOYMENT: """
## Implementation Steps

1. **Docker Configuration**
   - Create Dockerfile for backend
   - Create Dockerfile for frontend
   - Set up docker-compose for local development
   - Configure multi-stage builds

2. **Kubernetes Setup**
   - Create Kubernetes manifests
   - Set up ingress and load balancing
   - Configure secrets and config maps
   - Set up horizontal pod autoscaling

3. **CI/CD Pipeline**
   - Set up GitHub Actions workflows
   - Configure automated testing
   - Set up deployment pipelines
   - Implement rollback strategies

## Key Files to Create
- `Dockerfile` - Backend container
- `Dockerfile.frontend` - Frontend container
- `docker-compose.yml` - Local development
- `k8s/` - Kubernetes manifests
- `.github/workflows/` - CI/CD pipelines
""",
            
            DevelopmentPhase.MONITORING: """
## Implementation Steps

1. **Monitoring Setup**
   - Configure Prometheus for metrics collection
   - Set up Grafana dashboards
   - Implement application metrics
   - Set up alerting rules

2. **Performance Monitoring**
   - Set up APM tools
   - Implement performance tracking
   - Configure log aggregation
   - Set up error tracking

3. **Health Checks**
   - Implement health check endpoints
   - Set up uptime monitoring
   - Configure dependency checks
   - Set up automated recovery

## Key Files to Create
- `monitoring/prometheus.yml` - Prometheus config
- `monitoring/grafana/` - Grafana dashboards
- `src/middleware/metrics.ts` - Metrics middleware
- `src/health/` - Health check endpoints
""",
            
            DevelopmentPhase.SECURITY: """
## Implementation Steps

1. **Security Hardening**
   - Implement security headers
   - Set up input validation and sanitization
   - Configure CORS and CSP
   - Implement rate limiting

2. **Authentication Security**
   - Set up secure session management
   - Implement password policies
   - Configure OAuth providers
   - Set up MFA support

3. **Vulnerability Management**
   - Set up dependency scanning
   - Implement security testing
   - Configure vulnerability alerts
   - Set up security monitoring

## Key Files to Create
- `src/middleware/security.ts` - Security middleware
- `src/utils/validation.ts` - Input validation
- `src/services/auth.ts` - Authentication service
- `security/` - Security configuration files
""",
            
            DevelopmentPhase.CONTENT: """
## Implementation Steps

1. **Content Management System**
   - Implement content creation workflows
   - Set up content approval processes
   - Create content versioning
   - Implement content archiving

2. **Moderation System**
   - Set up automated content filtering
   - Implement manual review workflows
   - Create reporting and flagging system
   - Set up admin moderation tools

3. **Content Analytics**
   - Implement content performance tracking
   - Set up user engagement metrics
   - Create content recommendation system
   - Implement content search and discovery

## Key Files to Create
- `src/services/content.ts` - Content management
- `src/services/moderation.ts` - Moderation system
- `src/components/ModerationPanel.tsx` - Admin tools
- `src/utils/content.ts` - Content utilities
"""
        }
        
        return guidance_templates.get(phase, "No specific guidance available for this phase.")
    
    def get_full_development_plan(self) -> str:
        """Generate a complete development plan with all phases"""
        
        plan = """
# Sigma Playground - Complete Development Plan

This document provides a comprehensive roadmap for building the Sigma Playground application.
Follow the phases in order, as each phase builds upon the previous ones.

## Development Phases Overview

"""
        
        phase_order = [
            DevelopmentPhase.SETUP,
            DevelopmentPhase.DATABASE,
            DevelopmentPhase.BACKEND,
            DevelopmentPhase.FRONTEND,
            DevelopmentPhase.INTEGRATION,
            DevelopmentPhase.TESTING,
            DevelopmentPhase.DEPLOYMENT,
            DevelopmentPhase.MONITORING,
            DevelopmentPhase.SECURITY,
            DevelopmentPhase.CONTENT
        ]
        
        for i, phase in enumerate(phase_order, 1):
            references = self.documentation_references[phase]
            plan += f"""
### Phase {i}: {phase.value.upper()}
**Priority:** {max(ref.priority for ref in references)}/5
**Dependencies:** {', '.join(set(dep for ref in references for dep in (ref.dependencies or []))) or 'None'}
**Key Files:** {', '.join(set(ref.file_path for ref in references))}

"""
        
        plan += """
## Implementation Strategy

1. **Start with Setup Phase** - This establishes the foundation for all other phases
2. **Follow Phase Dependencies** - Each phase has specific dependencies that must be completed first
3. **Reference Documentation** - Each phase includes specific documentation references for detailed implementation
4. **Test Continuously** - Implement testing as you build each component
5. **Deploy Incrementally** - Deploy each phase to staging for validation before moving to the next

## Getting Started

To begin development, run:
```bash
python sigma_playground_development_assistant.py setup
```

This will provide detailed guidance for the setup phase, including:
- Project structure creation
- Environment configuration
- Development tools setup
- Design system implementation

## Next Steps

After completing each phase, run the assistant again with the next phase:
```bash
python sigma_playground_development_assistant.py [next_phase]
```

The assistant will provide phase-specific guidance, documentation references, and implementation steps.
"""
        
        return plan
    
    def generate_cursor_prompt(self, phase: DevelopmentPhase, specific_task: str = None) -> str:
        """Generate a Cursor-specific prompt for autonomous development"""
        
        phase_guidance = self.get_phase_guidance(phase)
        
        prompt = f"""
# Cursor Development Prompt - Sigma Playground {phase.value.upper()}

## Context
You are building the Sigma Playground application, a platform for creating, sharing, and discovering Sigma workbooks. 
This is a full-stack application with React frontend, Node.js backend, PostgreSQL database, and Sigma integration.

## Current Phase: {phase.value.upper()}

{phase_guidance}

## Cursor Instructions

1. **Read the Documentation**: Carefully review the referenced documentation files to understand the requirements and implementation details.

2. **Follow the Implementation Steps**: Execute the implementation steps in the order provided, ensuring each step is completed before moving to the next.

3. **Create the Key Files**: Generate all the key files mentioned in the guidance, following the patterns and examples from the documentation.

4. **Maintain Code Quality**: 
   - Use TypeScript for type safety
   - Follow the established patterns from the documentation
   - Implement proper error handling
   - Add comprehensive comments and documentation

5. **Test Your Implementation**: 
   - Write unit tests for new functionality
   - Test the integration between components
   - Verify that the implementation meets the requirements

6. **Reference the Documentation**: When implementing specific features, refer to the detailed documentation files for:
   - API specifications and schemas
   - Database schema and relationships
   - UI/UX patterns and components
   - Security requirements and best practices
   - Performance optimization strategies

## Specific Task
"""
        
        if specific_task:
            prompt += f"\n**Focus on:** {specific_task}\n"
        else:
            prompt += "\n**Focus on:** Complete implementation of the current phase\n"
        
        prompt += """
## Success Criteria

- All implementation steps are completed
- Key files are created and properly implemented
- Code follows the patterns and standards from the documentation
- Implementation is tested and working
- Documentation is referenced and followed accurately

## Next Steps

After completing this phase, run the assistant again with the next phase to continue development.

Remember: This is an autonomous development process. Use the documentation as your guide and implement the features according to the specifications provided.
"""
        
        return prompt
    
    def run(self, phase: str = None, specific_task: str = None, full_plan: bool = False):
        """Main entry point for the development assistant"""
        
        if full_plan:
            print(self.get_full_development_plan())
            return
        
        if not phase:
            print("Please specify a phase or use --full-plan for the complete development plan")
            print("Available phases:", [p.value for p in DevelopmentPhase])
            return
        
        try:
            phase_enum = DevelopmentPhase(phase)
        except ValueError:
            print(f"Invalid phase: {phase}")
            print("Available phases:", [p.value for p in DevelopmentPhase])
            return
        
        if specific_task:
            print(self.generate_cursor_prompt(phase_enum, specific_task))
        else:
            print(self.get_phase_guidance(phase_enum))

def main():
    """Main function for command-line interface"""
    parser = argparse.ArgumentParser(description="Sigma Playground Development Assistant")
    parser.add_argument("phase", nargs="?", help="Development phase to get guidance for")
    parser.add_argument("--task", help="Specific task to focus on")
    parser.add_argument("--full-plan", action="store_true", help="Show the complete development plan")
    parser.add_argument("--documentation-path", default="documentation", help="Path to documentation files")
    
    args = parser.parse_args()
    
    assistant = SigmaPlaygroundDevelopmentAssistant(args.documentation_path)
    assistant.run(args.phase, args.task, args.full_plan)

if __name__ == "__main__":
    main()

