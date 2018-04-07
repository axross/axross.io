import glamorous from 'glamorous';
import { ClassAttributes, createElement, ReactElement } from 'react';
import theme from '../../../theme';
import { flexibleLayoutContainer } from '../../styleUtility/flexibleLayout';
import Text from '../Text';
import { Props as ItemProps } from './WorkExperiencesItem';

type Props = ClassAttributes<HTMLElement> & {
  className?: string;
  children: ReactElement<ItemProps>[] | ReactElement<ItemProps>;
};

const JobExperiences = ({ className, children }: Props) => (
  <Root className={className}>
    <Heading type="heading">🏢 WORK EXPERIENCE</Heading>

    <Items>{children}</Items>
  </Root>
);

const Root = glamorous.div({});

const Heading = glamorous(Text)({ marginBottom: theme.spacing.huge });

const Items = glamorous.ul({
  ...flexibleLayoutContainer({
    direction: 'column',
    alignItems: 'flex-start',
  }),
  '& > *': { marginBottom: theme.spacing.huge },
  '& > *:last-child': { marginBottom: 0 },
});

export default JobExperiences;
