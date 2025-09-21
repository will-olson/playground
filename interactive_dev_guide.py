#!/usr/bin/env python3
"""
Interactive Strategic Guide for Expedited Development Areas
=========================================================

An enhanced version with interactive features, better parsing, and AI-assisted
guidance for navigating the Expedited_Development_Areas.md document.

Features:
- Interactive keyword search with context
- Smart area recommendations based on current development phase
- Code pattern extraction and validation
- Development roadmap generation
- Real-time status tracking

Usage:
    python interactive_dev_guide.py [mode] [options]
    
Modes:
    interactive    - Start interactive mode (default)
    search <term>  - Quick search for a term
    roadmap        - Generate development roadmap
    status         - Show current status
    validate       - Validate code patterns
"""

import re
import sys
import json
import argparse
from typing import Dict, List, Tuple, Optional, Set
from dataclasses import dataclass, asdict
from pathlib import Path
from datetime import datetime
import subprocess

@dataclass
class CodeBlock:
    """Represents a code block with metadata"""
    language: str
    content: str
    line_start: int
    line_end: int
    context: str
    area_number: Optional[int] = None

@dataclass
class ImplementationStep:
    """Represents an implementation step"""
    step_number: int
    description: str
    area_number: int
    priority: str  # "high", "medium", "low"
    estimated_time: str
    dependencies: List[str]
    code_blocks: List[CodeBlock]

@dataclass
class DevelopmentArea:
    """Enhanced development area with implementation details"""
    number: int
    title: str
    prd_alignment: str
    current_state: str
    expedited_opportunity: str
    critical_implementation: str
    code_examples: List[CodeBlock]
    implementation_steps: List[ImplementationStep]
    keywords: Set[str]
    start_line: int
    end_line: int

