'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { api } from '@/lib/api';

interface Workbook {
  id: string;
  title: string;
  description: string;
  thumbnailUrl?: string;
  isPublic: boolean;
  created_at: string;
  updated_at: string;
  author: {
    id: string;
    full_name: string;
    profile_image_url?: string;
  };
  tags: {
    id: string;
    name: string;
  }[];
  _count: {
    favorited_by: number;
    views: number;
  };
}

interface WorkbookGridProps {
  workbooks?: Workbook[];
  showAuthor?: boolean;
  emptyMessage?: string;
}

export default function WorkbookGrid({ workbooks: propWorkbooks, showAuthor = false, emptyMessage = 'No workbooks found' }: WorkbookGridProps) {
  const [workbooks, setWorkbooks] = useState<Workbook[]>(propWorkbooks || []);
  const [loading, setLoading] = useState(!propWorkbooks);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!propWorkbooks) {
      fetchWorkbooks();
    }
  }, [propWorkbooks]);

  const fetchWorkbooks = async () => {
    try {
      setLoading(true);
      const response = await api.get('/workbooks');
      setWorkbooks(response.data);
    } catch (err: any) {
      console.error('Error fetching workbooks:', err);
      setError(err.response?.data?.message || 'Failed to load workbooks');
    } finally {
      setLoading(false);
    }
  };
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const handleFavorite = async (workbookId: string) => {
    try {
      const isCurrentlyFavorited = favorites.has(workbookId);
      
      if (isCurrentlyFavorited) {
        // Remove from favorites
        await fetch(`/api/v1/workbooks/${workbookId}/favorite`, {
          method: 'DELETE',
        });
        setFavorites(prev => {
          const newSet = new Set(prev);
          newSet.delete(workbookId);
          return newSet;
        });
      } else {
        // Add to favorites
        await fetch(`/api/v1/workbooks/${workbookId}/favorite`, {
          method: 'POST',
        });
        setFavorites(prev => new Set(prev).add(workbookId));
      }
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getInitials = (fullName: string) => {
    if (!fullName) return 'U';
    const names = fullName.trim().split(' ');
    if (names.length === 1) {
      return names[0].charAt(0).toUpperCase();
    }
    return `${names[0].charAt(0)}${names[names.length - 1].charAt(0)}`.toUpperCase();
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sigma-green"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-600 mb-4">{error}</div>
        <button 
          onClick={fetchWorkbooks}
          className="button-primary"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (workbooks.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No workbooks found</h3>
        <p className="text-gray-500">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {workbooks.map((workbook) => (
        <div key={workbook.id} className="card-sigma group hover:shadow-lg transition-shadow">
          {/* Thumbnail */}
          <div className="relative aspect-video bg-gray-100 rounded-lg mb-4 overflow-hidden">
            {workbook.thumbnailUrl ? (
              <Image
                src={workbook.thumbnailUrl}
                alt={workbook.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-200"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-sigma-green-light to-sigma-green">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            )}
            
            {/* Favorite button */}
            <button
              onClick={() => handleFavorite(workbook.id)}
              className={`absolute top-3 right-3 p-2 rounded-full transition-colors ${
                favorites.has(workbook.id)
                  ? 'bg-red-500 text-white'
                  : 'bg-white bg-opacity-80 text-gray-600 hover:bg-opacity-100'
              }`}
            >
              <svg className="w-5 h-5" fill={favorites.has(workbook.id) ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="space-y-3">
            {/* Title */}
            <h3 className="text-lg font-semibold text-shadow line-clamp-2 group-hover:text-sigma-green transition-colors">
              {workbook.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-shadow-lite line-clamp-2">
              {workbook.description}
            </p>

            {/* Author info (if showAuthor is true) */}
            {showAuthor && workbook.author && (
              <div className="flex items-center space-x-2">
                {workbook.author.profile_image_url ? (
                  <Image
                    src={workbook.author.profile_image_url}
                    alt={workbook.author.full_name || 'Unknown User'}
                    width={24}
                    height={24}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-6 h-6 rounded-full bg-sigma-green flex items-center justify-center text-white text-xs font-medium">
                    {getInitials(workbook.author.full_name || 'U')}
                  </div>
                )}
                <span className="text-sm text-shadow-lite">
                  {workbook.author.full_name || 'Unknown User'}
                </span>
              </div>
            )}

            {/* Tags */}
            {workbook.tags && workbook.tags.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {workbook.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={`${workbook.id}-tag-${tag.id || index}`}
                    className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700"
                  >
                    {tag.name}
                  </span>
                ))}
                {workbook.tags.length > 3 && (
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                    +{workbook.tags.length - 3} more
                  </span>
                )}
              </div>
            )}

            {/* Stats */}
            <div className="flex items-center justify-between text-sm text-shadow-lite">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span>{workbook._count?.favorited_by || 0}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>{workbook._count?.views || 0}</span>
                </div>
              </div>
              <span>{workbook.updated_at ? formatDate(workbook.updated_at) : 'Unknown date'}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}