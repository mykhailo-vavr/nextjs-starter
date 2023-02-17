import { PropsWithChildren, FC } from 'react';

export type { FC, ReactElement, ReactNode, ComponentProps } from 'react';

export type FCWithChildren<T = any> = FC<PropsWithChildren & T>;
