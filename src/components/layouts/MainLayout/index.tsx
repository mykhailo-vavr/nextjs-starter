'use client';

import { Header } from '@/components/UI/organisms';
import { Wrapper, Content } from './styles';
import { MainLayoutFC } from './types';

const MainLayout: MainLayoutFC = ({ children }) => (
  <Wrapper>
    <Header />
    <Content>{children}</Content>
  </Wrapper>
);

export default MainLayout;
