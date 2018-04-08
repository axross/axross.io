import glamorous from 'glamorous';
import { ClassAttributes, createElement, ReactElement } from 'react';
import theme from '../../../theme';
import Text from '../Text';
import { Props as ItemProps } from './SkillsItem';
import { flexibleLayoutContainer, flexibleLayoutItem } from '../../styleUtility/flexibleLayout';

type Props = ClassAttributes<HTMLElement> & {
  rows: number;
  className?: string;
  children: ReactElement<ItemProps>[] | ReactElement<ItemProps>;
};

const Principles = ({ rows, className, children }: Props) => (
  <Root className={className}>
    <Heading type="heading">🎨 SKILLS AND ATTITUDE</Heading>

    <Items rows={rows}>{children}</Items>
  </Root>
);

const Root = glamorous.div({});

const Heading = glamorous(Text)({ marginBottom: theme.spacing.huge });

const Items = glamorous.ul(({ rows }: { rows: number }) => ({
  ...flexibleLayoutContainer({
    direction: 'row',
    wrap: 'wrap',
    alignItems: 'flex-start',
  }),
  '& > *': {
    ...flexibleLayoutItem({
      basis: `calc((100% - ${theme.spacing.large}px * ${rows - 1}) / ${rows})`,
    }),
    marginBottom: theme.spacing.huge,
    marginRight: theme.spacing.large,
  },
  [`& > *:nth-child(${rows}n)`]: {
    marginRight: 0,
  },
  [`& > :nth-last-child(-n+${rows})`]: {
    marginBottom: 0,
  },
}));

export default Principles;
