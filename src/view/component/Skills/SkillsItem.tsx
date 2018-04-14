import { ClassAttributes, ComponentType, createElement } from 'react';
import styled from '../../../core/emotion';
import Text from '../Text';

export type Props = ClassAttributes<HTMLElement> & {
  icon: ComponentType<any>;
  name: string;
  className?: string;
  children: string;
};

const PrinciplesItem = ({ icon, name, children, className }: Props) => (
  <Root className={className}>
    <Visual>{createElement(Icon.withComponent(icon), { size: 64, color: '#3d5afe' } as any)}</Visual>

    <Name type="heading2">{name}</Name>

    <Summary sentence>{children}</Summary>
  </Root>
);

const Root = styled('div')`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr;
  grid-template-areas: 'icon' 'name' 'summary';
  justify-items: center;
`;

const Visual = styled('div')`
  grid-area: icon;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 96px;
  height: 96px;
  margin-bottom: ${({ theme }) => theme.spacing.large}px;
  background: #fff;
  border-radius: 50%;
`;

const Icon = styled('svg')``;

const Name = styled(Text)`
  grid-area: name;
  margin-bottom: ${({ theme }) => theme.spacing.regular}px;
`;

const Summary = styled(Text)`
  grid-area: summary;
`;

export default PrinciplesItem;
