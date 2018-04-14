import { Children, ClassAttributes, createElement, ReactElement } from 'react';
import styled from '../../../core/emotion';
import Text from '../Text';
import { Props as ItemProps } from './WorkExperiencesItem';

type Props = ClassAttributes<HTMLElement> & {
  className?: string;
  children: ReactElement<ItemProps>[] | ReactElement<ItemProps>;
};

const JobExperiences = ({ className, children }: Props) => {
  const sortedChildren = (Children.toArray(children) as ReactElement<ItemProps>[]).sort(
    (a, b) => 0 - a.props.workExperience.compare(b.props.workExperience),
  );

  return (
    <div className={className}>
      <Heading type="heading3">🏢 WORK EXPERIENCE</Heading>

      <Items>{sortedChildren}</Items>
    </div>
  );
};

const Heading = styled(Text)`
  margin-bottom: ${({ theme }) => theme.spacing.huge}px;
`;

const Items = styled('ul')`
  display: grid;
  grid-gap: ${({ theme }) => theme.spacing.huge}px;
`;

export default JobExperiences;
