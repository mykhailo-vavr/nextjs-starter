import { Link } from '@/components/UI/atoms';
import { webRoutes } from '@/settings';
import { LandingFC } from './types';
import { Wrapper } from './styles';

const Landing: LandingFC = () => (
  <Wrapper title="Welcome to Chat App">
    <p>
      New one? Join our app <Link href={webRoutes.public.SIGN_UP}>Sign up</Link>
    </p>
    <p>
      Already have an account? <Link href={webRoutes.public.SIGN_IN}>Sign in</Link>
    </p>
  </Wrapper>
);

export default Landing;
