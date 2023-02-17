import { User } from './User';

export type GetUsersRequest = Partial<Pick<User, 'firstName' | 'lastName' | 'id'>>;
