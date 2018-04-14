import { ClassAttributes, createElement } from 'react';
import styled from '../../core/emotion';
import Text from './Text';

type Props = ClassAttributes<HTMLElement> & {
  className?: string;
};

const Header = ({ className }: Props) => (
  <Root className={className}>
    <Name type="heading5">@AXROSS</Name>

    <Title type="heading4">👨‍💻 Frontend Developer</Title>
  </Root>
);

const Root = styled('header')`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  grid-template-areas: 'name' 'title';
  align-content: center;
  width: 100%;
  height: 100vh;
`;

const Name = styled(Text)`
  grid-area: name;
  margin-bottom: ${({ theme }) => theme.spacing.regular}px;
`;

const Title = styled(Text)`
  grid-area: title;
  opacity: 0.5;
`;

export default Header;
