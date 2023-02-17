import { apiRoutes } from '../settings';
import { useFetchApi } from './useFetchApi';
import { GetUsersRequest, User } from '../models';

export const useGetUsers = (params: GetUsersRequest) =>
  useFetchApi<User[]>(apiRoutes.USERS, {
    params,
  });
