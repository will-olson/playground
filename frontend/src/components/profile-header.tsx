'use client';

import Image from 'next/image';
import { useState } from 'react';

interface User {
  id: string;
  email: string;
  full_name: string;
  bio?: string;
  location?: string;
  website?: string;
  profile_image_url?: string;
  created_at: string;
  updated_at: string;
}

interface ProfileStats {
  workbooksCount: number;
  favoritesCount: number;
  followingCount: number;
  followersCount: number;
  hiddenCount: number;
}

interface ProfileHeaderProps {
  user: User;
  stats: ProfileStats;
}

export default function ProfileHeader({ user, stats }: ProfileHeaderProps) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleFollow = async () => {
    try {
      setIsLoading(true);
      // TODO: Implement follow/unfollow API call
      setIsFollowing(!isFollowing);
    } catch (error) {
      console.error('Error toggling follow status:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getInitials = (fullName: string) => {
    if (!fullName) return 'U';
    const names = fullName.trim().split(' ');
    if (names.length === 1) {
      return names[0].charAt(0).toUpperCase();
    }
    return `${names[0].charAt(0)}${names[names.length - 1].charAt(0)}`.toUpperCase();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-soft border border-neutral-6 p-8 mb-6">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
        {/* Left side - Profile info */}
        <div className="flex items-start space-x-6">
          {/* Avatar */}
          <div className="flex-shrink-0">
            {user.profile_image_url ? (
              <Image
                src={user.profile_image_url}
                alt={user.full_name}
                width={120}
                height={120}
                className="w-30 h-30 rounded-full object-cover border-4 border-white shadow-lg"
              />
            ) : (
              <div className="w-30 h-30 rounded-full bg-sigma-green flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                {getInitials(user.full_name)}
              </div>
            )}
          </div>

          {/* User details */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-3 mb-2">
              <h1 className="text-3xl font-bold text-shadow">
                {user.full_name}
              </h1>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-sigma-green-light text-sigma-green-dark">
                Sigma
              </span>
            </div>

            {user.bio && (
              <p className="text-lg text-shadow-lite mb-4 max-w-2xl">
                {user.bio}
              </p>
            )}

            <div className="space-y-2 text-shadow-lite">
              {user.location && (
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{user.location}</span>
                </div>
              )}

              {user.website && (
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <a 
                    href={user.website.startsWith('http') ? user.website : `https://${user.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sigma-green hover:text-sigma-green-dark transition-colors"
                  >
                    {user.website}
                  </a>
                </div>
              )}

              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Joined {formatDate(user.created_at)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Action buttons */}
        <div className="mt-6 lg:mt-0 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
          <button
            onClick={handleFollow}
            disabled={isLoading}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              isFollowing
                ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                : 'button-primary'
            }`}
          >
            {isLoading ? 'Loading...' : isFollowing ? 'Following' : 'Follow'}
          </button>

          <button className="button-secondary">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
