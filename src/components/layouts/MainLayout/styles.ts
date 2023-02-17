import { size } from '@/utils';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: min(90%, ${({ theme }) => theme.maxWidth});
  margin: 0 auto;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${size(12)} 0 0 0;
`;
