export const API_ENDPOINTS = {
  AUTH: {
    SIGNUP: '/auth/signup',
    SIGNIN: '/auth/signin',
    VERIFY_OTP: '/auth/verify-otp',
    GOOGLE: '/auth/google',
  },
  NOTES: {
    GET_ALL: '/notes',
    CREATE: '/notes',
    UPDATE: (id: string) => `/notes/${id}`,
    DELETE: (id: string) => `/notes/${id}`,
  }
};

export const STORAGE_KEYS = {
  TOKEN: 'token',
  USER: 'user',
};

export const VALIDATION_MESSAGES = {
  EMAIL_REQUIRED: 'Email is required',
  EMAIL_INVALID: 'Please enter a valid email',
  PASSWORD_REQUIRED: 'Password is required',
  PASSWORD_MIN_LENGTH: 'Password must be at least 6 characters',
  NAME_REQUIRED: 'Name is required',
  OTP_REQUIRED: 'OTP is required',
  OTP_INVALID: 'OTP must be 6 digits',
  TITLE_REQUIRED: 'Title is required',
  CONTENT_REQUIRED: 'Content is required',
};

export const SUCCESS_MESSAGES = {
  SIGNUP_SUCCESS: 'Account created successfully! Please check your email for OTP.',
  LOGIN_SUCCESS: 'Welcome back!',
  OTP_VERIFIED: 'Email verified successfully!',
  NOTE_CREATED: 'Note created successfully!',
  NOTE_UPDATED: 'Note updated successfully!',
  NOTE_DELETED: 'Note deleted successfully!',
  LOGOUT_SUCCESS: 'Logged out successfully',
};

export const ERROR_MESSAGES = {
  GENERIC_ERROR: 'Something went wrong. Please try again.',
  NETWORK_ERROR: 'Network error. Please check your connection.',
  UNAUTHORIZED: 'Please login to continue',
  FORBIDDEN: 'You don\'t have permission to perform this action',
  NOT_FOUND: 'Resource not found',
  SERVER_ERROR: 'Server error. Please try again later.',
};
