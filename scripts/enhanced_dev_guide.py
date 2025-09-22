#!/usr/bin/env python3
"""
Enhanced Development Guide for Expedited Development Areas
========================================================

An advanced version that incorporates learnings from detailed section analysis,
providing better pattern recognition, breakthrough identification, and 
implementation guidance based on the actual document structure.

Key Improvements:
- Breakthrough section identification
- JWT configuration pattern extraction
- PRD phase mapping with priority scoring
- Debug-embed pattern replication guidance
- Code example categorization and validation
"""

import re
import sys
import json
import argparse
from typing import Dict, List, Tuple, Optional, Set
from dataclasses import dataclass, asdict
from pathlib import Path
from datetime import datetime
from enum import Enum

class PriorityLevel(Enum):
    HIGH = "high"
    MEDIUM = "medium"
    LOW = "low"

class BreakthroughStatus(Enum):
    BREAKTHROUGH = "breakthrough"
    WORKING = "working"
    PARTIAL = "partial"
    PLANNED = "planned"

@dataclass
class JWTConfiguration:
    """Represents a JWT configuration pattern"""
    isEmbedUser: Optional[bool]
    sessionLength: Optional[int]
    accountType: Optional[str]
    teams: Optional[List[str]]
    audience: Optional[str]
    version: Optional[str]
    context: str
    line_number: int

@dataclass
class BreakthroughPattern:
    """Represents a breakthrough implementation pattern"""
    area_id: int
    title: str
    working_pattern: str
    critical_factors: List[str]
    replication_priority: PriorityLevel
    code_examples: List[str]
    debug_embed_applicable: bool

@dataclass
class EnhancedDevelopmentArea:
    """Enhanced development area with breakthrough analysis"""
    number: int
    title: str
    prd_alignment: str
    current_state: str
    expedited_opportunity: str
    critical_implementation: str
    breakthrough_status: BreakthroughStatus
    jwt_patterns: List[JWTConfiguration]
    breakthrough_patterns: List[BreakthroughPattern]
    debug_embed_applicable: bool
    implementation_priority: PriorityLevel
    estimated_complexity: str
    code_blocks: List[Dict]
    start_line: int
    end_line: int

