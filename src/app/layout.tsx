import { App } from '@/components/containers';
import { MainLayout } from '@/components/layouts';
import { NextLayout } from '@/types';

export const metadata = {
  title: 'Next.js starter',
  description: 'Next.js starter',
};

const Layout: NextLayout = ({ children }) => (
  <App>
    <MainLayout>{children}</MainLayout>
  </App>
);

export default Layout;
