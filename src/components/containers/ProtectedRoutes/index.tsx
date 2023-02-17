import { useEffect, useMemo, useState } from 'react';
import { useRedirect, useSignOut, useUser } from '@/hooks';
import { webRoutes } from '@/settings';
import { FCWithChildren, PublicWebRoute, ReactElement } from '@/types';
import { tokenService } from '@/services';
import { authenticationService } from '@/api';
import { useRouter } from 'next/router';

const ProtectedRoutes: FCWithChildren = ({ children }) => {
  const { isAuthenticated } = useUser();
  const { pathname } = useRouter();
  const redirect = useRedirect();
  const signOut = useSignOut();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const accessToken = tokenService.get.access();
    const refreshToken = tokenService.get.refresh();

    const asyncWrapper = async () => {
      if (!isAuthenticated) {
        return;
      }

      // To sign out when clear localStorage
      if (!accessToken || !refreshToken) {
        signOut();
        return;
      }

      const isAccessTokenExpired = tokenService.expired.access();
      const isRefreshTokenExpired = tokenService.expired.refresh();

      if (isAccessTokenExpired && isRefreshTokenExpired) {
        signOut();
        return;
      }

      if (isAccessTokenExpired && !isRefreshTokenExpired) {
        setLoading(true);
        const { data } = await authenticationService.refreshToken({ refreshToken });

        if (data?.accessToken) {
          tokenService.set.access(data.accessToken);
        }
      }
    };

    asyncWrapper()
      .catch((e) => {
        console.error(e);
        signOut();
      })
      .finally(() => setLoading(false));
  });

  const isPublicRoute = useMemo(() => Object.values(webRoutes.public).includes(pathname as PublicWebRoute), [pathname]);

  if (loading) {
    return null;
  }

  if (isPublicRoute) {
    return children as ReactElement;
  }

  if (!isAuthenticated) {
    redirect(webRoutes.public.ERROR_404);
  }

  return children as ReactElement;
};

export default ProtectedRoutes;
