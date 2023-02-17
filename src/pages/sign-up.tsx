import { SignUp } from '@/components/containers';
import { MainLayout } from '@/components/layouts';
import { useRedirectToProfile } from '@/hooks';
import { NextPageWithLayout } from '@/types';

const Page: NextPageWithLayout = () => {
  useRedirectToProfile();

  return <SignUp />;
};

Page.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Page;
