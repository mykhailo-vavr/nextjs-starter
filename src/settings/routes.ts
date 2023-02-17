export const webRoutes = {
  public: {
    LANDING_PAGE: '/',
    ERROR_404: '/404',
    SIGN_UP: '/sign-up',
    SIGN_IN: '/sign-in',
    VERIFY_CODE: '/verify-code',
  },
  private: {
    PROFILE: '/profile',
  },
} as const;
