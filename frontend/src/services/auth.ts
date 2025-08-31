import { api } from './api';
import { SignUpData, SignInData, OTPData } from '../types/auth';

export const authService = {
  signup: async (data: SignUpData) => {
    const response = await api.post('/auth/signup', data);
    return response.data;
  },

  signin: async (data: SignInData) => {
    const response = await api.post('/auth/signin', data);
    return response.data;
  },

  verifyOTP: async (data: OTPData) => {
    const response = await api.post('/auth/verify-otp', data);
    return response.data;
  },

  googleAuth: async (googleData: any) => {
    const response = await api.post('/auth/google', googleData);
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  getCurrentUser: () => {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  },

  getToken: () => {
    return localStorage.getItem('token');
  },

  isAuthenticated: () => {
    return !!localStorage.getItem('token');
  }
};
