'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuthStore } from '@/lib/store/auth-store';
import { 
  Bars3Icon, 
  XMarkIcon, 
  MagnifyingGlassIcon,
  PlusIcon,
  UserIcon,
  HomeIcon,
  BookOpenIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  UserCircleIcon
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Community', href: '/community', icon: BookOpenIcon },
  { name: 'Create', href: '/create', icon: PlusIcon },
  { name: 'Import', href: '/onboarding', icon: Cog6ToothIcon },
  { name: 'Test Embed', href: '/test-embed', icon: BookOpenIcon },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  return (
    <nav className="bg-background-dark shadow-sm border-b border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="flex-shrink-0 flex items-center logo-container">
                <Image
                  src="/sigma-logo-white.webp"
                  alt="Sigma"
                  width={64}
                  height={64}
                  className="h-8 w-auto"
                  style={{
                    imageRendering: '-webkit-optimize-contrast',
                  }}
                  priority
                  quality={100}
                  unoptimized={false}
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors text-text-light hover:text-sigma-green hover:border-b-2 hover:border-sigma-green"
              >
                <item.icon className="h-4 w-4 mr-2" />
                {item.name}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link
              href="/learn"
              className="inline-flex items-center px-4 py-2 border border-border-light text-sm font-medium rounded-md text-text-primary bg-background-card hover:bg-background-light transition-colors"
            >
              Learn
            </Link>
            <Link
              href="/create"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-sigma-green hover:bg-sigma-green-dark transition-colors"
            >
              Create
            </Link>
            
            {/* Authentication Section */}
            {isAuthenticated ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <UserCircleIcon className="h-5 w-5 text-sigma-green" />
                  <span className="text-sm text-text-primary">
                    {user?.full_name || user?.email || 'User'}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="inline-flex items-center px-3 py-1 border border-border-light text-sm font-medium rounded-md text-text-primary bg-background-card hover:bg-background-light transition-colors"
                >
                  <ArrowRightOnRectangleIcon className="h-4 w-4 mr-1" />
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  href="/login"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-text-primary hover:text-sigma-green transition-colors"
                >
                  <UserIcon className="h-4 w-4 mr-2" />
                  Sign In
                </Link>
                <Link
                  href="/register"
                  className="inline-flex items-center px-4 py-2 border border-border-light text-sm font-medium rounded-md text-text-primary bg-background-card hover:bg-background-light transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-text-light hover:text-sigma-green hover:bg-background-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sigma-green"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background-card border-t border-border-light">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-text-primary hover:text-sigma-green hover:bg-background-light group flex items-center px-3 py-2 text-base font-medium rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Action Buttons */}
            <div className="px-3 py-2 space-y-2">
              <Link
                href="/learn"
                className="block w-full text-center px-4 py-2 border border-border-light text-sm font-medium rounded-md text-text-primary bg-background-light hover:bg-border-light transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Learn
              </Link>
              <Link
                href="/create"
                className="block w-full text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-sigma-green hover:bg-sigma-green-dark transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Create
              </Link>
              
              {/* Mobile Authentication */}
              {isAuthenticated ? (
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2 px-4 py-2">
                    <UserCircleIcon className="h-5 w-5 text-sigma-green" />
                    <span className="text-sm text-text-primary">
                      {userInfo?.name || 'User'}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      handleLogout();
                      setMobileMenuOpen(false);
                    }}
                    className="block w-full text-center px-4 py-2 border border-border-light text-sm font-medium rounded-md text-text-primary bg-background-light hover:bg-border-light transition-colors"
                  >
                    <ArrowRightOnRectangleIcon className="h-4 w-4 inline mr-2" />
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  href="/auth/login"
                  className="block w-full text-center px-4 py-2 border border-border-light text-sm font-medium rounded-md text-text-primary bg-background-light hover:bg-border-light transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <UserIcon className="h-4 w-4 inline mr-2" />
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
