import { FC } from '@/types';
import { Wrapper } from './styles';
import { ListProps } from './types';

const List: FC = <T,>(props: ListProps<T>) => <Wrapper {...props} />;

export default List;
