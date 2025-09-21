'use client';

import { useQuery } from '@tanstack/react-query';
import { WorkbookCard } from './workbook-card';
import { api } from '@/lib/api';

interface Workbook {
  id: string;
  title: string;
  description: string;
  sigma_embed_url: string;
  thumbnail_url?: string;
  view_count: number;
  favorite_count: number;
  published_at: string;
  author: {
    id: string;
    username: string;
    full_name: string;
    profile_image_url?: string;
  };
  tags: Array<{
    tag: {
      id: number;
      name: string;
      color: string;
    };
  }>;
}

export function FeaturedWorkbooks() {
  const { data: workbooks, isLoading, error } = useQuery({
    queryKey: ['featured-workbooks'],
    queryFn: async () => {
      const response = await api.get('/workbooks?featured=true&limit=6');
      return response.data as Workbook[];
    },
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="bg-gray-200 rounded-lg h-48 mb-4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">Failed to load featured workbooks. Please try again later.</p>
      </div>
    );
  }

  if (!workbooks || workbooks.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No featured workbooks available.</p>
      </div>
    );
  }

  return (
    <div className="grid-sigma-3">
      {workbooks.map((workbook) => (
        <WorkbookCard key={workbook.id} workbook={workbook} />
      ))}
    </div>
  );
}
