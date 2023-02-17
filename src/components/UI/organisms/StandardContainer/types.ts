import { FC, ReactNode } from '@/types';

export type StandardContainerProps = {
  children: ReactNode;
  title?: string;
  className?: string;
};

export type StandardContainerFC = FC<StandardContainerProps>;
