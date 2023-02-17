import { apiRoutes } from '../settings';

export type ApiRoute = Omit<typeof apiRoutes, 'BASE_URL'>[keyof Omit<typeof apiRoutes, 'BASE_URL'>];

export type ExtendedApiRoute = `${ApiRoute}${string}`;
