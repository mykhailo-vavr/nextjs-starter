import { Profile } from '@/components/containers';
import { MainLayout } from '@/components/layouts';
import { NextPageWithLayout } from '@/types';

const Page: NextPageWithLayout = () => <Profile />;

Page.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Page;
