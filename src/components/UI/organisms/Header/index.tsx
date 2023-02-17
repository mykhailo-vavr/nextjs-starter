import { Button, Link } from '@/components/UI/atoms';
import { webRoutes } from '@/settings';
import { useSignOut, useUser } from '@/hooks';
import { Wrapper } from './styles';
import { HeaderFC } from './types';

const Header: HeaderFC = () => {
  const { isAuthenticated } = useUser();
  const signOut = useSignOut();

  return (
    <Wrapper>
      {isAuthenticated && (
        <>
          <div>
            <Link href={webRoutes.private.PROFILE}>Profile</Link>
          </div>
          <Button onClick={signOut}>Sign out</Button>
        </>
      )}
      {!isAuthenticated && (
        <div>
          <Link href={webRoutes.public.SIGN_UP}>Sign up</Link>
          <Link href={webRoutes.public.SIGN_IN}>Sign in</Link>
        </div>
      )}
    </Wrapper>
  );
};

export default Header;
