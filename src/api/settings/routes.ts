export const apiRoutes = {
  BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || '',
  SIGN_IN: '/auth/sign-in',
  SIGN_UP: '/auth/sign-up',
  VERIFY_CODE: '/auth/verify-code',
  REFRESH_TOKEN: '/auth/refresh-token',
  USERS: '/users',
} as const;
