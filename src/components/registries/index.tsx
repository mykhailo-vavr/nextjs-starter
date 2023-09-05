import { FCWithChildren } from '@/types';
import StyledComponentsRegistry from './StyledComponents';
import AntdRegistry from './Antd';

const Registries: FCWithChildren = ({ children }) => (
  <StyledComponentsRegistry>
    <AntdRegistry>{children}</AntdRegistry>
  </StyledComponentsRegistry>
);

export default Registries;
