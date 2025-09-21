'use client';

import Link from 'next/link';

export default function ProfileTestPage() {
  const testUsers = [
    { id: 'f6afdbc8-526f-4e77-aeae-096ec9210633', name: 'John Doe', email: 'john@example.com' },
    { id: '24ba172f-c585-49c2-8da0-7545da625025', name: 'Jane Smith', email: 'jane@example.com' },
    { id: '8535b876-6ef1-4d9c-88f5-5d16d4410acd', name: 'Mike Johnson', email: 'mike@example.com' },
    { id: '21a2c2f1-c689-42d0-beb6-3491b8dfb1b0', name: 'Admin User', email: 'admin@sigmaplayground.com' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-shadow mb-4">
            Profile Testing Dashboard
          </h1>
          <p className="text-lg text-shadow-lite max-w-2xl mx-auto">
            Test the profile functionality with the seeded database data. 
            Click on any user below to view their profile page and test following/favorite features.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-soft border border-neutral-6 p-8">
          <h2 className="text-2xl font-bold text-shadow mb-6">Test Users</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testUsers.map((user) => (
              <div key={user.id} className="card-sigma">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-sigma-green rounded-full flex items-center justify-center text-white text-lg font-bold">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-shadow">{user.name}</h3>
                    <p className="text-sm text-shadow-lite">{user.email}</p>
                  </div>
                  <Link
                    href={`/profile/${user.id}`}
                    className="button-primary"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 bg-white rounded-xl shadow-soft border border-neutral-6 p-8">
          <h2 className="text-2xl font-bold text-shadow mb-6">Testing Instructions</h2>
          <div className="space-y-4 text-shadow-lite">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-sigma-green rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">1</div>
              <p>Click on any user above to view their profile page</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-sigma-green rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">2</div>
              <p>Test the navigation tabs: Workbooks, Favorites, Following, Followers, Hidden, Stats</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-sigma-green rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">3</div>
              <p>Try the Follow/Unfollow button in the profile header</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-sigma-green rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">4</div>
              <p>Test the favorite functionality by clicking the heart icon on workbook cards</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-sigma-green rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">5</div>
              <p>Check the social media links in the profile navigation</p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Backend API Endpoints</h3>
          <div className="text-sm text-blue-800 space-y-1">
            <p><code className="bg-blue-100 px-2 py-1 rounded">GET /api/v1/users/:id</code> - Get user profile</p>
            <p><code className="bg-blue-100 px-2 py-1 rounded">GET /api/v1/users/:id/stats</code> - Get user statistics</p>
            <p><code className="bg-blue-100 px-2 py-1 rounded">GET /api/v1/users/:id/workbooks</code> - Get user workbooks</p>
            <p><code className="bg-blue-100 px-2 py-1 rounded">GET /api/v1/users/:id/favorites</code> - Get user favorites</p>
            <p><code className="bg-blue-100 px-2 py-1 rounded">POST /api/v1/workbooks/:id/favorite</code> - Add to favorites</p>
            <p><code className="bg-blue-100 px-2 py-1 rounded">DELETE /api/v1/workbooks/:id/favorite</code> - Remove from favorites</p>
          </div>
        </div>
      </div>
    </div>
  );
}
