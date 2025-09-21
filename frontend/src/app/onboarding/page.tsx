'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/store/auth-store';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SigmaEmbed } from '@/components/sigma-embed';
import { CheckCircle, ArrowRight, ArrowLeft, SparklesIcon } from 'lucide-react';

export default function OnboardingPage() {
  const router = useRouter();
  const { user, isAuthenticated, refreshUser } = useAuthStore();
  
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  // Refresh user data on mount
  useEffect(() => {
    if (isAuthenticated) {
      refreshUser();
    }
  }, [isAuthenticated, refreshUser]);

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      handleCompleteOnboarding();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleCompleteOnboarding = async () => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      router.push('/');
    } catch (error) {
      console.error('Error completing onboarding:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="text-center space-y-6">
            <div className="mx-auto w-16 h-16 bg-sigma-green/10 rounded-full flex items-center justify-center">
              <SparklesIcon className="w-8 h-8 text-sigma-green" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Welcome to Sigma Playground</h2>
              <p className="text-gray-600 mt-2">Let&apos;s get you set up to explore amazing data visualizations</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-left">
              <h3 className="font-semibold text-gray-900 mb-3">What you&apos;ll get:</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Access to interactive data visualizations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Connect your existing Sigma workbooks</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Share and collaborate with the community</span>
                </li>
              </ul>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-xl font-bold text-gray-900">Your First Workbook</h2>
              <p className="text-gray-600 mt-2">Explore your first interactive data visualization</p>
            </div>
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <SigmaEmbed
                workbookPath="workbook/workbook-4osogXvjSNtZFo3DW2XYGs"
                userEmail={user?.email || 'test@example.com'}
                title="Sample Workbook"
                height="400px"
                options={{
                  hideBookmarks: false,
                  hideMenu: false,
                  responsiveHeight: true,
                  theme: 'Light',
                  menuPosition: 'bottom'
                }}
                jwtOptions={{
                  sessionLength: 3600,
                  isEmbedUser: false
                }}
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="text-center space-y-6">
            <h2 className="text-xl font-bold text-gray-900">Connect Your Sigma Account</h2>
            <p className="text-gray-600">Link your existing Sigma account to access your workbooks</p>
            <div className="bg-gray-50 rounded-lg p-6">
              <Button className="bg-sigma-green hover:bg-sigma-green-dark text-white">
                Connect Sigma Account
              </Button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="text-center space-y-6">
            <h2 className="text-xl font-bold text-gray-900">Set Your Preferences</h2>
            <p className="text-gray-600">Customize your experience and notification settings</p>
            <div className="bg-gray-50 rounded-lg p-6 text-left">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="notifications" defaultChecked />
                  <label htmlFor="notifications" className="text-sm">Email notifications</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="dark-mode" />
                  <label htmlFor="dark-mode" className="text-sm">Dark mode</label>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="text-center space-y-6">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">You&apos;re All Set!</h2>
            <p className="text-gray-600">Welcome to Sigma Playground. Start exploring amazing data visualizations.</p>
          </div>
        );

      default:
        return null;
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sigma-green mx-auto mb-4"></div>
          <p className="text-gray-600">Redirecting to login...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              Step {currentStep + 1} of 5
            </span>
            <span className="text-sm text-gray-500">
              {Math.round(((currentStep + 1) / 5) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-sigma-green h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / 5) * 100}%` }}
            />
          </div>
        </div>

        {/* Step Content */}
        <Card>
          <CardContent className="p-8">
            {renderStep()}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            variant="outline"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>

          <Button
            onClick={handleNext}
            disabled={isLoading}
            className="bg-sigma-green hover:bg-sigma-green-dark text-white"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Completing...
              </>
            ) : currentStep === 4 ? (
              <>
                Complete Setup
                <CheckCircle className="w-4 h-4 ml-2" />
              </>
            ) : (
              <>
                Next
                <ArrowRight className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}