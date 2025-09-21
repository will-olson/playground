#!/usr/bin/env python3
"""
Strategic Guide Script for Expedited Development Areas
=====================================================

This script provides intelligent parsing and reference capabilities for the 
Expedited_Development_Areas.md document, enabling efficient navigation and 
development guidance based on keywords and context.

Usage:
    python expedited_dev_guide.py [command] [options]
    
Commands:
    search <keyword>     - Search for specific topics or technologies
    area <number>        - Get detailed info about a specific development area
    priority            - Show implementation priorities and timeline
    patterns            - Show ready-to-use code patterns
    status              - Show current development status
    next                - Show immediate next steps
    metrics             - Show success metrics
    help                - Show this help message

Examples:
    python expedited_dev_guide.py search "JWT"
    python expedited_dev_guide.py area 1
    python expedited_dev_guide.py priority
    python expedited_dev_guide.py patterns
"""

import re
import sys
import json
from typing import Dict, List, Tuple, Optional
from dataclasses import dataclass
from pathlib import Path

@dataclass
class DevelopmentArea:
    """Represents a development area with its key components"""
    number: int
    title: str
    prd_alignment: str
    current_state: str
    expedited_opportunity: str
    critical_implementation: str
    code_examples: List[str]
    start_line: int
    end_line: int

@dataclass
class CodePattern:
    """Represents a ready-to-use code pattern"""
    name: str
    description: str
    code: str
    line_number: int

class ExpeditedDevelopmentGuide:
    """Main class for parsing and navigating the Expedited Development Areas document"""
    
    def __init__(self, doc_path: str = "Expedited_Development_Areas.md"):
        self.doc_path = Path(doc_path)
        self.content = ""
        self.development_areas: Dict[int, DevelopmentArea] = {}
        self.code_patterns: List[CodePattern] = []
        self.sections: Dict[str, Tuple[int, int]] = {}
        
        if self.doc_path.exists():
            self.load_document()
            self.parse_structure()
        else:
            print(f"Error: Document {doc_path} not found!")
            sys.exit(1)
    
    def load_document(self):
        """Load the document content"""
        with open(self.doc_path, 'r', encoding='utf-8') as f:
            self.content = f.read()
        print(f"✅ Loaded document: {len(self.content)} characters, {len(self.content.splitlines())} lines")
    
    def parse_structure(self):
        """Parse the document structure and extract key sections"""
        lines = self.content.splitlines()
        
        # Find main sections
        current_area = None
        current_code_pattern = None
        
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
                    start_line=line_num,
                    end_line=0
                )
            
            # Parse key subsections
            if current_area:
                if line.startswith('### **PRD Alignment**'):
                    current_area.prd_alignment = self._extract_section_content(lines, i)
                elif line.startswith('### **Current State**'):
                    current_area.current_state = self._extract_section_content(lines, i)
                elif line.startswith('### **Expedited Opportunity**'):
                    current_area.expedited_opportunity = self._extract_section_content(lines, i)
                elif line.startswith('### **🚀 Critical Implementation'):
                    current_area.critical_implementation = self._extract_section_content(lines, i)
            
            # Parse code patterns
            if line.startswith('### **📋 Ready-to-Use Code Patterns**'):
                self.sections['code_patterns'] = (line_num, self._find_section_end(lines, i))
            elif line.startswith('### **🎯 Immediate Next Steps**'):
                self.sections['next_steps'] = (line_num, self._find_section_end(lines, i))
            elif line.startswith('## **🚀 Implementation Priority**'):
                self.sections['implementation_priority'] = (line_num, self._find_section_end(lines, i))
            elif line.startswith('## **🎯 Success Metrics**'):
                self.sections['success_metrics'] = (line_num, self._find_section_end(lines, i))
        
        # Close the last area
        if current_area:
            current_area.end_line = len(lines)
            self.development_areas[current_area.number] = current_area
        
        print(f"✅ Parsed {len(self.development_areas)} development areas")
    
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
    
    def _find_section_end(self, lines: List[str], start_idx: int) -> int:
        """Find the end of a section"""
        for i in range(start_idx + 1, len(lines)):
            if lines[i].startswith('##') and not lines[i].startswith('###'):
                return i
        return len(lines)
    
    def search(self, keyword: str) -> Dict[str, List[Tuple[int, str]]]:
        """Search for a keyword across the document"""
        keyword_lower = keyword.lower()
        results = {
            'development_areas': [],
            'code_patterns': [],
            'general_content': []
        }
        
        lines = self.content.splitlines()
        
        for i, line in enumerate(lines):
            line_num = i + 1
            line_lower = line.lower()
            
            if keyword_lower in line_lower:
                # Check if it's in a development area
                for area_num, area in self.development_areas.items():
                    if area.start_line <= line_num <= area.end_line:
                        results['development_areas'].append((area_num, line.strip()))
                        break
                else:
                    results['general_content'].append((line_num, line.strip()))
        
        return results
    
    def get_area_details(self, area_number: int) -> Optional[DevelopmentArea]:
        """Get detailed information about a specific development area"""
        return self.development_areas.get(area_number)
    
    def get_implementation_priority(self) -> str:
        """Get implementation priority and timeline"""
        if 'implementation_priority' not in self.sections:
            return "Implementation priority section not found"
        
        start_line, end_line = self.sections['implementation_priority']
        lines = self.content.splitlines()
        return '\n'.join(lines[start_line-1:end_line])
    
    def get_success_metrics(self) -> str:
        """Get success metrics"""
        if 'success_metrics' not in self.sections:
            return "Success metrics section not found"
        
        start_line, end_line = self.sections['success_metrics']
        lines = self.content.splitlines()
        return '\n'.join(lines[start_line-1:end_line])
    
    def get_next_steps(self) -> str:
        """Get immediate next steps"""
        if 'next_steps' not in self.sections:
            return "Next steps section not found"
        
        start_line, end_line = self.sections['next_steps']
        lines = self.content.splitlines()
        return '\n'.join(lines[start_line-1:end_line])
    
    def get_code_patterns(self) -> str:
        """Get ready-to-use code patterns"""
        if 'code_patterns' not in self.sections:
            return "Code patterns section not found"
        
        start_line, end_line = self.sections['code_patterns']
        lines = self.content.splitlines()
        return '\n'.join(lines[start_line-1:end_line])
    
    def get_current_status(self) -> str:
        """Get current development status across all areas"""
        status = "🎯 **CURRENT DEVELOPMENT STATUS**\n\n"
        
        for area_num in sorted(self.development_areas.keys()):
            area = self.development_areas[area_num]
            status += f"**{area_num}. {area.title}**\n"
            status += f"Status: {area.current_state}\n"
            status += f"PRD Alignment: {area.prd_alignment}\n\n"
        
        return status
    
    def get_keywords_reference(self) -> Dict[str, List[str]]:
        """Get a reference of important keywords and their contexts"""
        keywords = {
            'JWT': ['authentication', 'embed', 'user management', 'security'],
            'React SDK': ['embedding', 'workbook', 'interaction'],
            'Sigma API': ['workbook fetching', 'metadata', 'user management'],
            'debug-embed': ['testing', 'debugging', 'validation'],
            'workbook': ['embedding', 'discovery', 'management', 'sharing'],
            'user management': ['access control', 'profiles', 'authentication'],
            'admin dashboard': ['management', 'curation', 'monitoring'],
            'sharing': ['embedding', 'community', 'public access'],
            'error handling': ['debugging', 'monitoring', 'reliability']
        }
        
        return keywords

