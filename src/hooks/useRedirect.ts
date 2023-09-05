'use client';

import { useCallback } from 'react';
import { WebRoute } from '@/types';
import { notFound, useRouter } from 'next/navigation';
import { webRoutes } from '@/settings';

export const useRedirect = () => {
  const router = useRouter();

  return useCallback(
    (webRoute?: WebRoute) => {
      if (webRoute === webRoutes.public.ERROR_404) {
        notFound();
      }

      router.push(webRoute || '/');
    },
    [router],
  );
};
