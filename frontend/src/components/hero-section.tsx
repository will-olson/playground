'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/outline';

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="relative bg-gradient-to-r from-sigma-green to-sigma-green-dark">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl drop-shadow-lg">
            Sigma Playground
          </h1>
          <p className="mt-6 text-xl text-white max-w-3xl mx-auto drop-shadow-md">
            Discover, share, and showcase amazing data visualizations built with Sigma. 
            Join our community of data professionals and explore the power of interactive analytics.
          </p>
          
          {/* Search Bar */}
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search workbooks, authors, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-neutral-6 rounded-md leading-5 bg-white placeholder-neutral-11 text-shadow focus:outline-none focus:placeholder-neutral-9 focus:ring-1 focus:ring-sigma-green focus:border-sigma-green sm:text-sm"
              />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/workbooks"
              className="button-secondary inline-flex items-center px-6 py-3"
            >
              <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
              Explore Workbooks
            </Link>
            <Link
              href="/create"
              className="button-primary inline-flex items-center px-6 py-3"
            >
              <PlusIcon className="h-5 w-5 mr-2" />
              Share Your Work
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
