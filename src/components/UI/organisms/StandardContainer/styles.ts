import { boxShadow, size } from '@/utils';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${size(6)};
  width: 100%;
  border-radius: ${size(8)};

  .content {
    border-radius: ${size(8)};
    padding: ${size(16)};
    ${boxShadow(2, 0, 32, 2, 'rgba(0, 0, 0, 0.2)')};
  }
`;
