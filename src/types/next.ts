import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from './components';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
