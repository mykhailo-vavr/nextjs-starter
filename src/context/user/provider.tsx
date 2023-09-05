'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { tokenService } from '@/services';
import { userService } from '@/api/services';
import { FCWithChildren } from '@/types';
import { UserContext } from './context';
import { UserContextType, UserState } from './types';

const initialState: UserState = {
  id: 0,
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const UserProvider: FCWithChildren = ({ children }) => {
  const [user, setUser] = useState(initialState);
  const [loading, setLoading] = useState(true);

  const setUserState = useCallback(async () => {
    const accessToken = tokenService.decode.access();

    if (!accessToken?.user?.id) {
      return;
    }

    const { data } = await userService.getUser(accessToken.user.id);

    if (!data) {
      return;
    }

    setUser(data);
  }, []);

  const clearUserState = useCallback(() => {
    setUser(initialState);
  }, []);

  const contextValue: UserContextType = useMemo(
    () => ({
      state: user,
      setUserState,
      clearUserState,
    }),
    [clearUserState, setUserState, user],
  );

  useEffect(() => {
    setLoading(true);

    const asyncWrapper = async () => {
      try {
        await contextValue.setUserState();
      } catch (error) {
        console.error(error);
      }
    };

    asyncWrapper()
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return null;
  }

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};
