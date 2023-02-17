import { apiRoutes } from '../settings';
import { getApiData } from '../request';
import { User } from '../models';

export const userService = {
  async getUser(id: number) {
    return getApiData<User>(`${apiRoutes.USERS}/${id}`);
  },
};
