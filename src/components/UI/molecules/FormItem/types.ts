import { FC } from '@/types';
import { FormItemProps as AntdFormItemProps } from 'antd';
import { Schema } from 'yup';

type FormItemProps = { schema?: Schema } & AntdFormItemProps;

export type FormItemFC = FC<FormItemProps>;
