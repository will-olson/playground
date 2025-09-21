'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { api } from '@/lib/api';
import ProfileHeader from '@/components/profile-header';
import ProfileNavigation from '@/components/profile-navigation';
import WorkbookGrid from '@/components/workbook-grid';
import { LoadingSpinner } from '@/components/loading-spinner';

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

interface ProfileStats {
  workbooksCount: number;
  favoritesCount: number;
  followingCount: number;
  followersCount: number;
  hiddenCount: number;
}

export default function ProfilePage() {
  const params = useParams();
  const userId = params.id as string;
  
  const [user, setUser] = useState<User | null>(null);
  const [workbooks, setWorkbooks] = useState<Workbook[]>([]);
  const [stats, setStats] = useState<ProfileStats | null>(null);
  const [activeTab, setActiveTab] = useState('workbooks');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProfileData();
  }, [userId]);

  const fetchProfileData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch user profile
      const userResponse = await api.get(`/users/${userId}`);
      setUser(userResponse.data);

      // Fetch user stats
      const statsResponse = await api.get(`/users/${userId}/stats`);
      setStats(statsResponse.data);

      // Fetch user's workbooks
      const workbooksResponse = await api.get(`/users/${userId}/workbooks`);
      setWorkbooks(workbooksResponse.data);

    } catch (err: any) {
      console.error('Error fetching profile data:', err);
      setError(err.response?.data?.message || 'Failed to load profile');
    } finally {
      setLoading(false);
    }
  };

  const handleTabChange = async (tab: string) => {
    setActiveTab(tab);
    
    try {
      let response;
      switch (tab) {
        case 'workbooks':
          response = await api.get(`/users/${userId}/workbooks`);
          setWorkbooks(response.data);
          break;
        case 'favorites':
          response = await api.get(`/users/${userId}/favorites`);
          setWorkbooks(response.data);
          break;
        case 'following':
          // Handle following workbooks
          response = await api.get(`/users/${userId}/following/workbooks`);
          setWorkbooks(response.data);
          break;
        case 'followers':
          // Handle followers' workbooks
          response = await api.get(`/users/${userId}/followers/workbooks`);
          setWorkbooks(response.data);
          break;
        case 'hidden':
          response = await api.get(`/users/${userId}/hidden`);
          setWorkbooks(response.data);
          break;
        default:
          break;
      }
    } catch (err: any) {
      console.error(`Error fetching ${tab} data:`, err);
      setError(`Failed to load ${tab}`);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Error</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={fetchProfileData}
            className="button-primary"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!user || !stats) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">User Not Found</h2>
          <p className="text-gray-600">The requested profile could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <ProfileHeader 
          user={user}
          stats={stats}
        />

        {/* Profile Navigation */}
        <ProfileNavigation
          activeTab={activeTab}
          onTabChange={handleTabChange}
          stats={stats}
        />

        {/* Content Grid */}
        <div className="mt-8">
          <WorkbookGrid 
            workbooks={workbooks}
            showAuthor={activeTab !== 'workbooks'}
            emptyMessage={`No ${activeTab} found`}
          />
        </div>
      </div>
    </div>
  );
}