def main():
    """Main CLI interface"""
    if len(sys.argv) < 2:
        print(__doc__)
        return
    
    command = sys.argv[1].lower()
    guide = ExpeditedDevelopmentGuide()
    
    if command == 'search':
        if len(sys.argv) < 3:
            print("Usage: python expedited_dev_guide.py search <keyword>")
            return
        
        keyword = sys.argv[2]
        results = guide.search(keyword)
        
        print(f"\n🔍 **SEARCH RESULTS FOR: '{keyword}'**\n")
        
        if results['development_areas']:
            print("**📋 DEVELOPMENT AREAS:**")
            for area_num, line in results['development_areas']:
                print(f"  Area {area_num}: {line}")
            print()
        
        if results['general_content']:
            print("**📄 GENERAL CONTENT:**")
            for line_num, line in results['general_content'][:10]:  # Limit to first 10
                print(f"  Line {line_num}: {line}")
            if len(results['general_content']) > 10:
                print(f"  ... and {len(results['general_content']) - 10} more results")
    
    elif command == 'area':
        if len(sys.argv) < 3:
            print("Usage: python expedited_dev_guide.py area <number>")
            print("Available areas:", list(guide.development_areas.keys()))
            return
        
        try:
            area_num = int(sys.argv[2])
            area = guide.get_area_details(area_num)
            
            if area:
                print(f"\n🚀 **DEVELOPMENT AREA {area_num}: {area.title}**\n")
                print(f"**PRD Alignment:** {area.prd_alignment}\n")
                print(f"**Current State:** {area.current_state}\n")
                print(f"**Expedited Opportunity:** {area.expedited_opportunity}\n")
                print(f"**Critical Implementation:** {area.critical_implementation}\n")
            else:
                print(f"Area {area_num} not found. Available areas: {list(guide.development_areas.keys())}")
        except ValueError:
            print("Please provide a valid area number")
    
    elif command == 'priority':
        print("\n🚀 **IMPLEMENTATION PRIORITY & TIMELINE**\n")
        print(guide.get_implementation_priority())
    
    elif command == 'patterns':
        print("\n📋 **READY-TO-USE CODE PATTERNS**\n")
        print(guide.get_code_patterns())
    
    elif command == 'status':
        print(guide.get_current_status())
    
    elif command == 'next':
        print("\n🎯 **IMMEDIATE NEXT STEPS**\n")
        print(guide.get_next_steps())
    
    elif command == 'metrics':
        print("\n🎯 **SUCCESS METRICS**\n")
        print(guide.get_success_metrics())
    
    elif command == 'keywords':
        print("\n🔑 **KEYWORD REFERENCE**\n")
        keywords = guide.get_keywords_reference()
        for keyword, contexts in keywords.items():
            print(f"**{keyword}:** {', '.join(contexts)}")
    
    elif command == 'help':
        print(__doc__)
    
    else:
        print(f"Unknown command: {command}")
        print("Use 'help' to see available commands")

if __name__ == "__main__":
    main()
