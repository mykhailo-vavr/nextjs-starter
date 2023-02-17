import { Wrapper } from './styles';
import { StandardContainerFC } from './types';

const StandardContainer: StandardContainerFC = ({ title, children, className }) => (
  <Wrapper className={className}>
    {title && <h2 className="title">{title}</h2>}
    <div className="content">{children}</div>
  </Wrapper>
);

export default StandardContainer;
