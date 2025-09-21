import { Suspense } from 'react';
import WorkbookGrid from '@/components/workbook-grid';
import { HeroSection } from '@/components/hero-section';
import { FeaturedWorkbooks } from '@/components/featured-workbooks';
import { LoadingSpinner } from '@/components/loading-spinner';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Featured Workbooks */}
      <section className="py-16 bg-sigma-green-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-shadow sm:text-4xl">
              Featured Visualizations
            </h2>
            <p className="mt-4 text-lg text-shadow-lite">
              Discover the most popular and innovative Sigma workbooks from our community
            </p>
          </div>
          <Suspense fallback={<LoadingSpinner />}>
            <FeaturedWorkbooks />
          </Suspense>
        </div>
      </section>

      {/* All Workbooks */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Latest & Greatest
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore the latest workbooks from our community
            </p>
          </div>
          <Suspense fallback={<LoadingSpinner />}>
            <WorkbookGrid />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
