import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api/v1';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem('refreshToken');
        if (refreshToken) {
          const response = await axios.post(`${API_BASE_URL}/auth/refresh`, {
            refreshToken,
          });

          const { accessToken } = response.data;
          localStorage.setItem('accessToken', accessToken);

          // Retry the original request with new token
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          return api(originalRequest);
        }
      } catch (refreshError) {
        // Refresh failed, redirect to login
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        window.location.href = '/login';
      }
    }

    return Promise.reject(error);
  }
);

// API methods
export const apiMethods = {
  // Auth methods
  async login(credentials: { email: string; password: string }) {
    const response = await api.post('/auth/login', credentials);
    const { accessToken, refreshToken } = response.data;
    
    // Get user profile after successful login
    const profileResponse = await api.get('/auth/profile', {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    
    return {
      success: true,
      data: {
        user: profileResponse.data,
        accessToken,
        refreshToken
      }
    };
  },

  async register(userData: { email: string; password: string; full_name: string; username: string }) {
    try {
      const response = await api.post('/auth/register', userData);
      const { accessToken, refreshToken } = response.data;
      
      // Get user profile after successful registration
      const profileResponse = await api.get('/auth/profile', {
        headers: { Authorization: `Bearer ${accessToken}` }
      });
      
      return {
        success: true,
        data: {
          user: profileResponse.data,
          accessToken,
          refreshToken
        }
      };
    } catch (error: any) {
      // Handle specific error cases
      if (error.response?.status === 409) {
        throw new Error('Email already exists. Please use a different email or try logging in.');
      } else if (error.response?.status === 400) {
        throw new Error(error.response.data?.message || 'Invalid registration data. Please check your information.');
      } else {
        throw new Error(error.response?.data?.message || 'Registration failed. Please try again.');
      }
    }
  },

  async logout() {
    const response = await api.post('/auth/logout');
    return response.data;
  },

  async getUserProfile() {
    const response = await api.get('/auth/profile');
    return { success: true, data: response.data };
  },

  // Workbook methods
  async getWorkbooks(params?: { featured?: boolean; limit?: number; offset?: number }) {
    const response = await api.get('/workbooks', { params });
    return response.data;
  },

  async getWorkbook(id: string) {
    const response = await api.get(`/workbooks/${id}`);
    return { success: true, data: response.data };
  },

  async createWorkbook(workbookData: any) {
    const response = await api.post('/workbooks', workbookData);
    return response.data;
  },

  async toggleFavorite(workbookId: string) {
    const response = await api.post(`/workbooks/${workbookId}/favorite`);
    return response.data;
  },

  // User methods
  async getUser(id: string) {
    const response = await api.get(`/users/${id}`);
    return response.data;
  },

  async getUserStats(id: string) {
    const response = await api.get(`/users/${id}/stats`);
    return response.data;
  },

  async getUserWorkbooks(id: string) {
    const response = await api.get(`/users/${id}/workbooks`);
    return response.data;
  },

  async getUserFavorites(id: string) {
    const response = await api.get(`/users/${id}/favorites`);
    return response.data;
  },

  // Sigma methods
  async generateEmbed(embedData: any) {
    const response = await api.post('/sigma/embed', embedData);
    return response.data;
  },

  // Tags methods
  async getTags() {
    const response = await api.get('/tags');
    return response.data;
  },
};

// Extend the api object with methods
Object.assign(api, apiMethods);

export default api;
