#!/usr/bin/env python3
"""
Document Splitter and Analyzer for Expedited Development Areas
=============================================================

This script splits the large Expedited_Development_Areas.md document into
manageable sections and analyzes each section to improve the development guides.
"""

import re
from pathlib import Path
from typing import Dict, List, Tuple
from dataclasses import dataclass

@dataclass
class DocumentSection:
    """Represents a section of the document"""
    section_id: int
    title: str
    start_line: int
    end_line: int
    content: str
    line_count: int
    code_blocks: List[Dict]
    key_patterns: List[str]
    implementation_steps: List[str]

class DocumentSplitter:
    """Splits and analyzes the Expedited Development Areas document"""
    
    def __init__(self, doc_path: str = "Expedited_Development_Areas.md"):
        self.doc_path = Path(doc_path)
        self.sections: List[DocumentSection] = []
        self.content_lines: List[str] = []
        
        # Section boundaries based on the grep output
        self.section_boundaries = {
            1: (21, 193),      # Area 1: Advanced Workbook Interaction
            2: (194, 375),     # Area 2: User Management & Access Control
            3: (376, 613),     # Area 3: Dynamic Workbook Discovery
            4: (614, 1023),    # Area 4: Advanced Embedding & Sharing
            5: (1024, 1597),   # Area 5: Interactive Dashboard & Admin
            6: (1598, 1749),   # Area 6: Error Handling & Debugging
            7: (1750, 1947),   # Area 7: Advanced Filtering
            8: (1948, 2175),   # Area 8: Workbook Management
            9: (2176, 2392),   # Area 9: Security & Access Control
            10: (2393, 2663),  # Area 10: Analytics & Performance
            11: (2664, 2687),  # Area 11: Repository Integration
            12: (2688, 2834),  # Area 12: SQL Analysis
            13: (2835, 3148),  # Area 13: CSS-in-JS with Stitches
            14: (3149, 3451),  # Area 14: Screenshot Generation
            15: (3452, 3621),  # Area 15: Apache Arrow
            16: (3622, 3881),  # Area 16: Metrics Collection
            17: (3882, 4088),  # Area 17: Internationalization
            18: (4089, 4551),  # Area 18: Snowflake Integration
            19: (4552, 4785),  # Area 19: Trino Integration
            20: (4786, 5066),  # Area 20: Google Cloud Platform
            21: (5067, 5482),  # Area 21: Visualization Editor
            22: (5483, 5956),  # Area 22: gRPC Microservices
            23: (5957, 6194),  # Area 23: Databricks SQL
            24: (6195, 8272),  # Area 24: Bundle Optimization
        }
    
    def load_document(self):
        """Load the document content"""
        with open(self.doc_path, 'r', encoding='utf-8') as f:
            self.content_lines = f.readlines()
        
        print(f"✅ Loaded document: {len(self.content_lines)} lines")
    
    def split_document(self):
        """Split document into manageable sections"""
        for section_id, (start_line, end_line) in self.section_boundaries.items():
            # Adjust to 0-based indexing
            start_idx = start_line - 1
            end_idx = end_line - 1
            
            # Extract content
            section_content = ''.join(self.content_lines[start_idx:end_idx])
            
            # Extract title
            title_match = re.search(r'^## \*\*(\d+)\. (.+?)\*\*', section_content, re.MULTILINE)
            title = title_match.group(2) if title_match else f"Section {section_id}"
            
            # Analyze the section
            code_blocks = self._extract_code_blocks(section_content)
            key_patterns = self._extract_key_patterns(section_content)
            implementation_steps = self._extract_implementation_steps(section_content)
            
            section = DocumentSection(
                section_id=section_id,
                title=title,
                start_line=start_line,
                end_line=end_line,
                content=section_content,
                line_count=len(section_content.splitlines()),
                code_blocks=code_blocks,
                key_patterns=key_patterns,
                implementation_steps=implementation_steps
            )
            
            self.sections.append(section)
            
            # Save individual section files
            self._save_section_file(section)
        
        print(f"✅ Split document into {len(self.sections)} sections")
    
    def _extract_code_blocks(self, content: str) -> List[Dict]:
        """Extract code blocks from section content"""
        code_blocks = []
        
        # Find all code blocks
        code_pattern = r'```(\w+)?\n(.*?)```'
        matches = re.finditer(code_pattern, content, re.DOTALL)
        
        for match in matches:
            language = match.group(1) or 'text'
            code_content = match.group(2).strip()
            
            code_blocks.append({
                'language': language,
                'content': code_content,
                'lines': len(code_content.splitlines())
            })
        
        return code_blocks
    
    def _extract_key_patterns(self, content: str) -> List[str]:
        """Extract key patterns and concepts from section content"""
        patterns = []
        
        # Look for specific patterns
        pattern_regexes = [
            r'### \*\*PRD Alignment\*\*: (.+)',
            r'### \*\*Current State\*\*: (.+)',
            r'### \*\*Expedited Opportunity\*\*: (.+)',
            r'### \*\*🚀 Critical Implementation.*?\*\*: (.+)',
            r'\*\*([A-Z][^*]+)\*\*: (.+)',
            r'```(\w+)\n(.*?)```',
        ]
        
        for regex in pattern_regexes:
            matches = re.findall(regex, content, re.DOTALL)
            for match in matches:
                if isinstance(match, tuple):
                    patterns.append(f"{match[0]}: {match[1][:100]}...")
                else:
                    patterns.append(match[:100] + "..." if len(match) > 100 else match)
        
        return patterns[:10]  # Limit to top 10 patterns
    
    def _extract_implementation_steps(self, content: str) -> List[str]:
        """Extract implementation steps from section content"""
        steps = []
        
        # Look for numbered lists and bullet points
        step_patterns = [
            r'^\d+\.\s+(.+)$',
            r'^- (.+)$',
            r'^\*\*(\d+\.\s*.+?)\*\*',
        ]
        
        for pattern in step_patterns:
            matches = re.findall(pattern, content, re.MULTILINE)
            for match in matches:
                if len(match) > 20 and len(match) < 200:  # Reasonable length
                    steps.append(match.strip())
        
        return steps[:5]  # Limit to top 5 steps
    
    def _save_section_file(self, section: DocumentSection):
        """Save individual section to file"""
        filename = f"section_{section.section_id:02d}_{section.title.replace(' ', '_').replace('🚀', '').replace('📊', '').replace('🎨', '').replace('🔗', '').replace('🎛️', '').replace('🔧', '').replace('📋', '').replace('🔐', '').replace('📸', '').replace('🌍', '').replace('🗄️', '').replace('☁️', '').replace('📦', '').replace('🚀', '').strip()}.md"
        
        # Clean filename
        filename = re.sub(r'[^\w\-_\.]', '', filename)
        
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(f"# Section {section.section_id}: {section.title}\n\n")
            f.write(f"**Lines:** {section.start_line}-{section.end_line} ({section.line_count} lines)\n\n")
            f.write(f"**Code Blocks:** {len(section.code_blocks)}\n\n")
            f.write(f"**Key Patterns:** {len(section.key_patterns)}\n\n")
            f.write(f"**Implementation Steps:** {len(section.implementation_steps)}\n\n")
            f.write("---\n\n")
            f.write(section.content)
        
        print(f"✅ Saved {filename}")
    
    def analyze_sections(self):
        """Analyze all sections and generate insights"""
        print("\n" + "="*80)
        print("📊 **SECTION ANALYSIS SUMMARY**")
        print("="*80)
        
        total_code_blocks = 0
        total_patterns = 0
        total_steps = 0
        
        for section in self.sections:
            print(f"\n**Section {section.section_id}: {section.title}**")
            print(f"  Lines: {section.line_count}")
            print(f"  Code Blocks: {len(section.code_blocks)}")
            print(f"  Key Patterns: {len(section.key_patterns)}")
            print(f"  Implementation Steps: {len(section.implementation_steps)}")
            
            total_code_blocks += len(section.code_blocks)
            total_patterns += len(section.key_patterns)
            total_steps += len(section.implementation_steps)
            
            # Show top patterns
            if section.key_patterns:
                print(f"  Top Patterns: {section.key_patterns[0]}")
        
        print(f"\n**TOTAL STATISTICS:**")
        print(f"  Total Code Blocks: {total_code_blocks}")
        print(f"  Total Key Patterns: {total_patterns}")
        print(f"  Total Implementation Steps: {total_steps}")
        
        # Identify sections that need special attention
        print(f"\n**SECTIONS NEEDING ATTENTION:**")
        for section in self.sections:
            if section.line_count > 1000:
                print(f"  ⚠️  Section {section.section_id}: {section.line_count} lines (too large)")
            if len(section.code_blocks) > 10:
                print(f"  💻 Section {section.section_id}: {len(section.code_blocks)} code blocks (complex)")
            if len(section.implementation_steps) > 5:
                print(f"  📋 Section {section.section_id}: {len(section.implementation_steps)} implementation steps (detailed)")

def main():
    """Main execution function"""
    print("🚀 **EXPEDITED DEVELOPMENT AREAS DOCUMENT SPLITTER**")
    print("="*60)
    
    splitter = DocumentSplitter()
    splitter.load_document()
    splitter.split_document()
    splitter.analyze_sections()
    
    print(f"\n✅ **SPLITTING COMPLETE**")
    print("Individual section files have been created for detailed analysis.")

if __name__ == "__main__":
    main()
