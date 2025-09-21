'use client';

import { useState } from 'react';
import { BookOpenIcon, HeartIcon, EyeIcon, CalendarIcon } from '@heroicons/react/24/outline';
import { WorkbookCard } from '@/components/workbook-card';

// Mock data for demonstration
const mockWorkbooks = [
  {
    id: '1',
    title: 'Customer Churn Prediction Model',
    description: 'Advanced machine learning model to predict customer churn with 95% accuracy',
    sigma_embed_url: 'workbook/customer-churn/abc123',
    thumbnail_url: undefined,
    view_count: 868,
    favorite_count: 40,
    published_at: '2025-09-12',
    author: {
      id: '1',
      username: 'mike_johnson',
      full_name: 'Mike Johnson',
      profile_image_url: undefined
    },
    tags: [
      { tag: { id: 1, name: 'Product', color: '#3B82F6' } },
      { tag: { id: 2, name: 'Customer', color: '#10B981' } },
      { tag: { id: 3, name: 'ML', color: '#F59E0B' } }
    ]
  },
  {
    id: '2', 
    title: 'Product Usage Analytics',
    description: 'Comprehensive dashboard tracking product usage patterns and user engagement',
    sigma_embed_url: 'workbook/product-usage/def456',
    thumbnail_url: undefined,
    view_count: 1245,
    favorite_count: 67,
    published_at: '2025-09-10',
    author: {
      id: '2',
      username: 'john_doe',
      full_name: 'John Doe',
      profile_image_url: undefined
    },
    tags: [
      { tag: { id: 1, name: 'Product', color: '#3B82F6' } },
      { tag: { id: 4, name: 'Analytics', color: '#8B5CF6' } },
      { tag: { id: 5, name: 'Dashboard', color: '#06B6D4' } }
    ]
  },
  {
    id: '3',
    title: 'Q4 Sales Performance Dashboard',
    description: 'Real-time sales performance tracking with regional breakdowns and forecasting',
    sigma_embed_url: 'workbook/sales-q4/ghi789',
    thumbnail_url: undefined,
    view_count: 2341,
    favorite_count: 89,
    published_at: '2025-09-08',
    author: {
      id: '3',
      username: 'sarah_wilson',
      full_name: 'Sarah Wilson',
      profile_image_url: undefined
    },
    tags: [
      { tag: { id: 6, name: 'Sales', color: '#EF4444' } },
      { tag: { id: 5, name: 'Dashboard', color: '#06B6D4' } },
      { tag: { id: 7, name: 'Q4', color: '#84CC16' } }
    ]
  },
  {
    id: '4',
    title: 'Marketing Campaign ROI Analysis',
    description: 'Detailed analysis of marketing campaign effectiveness and return on investment',
    sigma_embed_url: 'workbook/marketing-roi/jkl012',
    thumbnail_url: undefined,
    view_count: 1567,
    favorite_count: 123,
    published_at: '2025-09-05',
    author: {
      id: '4',
      username: 'alex_chen',
      full_name: 'Alex Chen',
      profile_image_url: undefined
    },
    tags: [
      { tag: { id: 8, name: 'Marketing', color: '#EC4899' } },
      { tag: { id: 9, name: 'ROI', color: '#14B8A6' } },
      { tag: { id: 10, name: 'Campaign', color: '#F97316' } }
    ]
  }
];

export default function WorkbooksPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const [sortBy, setSortBy] = useState('recent');

  const tags = ['All', 'Product', 'Customer', 'Sales', 'Marketing', 'Analytics', 'Dashboard', 'ML'];

  const filteredWorkbooks = mockWorkbooks
    .filter(workbook => 
      workbook.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      workbook.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(workbook => 
      selectedTag === 'All' || workbook.tags.some(({ tag }) => tag.name === selectedTag)
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'recent':
          return new Date(b.published_at).getTime() - new Date(a.published_at).getTime();
        case 'popular':
          return b.view_count - a.view_count;
        case 'favorites':
          return b.favorite_count - a.favorite_count;
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-shadow">Workbooks</h1>
          <p className="mt-2 text-lg text-shadow-lite">
            Discover and explore data visualizations from our community
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 bg-white rounded-lg shadow-sm border p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-shadow mb-2">
                Search
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="search"
                  placeholder="Search workbooks..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border border-neutral-6 rounded-md text-shadow placeholder-neutral-11 focus:outline-none focus:ring-2 focus:ring-sigma-green focus:border-sigma-green"
                />
                <BookOpenIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Tag Filter */}
            <div>
              <label htmlFor="tag" className="block text-sm font-medium text-shadow mb-2">
                Category
              </label>
              <select
                id="tag"
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="w-full px-3 py-2 border border-neutral-6 rounded-md text-shadow focus:outline-none focus:ring-2 focus:ring-sigma-green focus:border-sigma-green"
              >
                {tags.map(tag => (
                  <option key={tag} value={tag}>{tag}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <label htmlFor="sort" className="block text-sm font-medium text-shadow mb-2">
                Sort by
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-neutral-6 rounded-md text-shadow focus:outline-none focus:ring-2 focus:ring-sigma-green focus:border-sigma-green"
              >
                <option value="recent">Most Recent</option>
                <option value="popular">Most Popular</option>
                <option value="favorites">Most Favorited</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-shadow-lite">
            Showing {filteredWorkbooks.length} of {mockWorkbooks.length} workbooks
          </p>
        </div>

        {/* Workbooks Grid */}
        {filteredWorkbooks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWorkbooks.map((workbook) => (
              <WorkbookCard key={workbook.id} workbook={workbook} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <BookOpenIcon className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-shadow">No workbooks found</h3>
            <p className="mt-1 text-sm text-shadow-lite">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
