import { ClassAttributes, createElement } from 'react';
import styled from '../../../core/emotion';
import Expertise from '../../../entity/Expertise';
import ExpertiseIcon from '../ExpertiseIcon';
import Text from '../Text';

export type Props = ClassAttributes<HTMLElement> & {
  expertise: Expertise;
  className?: string;
};

const ExpertisesItem = ({ expertise, className }: Props) => (
  <Root className={className}>
    <Icon type={expertise.iconType} size={80} />

    <Name type="headline6">{expertise.name}</Name>
  </Root>
);

const Root = styled('li')`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  grid-template-areas: 'icon' 'name';
  justify-items: center;
`;

const Icon = styled(ExpertiseIcon)`
  grid-area: icon;
  margin-bottom: ${({ theme }) => theme.spacing.regular}px;
`;

const Name = styled(Text)`
  grid-area: name;
`;

export default ExpertisesItem;
