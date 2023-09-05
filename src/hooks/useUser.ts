'use client';

import { useUserContext } from '@/context/user';
import { tokenService } from '@/services';
import { useMemo } from 'react';

export const useUser = () => {
  const { state } = useUserContext();

  return useMemo(
    () => ({
      ...state,
      isAuthenticated: Boolean(state.id && tokenService.get.access() && tokenService.get.refresh()),
    }),
    [state],
  );
};
