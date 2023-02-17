import { StandardContainer } from '@/components/UI/organisms';
import { size } from '@/utils';
import styled from 'styled-components';

export const Wrapper = styled(StandardContainer)`
  .title {
    font-size: ${size(28)};
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: ${size(10)};
    font-size: ${size(20)};
  }
`;
