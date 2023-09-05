'use client';

import { SignUp } from '@/components/containers';
import { useRedirectToProfile } from '@/hooks';
import { NextPage } from '@/types';

const Page: NextPage = () => {
  useRedirectToProfile();

  return <SignUp />;
};

export default Page;
