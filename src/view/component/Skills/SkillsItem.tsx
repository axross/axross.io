import glamorous from 'glamorous';
import { ClassAttributes, ComponentType, createElement } from 'react';
import theme from '../../../theme';
import { gridLayoutContainer, gridLayoutItem } from '../../styleUtility/gridLayout';
import Text from '../Text';
import { flexibleLayoutContainer } from '../../styleUtility/flexibleLayout';

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

    <Summary type="body2" sentence>
      {children}
    </Summary>
  </Root>
);

const Root = glamorous.li({
  ...gridLayoutContainer({
    columns: ['1fr'],
    rows: ['auto', 'auto'],
    areas: [['icon'], ['name'], ['summary']],
    justifyItems: 'center',
  }),
});

const Visual = glamorous.div({
  ...gridLayoutItem('icon'),
  ...flexibleLayoutContainer({
    alignItems: 'center',
    justifyContent: 'center',
  }),
  width: 96,
  height: 96,
  marginBottom: theme.spacing.large,
  background: '#fff',
  borderRadius: '50%',
});

const Icon = glamorous.svg({});

const Name = glamorous(Text)({
  ...gridLayoutItem('name'),
  marginBottom: theme.spacing.regular,
});

const Summary = glamorous(Text)({
  ...gridLayoutItem('summary'),
});

export default PrinciplesItem;
