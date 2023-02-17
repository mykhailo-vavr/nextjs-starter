import { ComponentProps } from '@/types';
import { ListProps as AntListProps } from 'antd';
import { Wrapper } from './styles';

export type ListProps<T> = AntListProps<T> & ComponentProps<typeof Wrapper>;
