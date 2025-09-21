import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { apiMethods } from '../api';

export interface User {
  id: string;
  email: string;
  full_name: string;
  username: string;
  created_at: string;
  updated_at: string;
  is_sigma_user?: boolean;
  sigma_user_id?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  
  // Actions
  login: (credentials: { email: string; password: string }) => Promise<void>;
  register: (userData: { email: string; password: string; full_name: string; username: string }) => Promise<void>;
  logout: () => void;
  refreshUser: () => Promise<void>;
  clearError: () => void;
  setError: (error: string) => void;
  setLoading: (loading: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      login: async (credentials) => {
        try {
          set({ isLoading: true, error: null });
          
          const response = await apiMethods.login(credentials);
          
          if (response.success && response.data) {
            const { user, accessToken, refreshToken } = response.data;
            
            // Store tokens
            localStorage.setItem('accessToken', accessToken);
            if (refreshToken) {
              localStorage.setItem('refreshToken', refreshToken);
            }
            
            set({ 
              user, 
              isAuthenticated: true, 
              isLoading: false, 
              error: null 
            });
          } else {
            throw new Error(response.message || 'Login failed');
          }
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : 'Login failed';
          set({ 
            error: errorMessage, 
            isLoading: false, 
            isAuthenticated: false 
          });
          throw error;
        }
      },

      register: async (userData) => {
        try {
          set({ isLoading: true, error: null });
          
          const response = await apiMethods.register(userData);
          
          if (response.success && response.data) {
            const { user, accessToken, refreshToken } = response.data;
            
            // Store tokens
            localStorage.setItem('accessToken', accessToken);
            if (refreshToken) {
              localStorage.setItem('refreshToken', refreshToken);
            }
            
            set({ 
              user, 
              isAuthenticated: true, 
              isLoading: false, 
              error: null 
            });
          } else {
            throw new Error(response.message || 'Registration failed');
          }
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : 'Registration failed';
          set({ 
            error: errorMessage, 
            isLoading: false, 
            isAuthenticated: false 
          });
          throw error;
        }
      },

      logout: () => {
        // Clear tokens
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        
        set({ 
          user: null, 
          isAuthenticated: false, 
          isLoading: false, 
          error: null 
        });
      },

      refreshUser: async () => {
        try {
          set({ isLoading: true, error: null });
          
          const response = await apiMethods.getUserProfile();
          
          if (response.success && response.data) {
            set({ 
              user: response.data, 
              isAuthenticated: true, 
              isLoading: false, 
              error: null 
            });
          } else {
            throw new Error('Failed to refresh user profile');
          }
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : 'Failed to refresh user';
          set({ 
            error: errorMessage, 
            isLoading: false, 
            isAuthenticated: false 
          });
          
          // If refresh fails, logout user
          get().logout();
        }
      },

      clearError: () => set({ error: null }),
      setError: (error) => set({ error }),
      setLoading: (loading) => set({ isLoading: loading }),
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ 
        user: state.user, 
        isAuthenticated: state.isAuthenticated 
      }),
    }
  )
);
