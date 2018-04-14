import { ClassAttributes, createElement, ReactElement } from 'react';
import styled from '../../../core/emotion';
import grid from '../../style/grid';
import Text from '../Text';
import { Props as ItemProps } from './ExpertisesItem';

type Props = ClassAttributes<HTMLElement> & {
  className?: string;
  children: ReactElement<ItemProps>[] | ReactElement<ItemProps>;
};

const Expertises = ({ className, children }: Props) => (
  <div className={className}>
    <Heading type="heading3">🎓 EXPERTISE</Heading>

    <Items>{children}</Items>
  </div>
);

const Heading = styled(Text)`
  margin-bottom: ${({ theme }) => theme.spacing.huge}px;
`;

const Items = styled('ul')`
  ${grid({ columns: 3, gap: 'huge' })};  
`;

export default Expertises;
