import jwt from 'jsonwebtoken';
import { JwtPayload } from '@/types';

export const decode = <T extends Record<string, any>>(token: string) =>
  jwt.decode(token, { json: true }) as null | (JwtPayload & T);