class EnhancedDevelopmentGuide:
    """Enhanced guide with breakthrough pattern recognition and JWT analysis"""
    
    def __init__(self, doc_path: str = "Expedited_Development_Areas.md"):
        self.doc_path = Path(doc_path)
        self.content = ""
        self.development_areas: Dict[int, EnhancedDevelopmentArea] = {}
        self.breakthrough_areas: List[EnhancedDevelopmentArea] = []
        self.jwt_patterns: List[JWTConfiguration] = []
        self.debug_embed_patterns: List[BreakthroughPattern] = []
        
        # Enhanced keyword mapping based on section analysis
        self.tech_keywords = {
            'jwt': ['authentication', 'security', 'embed', 'user', 'isEmbedUser', 'sessionLength'],
            'debug-embed': ['debug', 'embed', 'testing', 'validation', 'breakthrough'],
            'react': ['frontend', 'ui', 'component', 'sdk', 'typescript'],
            'api': ['backend', 'integration', 'data', 'workbook', 'sigma'],
            'breakthrough': ['working', 'success', 'proven', 'critical', 'key'],
            'user_management': ['user', 'profile', 'account', 'authentication', 'access'],
            'workbook': ['embedding', 'discovery', 'management', 'sharing', 'interaction'],
            'admin': ['management', 'dashboard', 'curation', 'monitoring'],
            'sharing': ['community', 'public', 'embed', 'export', 'secure'],
            'error_handling': ['debugging', 'monitoring', 'reliability', 'validation']
        }
        
        if self.doc_path.exists():
            self.load_document()
            self.parse_enhanced_structure()
            self.analyze_breakthroughs()
            self.extract_jwt_patterns()
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
        """Enhanced parsing with breakthrough and JWT pattern detection"""
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
                
                current_area = EnhancedDevelopmentArea(
                    number=int(area_match.group(1)),
                    title=area_match.group(2),
                    prd_alignment="",
                    current_state="",
                    expedited_opportunity="",
                    critical_implementation="",
                    breakthrough_status=BreakthroughStatus.PLANNED,
                    jwt_patterns=[],
                    breakthrough_patterns=[],
                    debug_embed_applicable=False,
                    implementation_priority=PriorityLevel.MEDIUM,
                    estimated_complexity="medium",
                    code_blocks=[],
                    start_line=line_num,
                    end_line=0
                )
            
            # Extract code blocks with enhanced context
            if line.startswith('```'):
                if in_code_block and current_code_block:
                    # End of code block
                    current_code_block['line_end'] = line_num - 1
                    current_code_block['content'] = '\n'.join(
                        lines[current_code_block['line_start']:current_code_block['line_end']]
                    )
                    current_code_block['context'] = self._get_enhanced_context(lines, current_code_block['line_start'] - 1)
                    
                    if current_area:
                        current_area.code_blocks.append(current_code_block)
                    
                    current_code_block = None
                    in_code_block = False
                else:
                    # Start of code block
                    language = line[3:].strip()
                    current_code_block = {
                        'language': language,
                        'content': "",
                        'line_start': line_num + 1,
                        'line_end': 0,
                        'context': "",
                        'jwt_related': False,
                        'breakthrough_related': False
                    }
                    in_code_block = True
            
            # Parse key subsections with enhanced analysis
            if current_area:
                if line.startswith('### **PRD Alignment**'):
                    current_area.prd_alignment = self._extract_section_content(lines, i)
                    current_area.implementation_priority = self._determine_priority(current_area.prd_alignment)
                elif line.startswith('### **Current State**'):
                    current_area.current_state = self._extract_section_content(lines, i)
                    current_area.breakthrough_status = self._analyze_breakthrough_status(current_area.current_state)
                elif line.startswith('### **Expedited Opportunity**'):
                    current_area.expedited_opportunity = self._extract_section_content(lines, i)
                elif line.startswith('### **🚀 Critical Implementation'):
                    current_area.critical_implementation = self._extract_section_content(lines, i)
        
        # Close the last area
        if current_area:
            current_area.end_line = len(lines)
            self.development_areas[current_area.number] = current_area
        
        print(f"✅ Parsed {len(self.development_areas)} development areas")
    
    def _get_enhanced_context(self, lines: List[str], current_line: int) -> str:
        """Get enhanced context around a code block"""
        context_lines = []
        
        # Look back up to 10 lines for better context
        for i in range(max(0, current_line - 10), current_line):
            if lines[i].strip() and not lines[i].startswith('```'):
                context_lines.append(lines[i].strip())
        
        return ' '.join(context_lines[-5:])  # Last 5 context lines
    
    def _determine_priority(self, prd_alignment: str) -> PriorityLevel:
        """Determine implementation priority from PRD alignment"""
        prd_lower = prd_alignment.lower()
        
        if 'phase 1 mvp' in prd_lower:
            return PriorityLevel.HIGH
        elif 'phase 2' in prd_lower:
            return PriorityLevel.MEDIUM
        elif 'phase 3' in prd_lower:
            return PriorityLevel.LOW
        else:
            return PriorityLevel.MEDIUM
    
    def _analyze_breakthrough_status(self, current_state: str) -> BreakthroughStatus:
        """Analyze breakthrough status from current state"""
        state_lower = current_state.lower()
        
        if 'breakthrough' in state_lower and 'working' in state_lower:
            return BreakthroughStatus.BREAKTHROUGH
        elif 'working' in state_lower or 'success' in state_lower:
            return BreakthroughStatus.WORKING
        elif 'partial' in state_lower or 'some' in state_lower:
            return BreakthroughStatus.PARTIAL
        else:
            return BreakthroughStatus.PLANNED
    
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
    
    def analyze_breakthroughs(self):
        """Analyze and identify breakthrough areas"""
        for area_num, area in self.development_areas.items():
            if area.breakthrough_status in [BreakthroughStatus.BREAKTHROUGH, BreakthroughStatus.WORKING]:
                self.breakthrough_areas.append(area)
                
                # Check if debug-embed patterns are applicable
                if 'debug-embed' in area.current_state.lower() or 'jwt' in area.current_state.lower():
                    area.debug_embed_applicable = True
                    self.debug_embed_patterns.append(BreakthroughPattern(
                        area_id=area_num,
                        title=area.title,
                        working_pattern=area.current_state,
                        critical_factors=self._extract_critical_factors(area),
                        replication_priority=area.implementation_priority,
                        code_examples=[block['content'] for block in area.code_blocks],
                        debug_embed_applicable=True
                    ))
        
        print(f"✅ Identified {len(self.breakthrough_areas)} breakthrough areas")
        print(f"✅ Found {len(self.debug_embed_patterns)} debug-embed applicable patterns")
    
    def _extract_critical_factors(self, area: EnhancedDevelopmentArea) -> List[str]:
        """Extract critical success factors from area"""
        factors = []
        
        # Look for bullet points with critical information
        critical_patterns = [
            r'- \*\*([^*]+)\*\*: (.+)',
            r'✅ (.+)',
            r'🔑 (.+)',
            r'🚀 (.+)',
        ]
        
        content = area.current_state + area.critical_implementation
        for pattern in critical_patterns:
            matches = re.findall(pattern, content)
            for match in matches:
                if isinstance(match, tuple):
                    factors.append(f"{match[0]}: {match[1]}")
                else:
                    factors.append(match)
        
        return factors[:5]  # Limit to top 5 factors
    
    def extract_jwt_patterns(self):
        """Extract and analyze JWT configuration patterns"""
        for area_num, area in self.development_areas.items():
            for code_block in area.code_blocks:
                if code_block['language'] in ['typescript', 'javascript', 'ts', 'js']:
                    jwt_configs = self._find_jwt_configs(code_block)
                    self.jwt_patterns.extend(jwt_configs)
                    area.jwt_patterns.extend(jwt_configs)
        
        print(f"✅ Extracted {len(self.jwt_patterns)} JWT configuration patterns")
    
    def _find_jwt_configs(self, code_block: Dict) -> List[JWTConfiguration]:
        """Find JWT configurations in code blocks"""
        jwt_configs = []
        content = code_block['content']
        
        # Look for JWT configuration patterns
        jwt_patterns = [
            r'jwtOptions:\s*\{([^}]+)\}',
            r'isEmbedUser:\s*(true|false)',
            r'sessionLength:\s*(\d+)',
            r'accountType:\s*[\'"]([^\'"]+)[\'"]',
            r'teams:\s*\[([^\]]+)\]',
            r'aud:\s*[\'"]([^\'"]+)[\'"]',
            r'ver:\s*[\'"]([^\'"]+)[\'"]',
        ]
        
        for pattern in jwt_patterns:
            matches = re.finditer(pattern, content, re.MULTILINE | re.DOTALL)
            for match in matches:
                jwt_config = JWTConfiguration(
                    isEmbedUser=self._extract_bool_value(content, 'isEmbedUser'),
                    sessionLength=self._extract_int_value(content, 'sessionLength'),
                    accountType=self._extract_string_value(content, 'accountType'),
                    teams=self._extract_array_value(content, 'teams'),
                    audience=self._extract_string_value(content, 'aud'),
                    version=self._extract_string_value(content, 'ver'),
                    context=code_block['context'],
                    line_number=code_block['line_start'] + match.start()
                )
                jwt_configs.append(jwt_config)
        
        return jwt_configs
    
    def _extract_bool_value(self, content: str, key: str) -> Optional[bool]:
        """Extract boolean value for a key"""
        pattern = rf'{key}:\s*(true|false)'
        match = re.search(pattern, content)
        return bool(match.group(1) == 'true') if match else None
    
    def _extract_int_value(self, content: str, key: str) -> Optional[int]:
        """Extract integer value for a key"""
        pattern = rf'{key}:\s*(\d+)'
        match = re.search(pattern, content)
        return int(match.group(1)) if match else None
    
    def _extract_string_value(self, content: str, key: str) -> Optional[str]:
        """Extract string value for a key"""
        pattern = rf'{key}:\s*[\'"]([^\'"]+)[\'"]'
        match = re.search(pattern, content)
        return match.group(1) if match else None
    
    def _extract_array_value(self, content: str, key: str) -> Optional[List[str]]:
        """Extract array value for a key"""
        pattern = rf'{key}:\s*\[([^\]]+)\]'
        match = re.search(pattern, content)
        if match:
            # Simple array parsing - could be enhanced
            items = match.group(1).split(',')
            return [item.strip().strip('\'"') for item in items if item.strip()]
        return None
    
    def get_breakthrough_analysis(self) -> str:
        """Get comprehensive breakthrough analysis"""
        analysis = f"""
🎯 **BREAKTHROUGH ANALYSIS**
Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}

🚀 **BREAKTHROUGH AREAS** ({len(self.breakthrough_areas)} total)
"""
        
        for area in self.breakthrough_areas:
            status_emoji = {
                BreakthroughStatus.BREAKTHROUGH: "🔥",
                BreakthroughStatus.WORKING: "✅",
                BreakthroughStatus.PARTIAL: "🔄",
                BreakthroughStatus.PLANNED: "📋"
            }
            
            analysis += f"""
**{status_emoji[area.breakthrough_status]} Area {area.number}: {area.title}**
• Status: {area.breakthrough_status.value.upper()}
• Priority: {area.implementation_priority.value.upper()}
• Debug-Embed Applicable: {'✅' if area.debug_embed_applicable else '❌'}
• JWT Patterns: {len(area.jwt_patterns)}
• Code Blocks: {len(area.code_blocks)}
"""
        
        analysis += f"""

🔑 **CRITICAL SUCCESS FACTORS**
"""
        
        for pattern in self.debug_embed_patterns:
            analysis += f"""
**{pattern.title}**
• Priority: {pattern.replication_priority.value.upper()}
• Critical Factors: {', '.join(pattern.critical_factors[:3])}
"""
        
        return analysis
    
    def get_jwt_analysis(self) -> str:
        """Get comprehensive JWT configuration analysis"""
        analysis = f"""
🔐 **JWT CONFIGURATION ANALYSIS**
Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}

📊 **JWT PATTERNS FOUND** ({len(self.jwt_patterns)} total)
"""
        
        # Group by configuration type
        embed_user_configs = [jwt for jwt in self.jwt_patterns if jwt.isEmbedUser is not None]
        session_configs = [jwt for jwt in self.jwt_patterns if jwt.sessionLength is not None]
        
        analysis += f"""
**Configuration Types:**
• isEmbedUser patterns: {len(embed_user_configs)}
• sessionLength patterns: {len(session_configs)}
"""
        
        # Show working patterns
        working_patterns = [jwt for jwt in self.jwt_patterns if jwt.isEmbedUser == False]
        if working_patterns:
            analysis += f"""
✅ **WORKING PATTERNS** (isEmbedUser: false)
"""
            for jwt in working_patterns[:3]:  # Show first 3
                analysis += f"""
• Line {jwt.line_number}: {jwt.context[:100]}...
  - Session Length: {jwt.sessionLength}
  - Account Type: {jwt.accountType}
"""
        
        return analysis
    
    def get_implementation_roadmap(self) -> str:
        """Get enhanced implementation roadmap with breakthrough focus"""
        roadmap = f"""
🗺️ **ENHANCED IMPLEMENTATION ROADMAP**
Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}

🔥 **PHASE 1: BREAKTHROUGH REPLICATION** (Week 1)
"""
        
        # Focus on breakthrough areas first
        breakthrough_areas = [area for area in self.breakthrough_areas if area.implementation_priority == PriorityLevel.HIGH]
        
        for area in breakthrough_areas:
            roadmap += f"""
**🚀 Area {area.number}: {area.title}**
• Status: {area.breakthrough_status.value.upper()}
• Strategy: Replicate debug-embed success pattern
• JWT Configs: {len(area.jwt_patterns)} patterns available
• Debug-Embed: {'✅ Applicable' if area.debug_embed_applicable else '❌ Not applicable'}
"""
        
        roadmap += f"""

📋 **PHASE 2: PATTERN EXTENSION** (Week 2-3)
"""
        
        # Medium priority areas that can use breakthrough patterns
        medium_areas = [area for area in self.development_areas.values() if area.implementation_priority == PriorityLevel.MEDIUM]
        
        for area in medium_areas[:5]:  # Top 5 medium priority
            roadmap += f"""
**Area {area.number}: {area.title}**
• Extend breakthrough patterns where applicable
• JWT Patterns: {len(area.jwt_patterns)}
"""
        
        return roadmap
    
    def smart_search_enhanced(self, query: str) -> Dict[str, List]:
        """Enhanced search with breakthrough and JWT pattern awareness"""
        query_lower = query.lower()
        results = {
            'breakthrough_matches': [],
            'jwt_matches': [],
            'debug_embed_matches': [],
            'code_matches': [],
            'recommended_areas': []
        }
        
        # Search breakthrough areas
        for area in self.breakthrough_areas:
            if any(keyword in query_lower for keyword in ['breakthrough', 'working', 'success', 'debug-embed']):
                if query_lower in area.title.lower() or query_lower in area.current_state.lower():
                    results['breakthrough_matches'].append(area)
        
        # Search JWT patterns
        if any(keyword in query_lower for keyword in ['jwt', 'authentication', 'isEmbedUser']):
            for jwt in self.jwt_patterns:
                if query_lower in jwt.context.lower():
                    results['jwt_matches'].append(jwt)
        
        # Search debug-embed patterns
        if 'debug-embed' in query_lower:
            for pattern in self.debug_embed_patterns:
                results['debug_embed_matches'].append(pattern)
        
        # Enhanced area scoring with breakthrough awareness
        area_scores = {}
        for area_num, area in self.development_areas.items():
            score = 0
            
            # Boost score for breakthrough areas
            if area.breakthrough_status in [BreakthroughStatus.BREAKTHROUGH, BreakthroughStatus.WORKING]:
                score += 10
            
            # Boost score for high priority
            if area.implementation_priority == PriorityLevel.HIGH:
                score += 5
            
            # Standard scoring
            if query_lower in area.title.lower():
                score += 8
            if query_lower in area.current_state.lower():
                score += 5
            if query_lower in area.prd_alignment.lower():
                score += 3
            
            if score > 0:
                area_scores[area_num] = score
        
        # Sort by score
        sorted_areas = sorted(area_scores.items(), key=lambda x: x[1], reverse=True)
        results['recommended_areas'] = [
            (area_num, score, self.development_areas[area_num])
            for area_num, score in sorted_areas[:5]
        ]
        
        return results

