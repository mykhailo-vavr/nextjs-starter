import { webRoutes } from '@/settings';

export type PublicWebRoute = (typeof webRoutes.public)[keyof typeof webRoutes.public];

export type PrivateWebRoute = (typeof webRoutes.private)[keyof typeof webRoutes.private];

export type WebRoute = PublicWebRoute | PrivateWebRoute;
