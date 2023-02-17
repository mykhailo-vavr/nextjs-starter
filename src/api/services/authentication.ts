import { tokenService } from '@/services';
import { apiRoutes } from '../settings';
import { getApiData, postApiData } from '../request';
import {
  AuthCredentials,
  BaseResponse,
  RefreshTokenRequest,
  SignInRequest,
  SignUpRequest,
  VerificationCredentials,
  VerifyCodeRequest,
} from '../models';

export const authenticationService = {
  async signUp(requestBody: SignUpRequest) {
    return postApiData<BaseResponse>(apiRoutes.SIGN_UP, requestBody);
  },

  async signIn(requestBody: SignInRequest) {
    return postApiData<VerificationCredentials>(apiRoutes.SIGN_IN, requestBody);
  },

  async verifyCode(requestBody: VerifyCodeRequest) {
    return postApiData<AuthCredentials>(apiRoutes.VERIFY_CODE, requestBody, {
      headers: { Authorization: tokenService.get.verification() },
    });
  },

  async refreshToken(params: RefreshTokenRequest) {
    return getApiData<Pick<AuthCredentials, 'accessToken'>>(apiRoutes.REFRESH_TOKEN, { params });
  },
};