class InteractiveDevelopmentGuide:
    """Enhanced guide with interactive features and better parsing"""
    
    def __init__(self, doc_path: str = "Expedited_Development_Areas.md"):
        self.doc_path = Path(doc_path)
        self.content = ""
        self.development_areas: Dict[int, DevelopmentArea] = {}
        self.code_blocks: List[CodeBlock] = []
        self.implementation_roadmap: List[ImplementationStep] = []
        
        # Keywords for smart recommendations
        self.tech_keywords = {
            'jwt': ['authentication', 'security', 'embed', 'user'],
            'react': ['frontend', 'ui', 'component', 'sdk'],
            'api': ['backend', 'integration', 'data', 'workbook'],
            'debug': ['testing', 'validation', 'troubleshooting'],
            'admin': ['management', 'dashboard', 'curation'],
            'sharing': ['community', 'public', 'embed', 'export'],
            'error': ['handling', 'monitoring', 'reliability'],
            'performance': ['optimization', 'speed', 'efficiency']
        }
        
        if self.doc_path.exists():
            self.load_document()
            self.parse_enhanced_structure()
        else:
            print(f"❌ Error: Document {doc_path} not found!")
            sys.exit(1)
    
    def load_document(self):
        """Load the document content"""
        with open(self.doc_path, 'r', encoding='utf-8') as f:
            self.content = f.read()
        
        lines = len(self.content.splitlines())
        chars = len(self.content)
        print(f"✅ Loaded document: {chars:,} characters, {lines:,} lines")
    
    def parse_enhanced_structure(self):
        """Enhanced parsing with code block extraction and keyword analysis"""
        lines = self.content.splitlines()
        
        current_area = None
        current_code_block = None
        in_code_block = False
        
        for i, line in enumerate(lines):
            line_num = i + 1
            
            # Parse development areas
            area_match = re.match(r'^## \*\*(\d+)\. (.+?)\*\*', line)
            if area_match:
                if current_area:
                    current_area.end_line = line_num - 1
                    self.development_areas[current_area.number] = current_area
                
                current_area = DevelopmentArea(
                    number=int(area_match.group(1)),
                    title=area_match.group(2),
                    prd_alignment="",
                    current_state="",
                    expedited_opportunity="",
                    critical_implementation="",
                    code_examples=[],
                    implementation_steps=[],
                    keywords=set(),
                    start_line=line_num,
                    end_line=0
                )
            
            # Extract code blocks
            if line.startswith('```'):
                if in_code_block and current_code_block:
                    # End of code block
                    current_code_block.line_end = line_num - 1
                    current_code_block.content = '\n'.join(
                        lines[current_code_block.line_start:current_code_block.line_end]
                    )
                    self.code_blocks.append(current_code_block)
                    if current_area:
                        current_area.code_examples.append(current_code_block)
                    current_code_block = None
                    in_code_block = False
                else:
                    # Start of code block
                    language = line[3:].strip()
                    current_code_block = CodeBlock(
                        language=language,
                        content="",
                        line_start=line_num + 1,
                        line_end=0,
                        context=self._get_context(lines, i),
                        area_number=current_area.number if current_area else None
                    )
                    in_code_block = True
            
            # Parse key subsections
            if current_area:
                if line.startswith('### **PRD Alignment**'):
                    current_area.prd_alignment = self._extract_section_content(lines, i)
                    current_area.keywords.update(self._extract_keywords(current_area.prd_alignment))
                elif line.startswith('### **Current State**'):
                    current_area.current_state = self._extract_section_content(lines, i)
                    current_area.keywords.update(self._extract_keywords(current_area.current_state))
                elif line.startswith('### **Expedited Opportunity**'):
                    current_area.expedited_opportunity = self._extract_section_content(lines, i)
                    current_area.keywords.update(self._extract_keywords(current_area.expedited_opportunity))
                elif line.startswith('### **🚀 Critical Implementation'):
                    current_area.critical_implementation = self._extract_section_content(lines, i)
                    current_area.keywords.update(self._extract_keywords(current_area.critical_implementation))
        
        # Close the last area
        if current_area:
            current_area.end_line = len(lines)
            self.development_areas[current_area.number] = current_area
        
        print(f"✅ Parsed {len(self.development_areas)} development areas")
        print(f"✅ Extracted {len(self.code_blocks)} code blocks")
        
        # Generate implementation roadmap
        self.generate_implementation_roadmap()
    
    def _get_context(self, lines: List[str], current_line: int) -> str:
        """Get context around a code block"""
        context_lines = []
        # Look back up to 5 lines for context
        for i in range(max(0, current_line - 5), current_line):
            if lines[i].strip() and not lines[i].startswith('```'):
                context_lines.append(lines[i].strip())
        return ' '.join(context_lines[-3:])  # Last 3 context lines
    
    def _extract_keywords(self, text: str) -> Set[str]:
        """Extract relevant keywords from text"""
        keywords = set()
        text_lower = text.lower()
        
        for tech, related_terms in self.tech_keywords.items():
            if any(term in text_lower for term in related_terms + [tech]):
                keywords.add(tech)
        
        # Extract other important terms
        important_terms = ['jwt', 'react', 'api', 'debug', 'admin', 'sharing', 'error', 'performance']
        for term in important_terms:
            if term in text_lower:
                keywords.add(term)
        
        return keywords
    
    def _extract_section_content(self, lines: List[str], start_idx: int) -> str:
        """Extract content from a section until the next header"""
        content = []
        for i in range(start_idx + 1, len(lines)):
            line = lines[i]
            if line.startswith('###') or line.startswith('##'):
                break
            if line.strip():
                content.append(line.strip())
        return ' '.join(content)
    
    def generate_implementation_roadmap(self):
        """Generate a structured implementation roadmap"""
        self.implementation_roadmap = []
        
        # Priority mapping based on PRD phases
        priority_map = {
            'Phase 1 MVP': 'high',
            'Phase 2': 'medium', 
            'Phase 3': 'low'
        }
        
        for area_num, area in self.development_areas.items():
            # Determine priority from PRD alignment
            priority = 'medium'  # default
            for phase, pri in priority_map.items():
                if phase in area.prd_alignment:
                    priority = pri
                    break
            
            # Create implementation steps
            step = ImplementationStep(
                step_number=area_num,
                description=f"Implement {area.title}",
                area_number=area_num,
                priority=priority,
                estimated_time=self._estimate_time(area),
                dependencies=self._find_dependencies(area),
                code_blocks=area.code_examples
            )
            self.implementation_roadmap.append(step)
    
    def _estimate_time(self, area: DevelopmentArea) -> str:
        """Estimate implementation time based on area complexity"""
        complexity_indicators = len(area.code_examples) + len(area.keywords)
        
        if complexity_indicators <= 3:
            return "1-2 days"
        elif complexity_indicators <= 6:
            return "3-5 days"
        else:
            return "1-2 weeks"
    
    def _find_dependencies(self, area: DevelopmentArea) -> List[str]:
        """Find dependencies between areas"""
        dependencies = []
        
        # Simple dependency detection based on keywords and content
        if 'user management' in area.title.lower():
            dependencies.append("Authentication system")
        
        if 'sharing' in area.title.lower():
            dependencies.append("Workbook embedding")
            dependencies.append("User management")
        
        if 'admin' in area.title.lower():
            dependencies.append("User management")
            dependencies.append("Workbook management")
        
        return dependencies
    
    def smart_search(self, query: str) -> Dict[str, List]:
        """Enhanced search with context and relevance scoring"""
        query_lower = query.lower()
        results = {
            'exact_matches': [],
            'context_matches': [],
            'code_matches': [],
            'recommended_areas': []
        }
        
        # Score relevance for each area
        area_scores = {}
        for area_num, area in self.development_areas.items():
            score = 0
            
            # Exact title match
            if query_lower in area.title.lower():
                score += 10
            
            # Keyword matches
            for keyword in area.keywords:
                if keyword in query_lower:
                    score += 5
            
            # Content matches
            content_lower = (area.prd_alignment + area.current_state + 
                           area.expedited_opportunity + area.critical_implementation).lower()
            if query_lower in content_lower:
                score += 3
            
            if score > 0:
                area_scores[area_num] = score
        
        # Sort by score and add to results
        sorted_areas = sorted(area_scores.items(), key=lambda x: x[1], reverse=True)
        results['recommended_areas'] = [
            (area_num, score, self.development_areas[area_num].title)
            for area_num, score in sorted_areas[:5]
        ]
        
        # Search code blocks
        for code_block in self.code_blocks:
            if query_lower in code_block.content.lower():
                results['code_matches'].append(code_block)
        
        return results
    
    def get_development_status(self) -> str:
        """Get comprehensive development status"""
        status = f"""
🎯 **SIGMA PLAYGROUND DEVELOPMENT STATUS**
Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}

📊 **OVERVIEW**
• Total Development Areas: {len(self.development_areas)}
• Code Blocks Extracted: {len(self.code_blocks)}
• Implementation Steps: {len(self.implementation_roadmap)}

🚀 **PRIORITY AREAS** (High Priority)
"""
        
        high_priority = [step for step in self.implementation_roadmap if step.priority == 'high']
        for step in high_priority:
            area = self.development_areas[step.area_number]
            status += f"• Area {step.area_number}: {area.title} ({step.estimated_time})\n"
        
        status += "\n📋 **READY-TO-IMPLEMENT FEATURES**\n"
        for area_num, area in self.development_areas.items():
            if 'BREAKTHROUGH' in area.current_state or 'working' in area.current_state.lower():
                status += f"• Area {area_num}: {area.title} ✅\n"
        
        return status
    
    def generate_roadmap(self) -> str:
        """Generate a detailed implementation roadmap"""
        roadmap = f"""
🗺️ **SIGMA PLAYGROUND IMPLEMENTATION ROADMAP**
Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}

📅 **PHASE 1: FOUNDATION** (High Priority - Week 1-2)
"""
        
        high_priority = [step for step in self.implementation_roadmap if step.priority == 'high']
        for step in high_priority:
            area = self.development_areas[step.area_number]
            roadmap += f"""
**Step {step.step_number}: {area.title}**
• Estimated Time: {step.estimated_time}
• Dependencies: {', '.join(step.dependencies) if step.dependencies else 'None'}
• Code Blocks: {len(step.code_blocks)} patterns available
• Description: {area.expedited_opportunity[:100]}...
"""
        
        roadmap += f"""

📅 **PHASE 2: ENHANCEMENT** (Medium Priority - Week 3-4)
"""
        
        medium_priority = [step for step in self.implementation_roadmap if step.priority == 'medium']
        for step in medium_priority:
            area = self.development_areas[step.area_number]
            roadmap += f"""
**Step {step.step_number}: {area.title}**
• Estimated Time: {step.estimated_time}
• Dependencies: {', '.join(step.dependencies) if step.dependencies else 'None'}
"""
        
        return roadmap
    
    def validate_code_patterns(self) -> Dict[str, List[str]]:
        """Validate code patterns for syntax and completeness"""
        validation_results = {
            'valid': [],
            'warnings': [],
            'errors': []
        }
        
        for code_block in self.code_blocks:
            if code_block.language in ['typescript', 'javascript', 'ts', 'js']:
                # Basic validation for JS/TS code
                if 'function' in code_block.content or 'const' in code_block.content:
                    if code_block.content.count('{') == code_block.content.count('}'):
                        validation_results['valid'].append(f"Line {code_block.line_start}: {code_block.language} block")
                    else:
                        validation_results['errors'].append(f"Line {code_block.line_start}: Mismatched braces")
                
                if 'TODO' in code_block.content or 'FIXME' in code_block.content:
                    validation_results['warnings'].append(f"Line {code_block.line_start}: Contains TODO/FIXME")
        
        return validation_results
    
    def interactive_mode(self):
        """Start interactive mode"""
        print(f"""
🚀 **INTERACTIVE SIGMA PLAYGROUND DEVELOPMENT GUIDE**
==================================================

Welcome to the interactive development guide!
Type 'help' for available commands, 'quit' to exit.

Available {len(self.development_areas)} development areas loaded.
""")
        
        while True:
            try:
                command = input("\n🔍 Enter command: ").strip().lower()
                
                if command == 'quit' or command == 'exit':
                    print("👋 Goodbye!")
                    break
                
                elif command == 'help':
                    self.show_help()
                
                elif command == 'status':
                    print(self.get_development_status())
                
                elif command == 'roadmap':
                    print(self.generate_roadmap())
                
                elif command == 'validate':
                    results = self.validate_code_patterns()
                    print("\n🔍 **CODE VALIDATION RESULTS**")
                    print(f"✅ Valid: {len(results['valid'])}")
                    print(f"⚠️  Warnings: {len(results['warnings'])}")
                    print(f"❌ Errors: {len(results['errors'])}")
                
                elif command.startswith('search '):
                    query = command[7:]
                    results = self.smart_search(query)
                    self.display_search_results(query, results)
                
                elif command.startswith('area '):
                    try:
                        area_num = int(command[5:])
                        self.show_area_details(area_num)
                    except ValueError:
                        print("Please provide a valid area number")
                
                elif command == 'areas':
                    self.list_all_areas()
                
                else:
                    print("Unknown command. Type 'help' for available commands.")
            
            except KeyboardInterrupt:
                print("\n👋 Goodbye!")
                break
            except Exception as e:
                print(f"Error: {e}")
    
    def show_help(self):
        """Show help information"""
        help_text = """
📖 **AVAILABLE COMMANDS**

**Navigation:**
• areas                    - List all development areas
• area <number>           - Show details for specific area
• search <keyword>        - Search for keywords
• status                  - Show current development status
• roadmap                 - Generate implementation roadmap

**Analysis:**
• validate                - Validate code patterns
• help                    - Show this help

**Examples:**
• search jwt
• area 1
• search react
"""
        print(help_text)
    
    def display_search_results(self, query: str, results: Dict[str, List]):
        """Display search results in a formatted way"""
        print(f"\n🔍 **SEARCH RESULTS FOR: '{query}'**\n")
        
        if results['recommended_areas']:
            print("🎯 **RECOMMENDED AREAS:**")
            for area_num, score, title in results['recommended_areas']:
                print(f"  Area {area_num}: {title} (Relevance: {score})")
            print()
        
        if results['code_matches']:
            print("💻 **CODE MATCHES:**")
            for code_block in results['code_matches'][:3]:  # Show first 3
                print(f"  Line {code_block.line_start}: {code_block.language} ({code_block.context[:50]}...)")
            print()
    
    def show_area_details(self, area_num: int):
        """Show detailed information about a development area"""
        area = self.development_areas.get(area_num)
        
        if not area:
            print(f"Area {area_num} not found. Available areas: {list(self.development_areas.keys())}")
            return
        
        print(f"""
🚀 **DEVELOPMENT AREA {area_num}: {area.title}**

📋 **PRD ALIGNMENT:**
{area.prd_alignment}

✅ **CURRENT STATE:**
{area.current_state}

🎯 **EXPEDITED OPPORTUNITY:**
{area.expedited_opportunity}

🔧 **CRITICAL IMPLEMENTATION:**
{area.critical_implementation}

💻 **CODE EXAMPLES:** {len(area.code_examples)} blocks available
🔑 **KEYWORDS:** {', '.join(area.keywords)}
""")
    
    def list_all_areas(self):
        """List all development areas"""
        print("\n📋 **ALL DEVELOPMENT AREAS:**\n")
        for area_num, area in self.development_areas.items():
            print(f"{area_num}. {area.title}")
            print(f"   PRD: {area.prd_alignment[:80]}...")
            print(f"   Keywords: {', '.join(list(area.keywords)[:5])}")
            print()

