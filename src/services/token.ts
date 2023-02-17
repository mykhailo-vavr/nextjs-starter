import { TokensTypeEnum } from '@/types';
import { decode, getItem, removeItem, setItem } from '@/utils';

export const tokenService = {
  get: {
    verification: () => getItem(TokensTypeEnum.VERIFICATION_TOKEN),
    access: () => getItem(TokensTypeEnum.ACCESS_TOKEN),
    refresh: () => getItem(TokensTypeEnum.REFRESH_TOKEN),
  },

  set: {
    verification: (token: string) => setItem(TokensTypeEnum.VERIFICATION_TOKEN, token),
    access: (token: string) => setItem(TokensTypeEnum.ACCESS_TOKEN, token),
    refresh: (token: string) => setItem(TokensTypeEnum.REFRESH_TOKEN, token),
  },

  remove: {
    verification: () => removeItem(TokensTypeEnum.VERIFICATION_TOKEN),
    access: () => removeItem(TokensTypeEnum.ACCESS_TOKEN),
    refresh: () => removeItem(TokensTypeEnum.REFRESH_TOKEN),
  },

  decode: {
    verification() {
      const result = decode<{ user: { id: number; email: string } }>(tokenService.get.verification() || '');
      return result;
    },
    access: () => {
      const result = decode<{ user: { id: number } }>(tokenService.get.access() || '');
      return result;
    },
    refresh: () => {
      const result = decode<{ user: { id: number } }>(tokenService.get.refresh() || '');
      return result;
    },
  },

  expired: {
    access: () => {
      const accessTokenData = tokenService.decode.access();

      if (!accessTokenData) {
        throw new Error('There is no access token');
      }

      return Number(accessTokenData?.exp) * 1000 < Date.now();
    },
    refresh: () => {
      const refreshTokenData = tokenService.decode.refresh();

      if (!refreshTokenData) {
        throw new Error('There is no refresh token');
      }

      return Number(refreshTokenData?.exp) * 1000 < Date.now();
    },
  },
};
