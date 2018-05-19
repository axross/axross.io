import { ClassAttributes, createElement } from 'react';
import styled from '../../../core/emotion';
import Attitude from '../../../entity/Attitude';
import AttitudeIcon from '../AttitudeIcon';
import Text from '../Text';

export type Props = ClassAttributes<HTMLElement> & {
  attitude: Attitude;
  className?: string;
};

const AttitudesItem = ({ attitude, className }: Props) => (
  <Root className={className}>
    <Visual>{<AttitudeIcon type={attitude.iconType} size={64} color="#3d5afe" />}</Visual>

    <Name type="headline5">{attitude.name}</Name>

    <Summary sentence>{attitude.description}</Summary>
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

export default AttitudesItem;
