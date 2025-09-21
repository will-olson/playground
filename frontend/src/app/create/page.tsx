'use client';

import { useState } from 'react';
import { PlusIcon, DocumentTextIcon, LinkIcon, CloudArrowUpIcon } from '@heroicons/react/24/outline';

export default function CreatePage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    sigmaUrl: '',
    tags: '',
    isPublic: true
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Workbook created successfully! (This is a demo)');
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      title: '',
      description: '',
      sigmaUrl: '',
      tags: '',
      isPublic: true
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-shadow">Share Your Work</h1>
          <p className="mt-2 text-lg text-shadow-lite">
            Share your Sigma workbooks with the community
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg shadow-sm border">
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-shadow mb-2">
                Workbook Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Enter a descriptive title for your workbook"
                className="w-full px-3 py-2 border border-neutral-6 rounded-md text-shadow placeholder-neutral-11 focus:outline-none focus:ring-2 focus:ring-sigma-green focus:border-sigma-green"
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-shadow mb-2">
                Description *
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={4}
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Describe what your workbook does and what insights it provides"
                className="w-full px-3 py-2 border border-neutral-6 rounded-md text-shadow placeholder-neutral-11 focus:outline-none focus:ring-2 focus:ring-sigma-green focus:border-sigma-green"
              />
            </div>

            {/* Sigma URL */}
            <div>
              <label htmlFor="sigmaUrl" className="block text-sm font-medium text-shadow mb-2">
                Sigma Workbook Path *
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="sigmaUrl"
                  name="sigmaUrl"
                  required
                  value={formData.sigmaUrl}
                  onChange={handleInputChange}
                  placeholder="workbook/your-workbook-name/id"
                  className="w-full pl-10 pr-3 py-2 border border-neutral-6 rounded-md text-shadow placeholder-neutral-11 focus:outline-none focus:ring-2 focus:ring-sigma-green focus:border-sigma-green"
                />
                <LinkIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <p className="mt-1 text-sm text-text-secondary">
                The path to your Sigma workbook (e.g., workbook/sales-dashboard/abc123)
              </p>
            </div>

            {/* Tags */}
            <div>
              <label htmlFor="tags" className="block text-sm font-medium text-shadow mb-2">
                Tags
              </label>
              <input
                type="text"
                id="tags"
                name="tags"
                value={formData.tags}
                onChange={handleInputChange}
                placeholder="sales, dashboard, analytics (comma-separated)"
                className="w-full px-3 py-2 border border-neutral-6 rounded-md text-shadow placeholder-neutral-11 focus:outline-none focus:ring-2 focus:ring-sigma-green focus:border-sigma-green"
              />
              <p className="mt-1 text-sm text-text-secondary">
                Add tags to help others discover your workbook
              </p>
            </div>

            {/* Public/Private */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="isPublic"
                name="isPublic"
                checked={formData.isPublic}
                onChange={handleInputChange}
                className="h-4 w-4 text-sigma-green focus:ring-sigma-green border-gray-300 rounded"
              />
              <label htmlFor="isPublic" className="ml-2 block text-sm text-shadow">
                Make this workbook public
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t border-gray-200">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-sigma-green hover:bg-sigma-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sigma-green disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creating...
                  </>
                ) : (
                  <>
                    <PlusIcon className="h-5 w-5 mr-2" />
                    Share Workbook
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Help Section */}
        <div className="mt-12 bg-white border border-neutral-6 rounded-xl p-8 shadow-soft">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-shadow mb-2">How to Share Your Workbook</h3>
            <p className="text-sm text-shadow-lite">Follow these simple steps to get your workbook published</p>
          </div>
          <div className="space-y-6">
            <div className="flex items-start p-4 bg-neutral-1 rounded-lg border border-neutral-5">
              <div className="flex-shrink-0 w-10 h-10 bg-sigma-green-light rounded-full flex items-center justify-center">
                <DocumentTextIcon className="h-5 w-5 text-sigma-green" />
              </div>
              <div className="ml-4">
                <h4 className="text-base font-semibold text-shadow mb-1">1. Create in Sigma</h4>
                <p className="text-sm text-shadow-lite">
                  Build your workbook in Sigma Computing and make sure it&apos;s accessible
                </p>
              </div>
            </div>
            <div className="flex items-start p-4 bg-neutral-1 rounded-lg border border-neutral-5">
              <div className="flex-shrink-0 w-10 h-10 bg-sigma-green-light rounded-full flex items-center justify-center">
                <LinkIcon className="h-5 w-5 text-sigma-green" />
              </div>
              <div className="ml-4">
                <h4 className="text-base font-semibold text-shadow mb-1">2. Get the Path</h4>
                <p className="text-sm text-shadow-lite">
                  Copy the workbook path from your Sigma URL (e.g., workbook/sales-dashboard/abc123)
                </p>
              </div>
            </div>
            <div className="flex items-start p-4 bg-neutral-1 rounded-lg border border-neutral-5">
              <div className="flex-shrink-0 w-10 h-10 bg-sigma-green-light rounded-full flex items-center justify-center">
                <CloudArrowUpIcon className="h-5 w-5 text-sigma-green" />
              </div>
              <div className="ml-4">
                <h4 className="text-base font-semibold text-shadow mb-1">3. Share with Community</h4>
                <p className="text-sm text-shadow-lite">
                  Fill out the form above to make your workbook discoverable by others
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
