'use client';

import Link from 'next/link';
import Image from 'next/image';
import { EyeIcon, HeartIcon, CalendarIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

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

interface WorkbookCardProps {
  workbook: Workbook;
}

export function WorkbookCard({ workbook }: WorkbookCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);
  const [favoriteCount, setFavoriteCount] = useState(workbook.favorite_count);

  const handleFavorite = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Optimistic update
    setIsFavorited(!isFavorited);
    setFavoriteCount(prev => isFavorited ? prev - 1 : prev + 1);
    
    // TODO: Implement actual API call
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <Link href={`/workbooks/${workbook.id}`} className="group">
      <div className="card-sigma hover:shadow-medium transition-shadow duration-200 overflow-hidden">
        {/* Thumbnail */}
        <div className="aspect-video bg-gray-200 relative overflow-hidden">
          {workbook.thumbnail_url ? (
            <Image
              src={workbook.thumbnail_url}
              alt={workbook.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-200"
            />
          ) : (
            <div className="flex items-center justify-center h-full bg-gradient-to-br from-sigma-green-light to-sigma-green">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 bg-sigma-green rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Σ</span>
                </div>
                <p className="text-neutral-12 text-sm font-bold drop-shadow-lg">Sigma Workbook</p>
              </div>
            </div>
          )}
          
          {/* Favorite Button */}
          <button
            onClick={handleFavorite}
            className="absolute top-2 right-2 p-2 bg-white/80 hover:bg-white rounded-full transition-colors"
          >
            {isFavorited ? (
              <HeartSolidIcon className="h-5 w-5 text-red-500" />
            ) : (
              <HeartIcon className="h-5 w-5 text-gray-600" />
            )}
          </button>
        </div>

        {/* Content */}
        <div>
          <h3 className="font-semibold text-shadow group-hover:text-sigma-green transition-colors line-clamp-2">
            {workbook.title}
          </h3>
          <p className="mt-2 text-sm text-shadow-lite line-clamp-2">
            {workbook.description}
          </p>

          {/* Author */}
          <div className="mt-3 flex items-center">
            <div className="flex-shrink-0">
              {workbook.author.profile_image_url ? (
                <Image
                  src={workbook.author.profile_image_url}
                  alt={workbook.author.full_name}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              ) : (
                <div className="w-6 h-6 bg-background-light rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium text-shadow-lite">
                    {workbook.author.full_name.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            <div className="ml-2">
              <p className="text-sm font-medium text-shadow">
                {workbook.author.full_name}
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-3 flex flex-wrap gap-1">
            {workbook.tags.slice(0, 3).map(({ tag }) => (
              <span
                key={tag.id}
                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium"
                style={{ 
                  backgroundColor: `${tag.color}20`,
                  color: tag.color
                }}
              >
                {tag.name}
              </span>
            ))}
            {workbook.tags.length > 3 && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-background-light text-shadow-lite">
                +{workbook.tags.length - 3}
              </span>
            )}
          </div>

          {/* Stats */}
          <div className="mt-3 flex items-center justify-between text-sm text-shadow-lite">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <EyeIcon className="h-4 w-4 mr-1" />
                <span>{workbook.view_count.toLocaleString()}</span>
              </div>
              <div className="flex items-center">
                <HeartIcon className="h-4 w-4 mr-1" />
                <span>{favoriteCount.toLocaleString()}</span>
              </div>
            </div>
            <div className="flex items-center">
              <CalendarIcon className="h-4 w-4 mr-1" />
              <span>{formatDate(workbook.published_at)}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
