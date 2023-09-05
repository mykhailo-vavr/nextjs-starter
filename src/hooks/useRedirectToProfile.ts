'use client';

import { webRoutes } from '@/settings';
import { useUser } from './useUser';
import { useRedirect } from './useRedirect';

export const useRedirectToProfile = () => {
  const { isAuthenticated } = useUser();
  const redirect = useRedirect();

  if (isAuthenticated) {
    redirect(webRoutes.private.PROFILE);
  }
};
