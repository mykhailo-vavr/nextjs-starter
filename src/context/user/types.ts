import { User } from '@/api/models';

export type UserState = Omit<User, 'password'>;

export type UserContextType = {
  state: UserState;
  setUserState: () => Promise<void>;
  clearUserState: () => void;
};
