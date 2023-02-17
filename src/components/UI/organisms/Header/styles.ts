import { size } from '@/utils';
import styled from 'styled-components';
import StandardContainer from '../StandardContainer';

export const Wrapper = styled(StandardContainer)`
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 0 0 ${size(10)} ${size(10)};

    div {
      display: flex;
      gap: ${size(16)};
    }
  }
`;
