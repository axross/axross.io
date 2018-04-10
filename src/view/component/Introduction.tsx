import glamorous from 'glamorous';
import { ClassAttributes, createElement, ReactNode } from 'react';
import Text from './Text';

type Props = ClassAttributes<HTMLElement> & {
  className?: string;
  children: ReactNode;
};

const Introduction = ({ className, children }: Props) => (
  <Root type="body1" sentence className={className}>
    {children}
  </Root>
);

const Root = glamorous(Text)({});

export default Introduction;
