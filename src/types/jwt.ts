import { JwtPayload as BaseJwtPayload } from 'jsonwebtoken';

export type JwtPayload<T extends Record<string, any> = Record<string, never>> = BaseJwtPayload & T;

export enum TokensTypeEnum {
  ACCESS_TOKEN = 'accessToken',
  REFRESH_TOKEN = 'refreshToken',
  VERIFICATION_TOKEN = 'verificationToken',
}
