import { Error404 } from '@/components/containers';
import { MainLayout } from '@/components/layouts';
import { NextPageWithLayout } from '@/types';

const Page: NextPageWithLayout = () => <Error404 />;

Page.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Page;
