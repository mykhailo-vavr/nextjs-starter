'use client';

import { SignIn } from '@/components/containers';
import { useRedirectToProfile } from '@/hooks';
import { NextPage } from '@/types';

const Page: NextPage = () => {
  useRedirectToProfile();

  return <SignIn />;
};

export default Page;
