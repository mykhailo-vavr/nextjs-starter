import { apiRoutes } from '../settings';
import { useFetchApi } from './useFetchApi';
import { User } from '../models';

export const useGetUserByPk = (id: number) => useFetchApi<User>(`${apiRoutes.USERS}/${id}`);
