import Link from 'next/link';
import { ComponentProps, FC } from '@/types';
import { Wrapper } from './styles';

type LinkProps = ComponentProps<typeof Link> & ComponentProps<typeof Wrapper>;

export type LinkFC = FC<LinkProps>;
