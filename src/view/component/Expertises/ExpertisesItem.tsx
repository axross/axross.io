import glamorous from 'glamorous';
import { ClassAttributes, ComponentType, createElement } from 'react';
import theme from '../../../theme';
import { gridLayoutContainer, gridLayoutItem } from '../../styleUtility/gridLayout';
import Text from '../Text';

export type Props = ClassAttributes<HTMLElement> & {
  icon: ComponentType<any>;
  name: string;
  className?: string;
};

const ExpertisesItem = ({ icon, name, className }: Props) => (
  <Root className={className}>
    {createElement(Icon.withComponent(icon), { size: 80 } as any)}

    <Name type="body2">{name}</Name>
  </Root>
);

const Root = glamorous.li({
  ...gridLayoutContainer({
    columns: ['1fr'],
    rows: ['auto', 'auto'],
    areas: [['icon'], ['name']],
    justifyItems: 'center',
  }),
});

const Icon = glamorous.svg({
  ...gridLayoutItem('icon'),
  marginBottom: theme.spacing.regular,
});

const Name = glamorous(Text)({
  ...gridLayoutItem('name'),
});

export default ExpertisesItem;
