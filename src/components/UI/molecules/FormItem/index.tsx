import { yupSync } from '@/utils';
import { Wrapper } from './styles';
import { FormItemFC } from './types';

const FormItem: FormItemFC = ({ schema, name, required, ...props }) => (
  <Wrapper rules={schema && name ? yupSync(String(name), schema, required) : undefined} name={name} {...props} />
);

export default FormItem;
