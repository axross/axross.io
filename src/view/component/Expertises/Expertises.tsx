import { ClassAttributes, createElement, ReactElement } from 'react';
import styled from '../../../core/emotion';
import Text from '../Text';
import { Props as ItemProps } from './ExpertisesItem';

type Props = ClassAttributes<HTMLElement> & {
  className?: string;
  children: ReactElement<ItemProps>[] | ReactElement<ItemProps>;
};

const Expertises = ({ className, children }: Props) => (
  <div className={className}>
    <Heading type="heading">🎓 EXPERTISE</Heading>

    <Items>{children}</Items>
  </div>
);

const Heading = styled(Text)`
  margin-bottom: ${({ theme }) => theme.spacing.huge}px;
`;

const Items = styled('ul')`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: ${({ theme }) => theme.spacing.huge}px;
`;

export default Expertises;
