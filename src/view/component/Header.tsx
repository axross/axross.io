import glamorous from 'glamorous';
import { ClassAttributes, createElement } from 'react';
import Text from './Text';
import { gridLayoutContainer, gridLayoutItem } from '../styleUtility/gridLayout';
import theme from '../../theme';

type Props = ClassAttributes<HTMLElement> & {
  className?: string;
};

const Header = ({ className }: Props) => (
  <Root className={className}>
    <Name type="name">@AXROSS</Name>

    <Title type="title">👨‍💻 Frontend Developer</Title>
  </Root>
);

const Root = glamorous.header({
  ...gridLayoutContainer({
    columns: ['1fr'],
    rows: ['auto', 'auto'],
    areas: [['name'], ['title']],
    alignContent: 'center',
  }),
  width: '100%',
  height: 800,
});

const Name = glamorous(Text)({
  ...gridLayoutItem('name'),
  marginBottom: theme.spacing.regular,
});

const Title = glamorous(Text)({
  ...gridLayoutItem('title'),
  opacity: 0.5,
});

export default Header;