def main():
    """Main CLI interface"""
    parser = argparse.ArgumentParser(description='Interactive Development Guide for Sigma Playground')
    parser.add_argument('mode', nargs='?', default='interactive', 
                       choices=['interactive', 'search', 'roadmap', 'status', 'validate'],
                       help='Mode to run the guide in')
    parser.add_argument('--query', '-q', help='Search query for search mode')
    parser.add_argument('--doc', '-d', default='Expedited_Development_Areas.md',
                       help='Path to the development areas document')
    
    args = parser.parse_args()
    
    guide = InteractiveDevelopmentGuide(args.doc)
    
    if args.mode == 'interactive':
        guide.interactive_mode()
    
    elif args.mode == 'search':
        if not args.query:
            print("Please provide a search query with --query")
            return
        results = guide.smart_search(args.query)
        guide.display_search_results(args.query, results)
    
    elif args.mode == 'roadmap':
        print(guide.generate_roadmap())
    
    elif args.mode == 'status':
        print(guide.get_development_status())
    
    elif args.mode == 'validate':
        results = guide.validate_code_patterns()
        print("🔍 **CODE VALIDATION RESULTS**")
        print(f"✅ Valid: {len(results['valid'])}")
        print(f"⚠️  Warnings: {len(results['warnings'])}")
        print(f"❌ Errors: {len(results['errors'])}")

if __name__ == "__main__":
    main()