def main():
    """Main CLI interface"""
    parser = argparse.ArgumentParser(description='Enhanced Development Guide for Sigma Playground')
    parser.add_argument('command', nargs='?', default='help',
                       choices=['breakthrough', 'jwt', 'roadmap', 'search', 'status', 'help'],
                       help='Command to execute')
    parser.add_argument('--query', '-q', help='Search query for search command')
    parser.add_argument('--doc', '-d', default='Expedited_Development_Areas.md',
                       help='Path to the development areas document')
    
    args = parser.parse_args()
    
    guide = EnhancedDevelopmentGuide(args.doc)
    
    if args.command == 'breakthrough':
        print(guide.get_breakthrough_analysis())
    
    elif args.command == 'jwt':
        print(guide.get_jwt_analysis())
    
    elif args.command == 'roadmap':
        print(guide.get_implementation_roadmap())
    
    elif args.command == 'search':
        if not args.query:
            print("Please provide a search query with --query")
            return
        
        results = guide.smart_search_enhanced(args.query)
        
        print(f"\n🔍 **ENHANCED SEARCH RESULTS FOR: '{args.query}'**\n")
        
        if results['breakthrough_matches']:
            print("🔥 **BREAKTHROUGH MATCHES:**")
            for area in results['breakthrough_matches']:
                print(f"  Area {area.number}: {area.title} ({area.breakthrough_status.value})")
            print()
        
        if results['jwt_matches']:
            print("🔐 **JWT CONFIGURATION MATCHES:**")
            for jwt in results['jwt_matches'][:3]:
                print(f"  Line {jwt.line_number}: isEmbedUser={jwt.isEmbedUser}")
            print()
        
        if results['recommended_areas']:
            print("🎯 **RECOMMENDED AREAS:**")
            for area_num, score, area in results['recommended_areas']:
                print(f"  Area {area_num}: {area.title} (Score: {score}, Status: {area.breakthrough_status.value})")
            print()
    
    elif args.command == 'status':
        print(guide.get_breakthrough_analysis())
    
    elif args.command == 'help':
        print("""
🚀 **ENHANCED DEVELOPMENT GUIDE COMMANDS**

**Analysis Commands:**
• breakthrough    - Show breakthrough analysis and working patterns
• jwt            - Show JWT configuration analysis
• roadmap        - Show enhanced implementation roadmap
• status         - Show comprehensive development status

**Search Commands:**
• search --query <term>  - Enhanced search with breakthrough awareness

**Examples:**
• python enhanced_dev_guide.py breakthrough
• python enhanced_dev_guide.py jwt
• python enhanced_dev_guide.py search --query "debug-embed"
• python enhanced_dev_guide.py search --query "isEmbedUser"
""")

if __name__ == "__main__":
    main()
