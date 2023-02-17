import { VerifyCodeRequest } from '@/api';
import { FC } from '@/types';

export type VerifyCodeFC = FC;

export type VerifyCodeForm = Pick<VerifyCodeRequest, 'code'>;
