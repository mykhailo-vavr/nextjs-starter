import { FC, ReactNode } from 'react';

export type { FC, ReactElement, ReactNode, ComponentProps } from 'react';

export type FCWithChildren<T = unknown> = FC<{ children: ReactNode } & T>;
