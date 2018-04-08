import glamorous from 'glamorous';
import { ClassAttributes, ComponentType, createElement } from 'react';
import theme from '../../../theme';
import Expertise from '../../../entity/Expertise';
import { gridLayoutContainer, gridLayoutItem } from '../../styleUtility/gridLayout';
import { Css, Dart, Flutter, GraphQL, Html, JavaScript, Nodejs, React, TypeScript } from '../Icon';
import Text from '../Text';

export type Props = ClassAttributes<HTMLElement> & {
  expertise: Expertise;
  className?: string;
};

const ExpertisesItem = ({ expertise, className }: Props) => {
  let icon: ComponentType<any>;
  let name: string;

  switch (expertise.type) {
    case 'HTML':
      icon = Html;
      name = 'HTML';
      break;
    case 'CSS':
      icon = Css;
      name = 'CSS';
      break;
    case 'JAVASCRIPT':
      icon = JavaScript;
      name = 'JavaScript';
      break;
    case 'TYPESCRIPT':
      icon = TypeScript;
      name = 'TypeScript';
      break;
    case 'DART':
      icon = Dart;
      name = 'Dart';
      break;
    case 'NODEJS':
      icon = Nodejs;
      name = 'Node.js';
      break;
    case 'REACT':
      icon = React;
      name = 'React';
      break;
    case 'GRAPHQL':
      icon = GraphQL;
      name = 'GraphQL';
      break;
    case 'FLUTTER':
      icon = Flutter;
      name = 'Flutter';
      break;
    default:
      throw new Error();
  }

  return (
    <Root className={className}>
      {createElement(Icon.withComponent(icon), { size: 80 } as any)}

      <Name type="body2">{name}</Name>
    </Root>
  );
};

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
