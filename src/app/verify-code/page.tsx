'use client';

import { VerifyCode } from '@/components/containers';
import { useRedirectToProfile } from '@/hooks';
import { NextPage } from '@/types';

const Page: NextPage = () => {
  useRedirectToProfile();

  return <VerifyCode />;
};

export default Page;
