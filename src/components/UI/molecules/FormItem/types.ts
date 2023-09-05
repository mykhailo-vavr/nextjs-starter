import { ComponentProps, FC } from '@/types';
import { Form } from 'antd';
import { Schema } from 'yup';

type FormItemProps = { schema?: Schema } & ComponentProps<typeof Form.Item>;

export type FormItemFC = FC<FormItemProps>;
