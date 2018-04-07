import glamorous from 'glamorous';
import { ClassAttributes, createElement } from 'react';
import Text from './Text';

type Props = ClassAttributes<HTMLElement> & {
  className?: string;
};

const Introduction = ({ className }: Props) => (
  <Root type="body1" sentence className={className}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </Root>
);

const Root = glamorous(Text)({});

export default Introduction;
