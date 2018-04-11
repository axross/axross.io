import { ClassAttributes, createElement, ReactNode } from 'react';
import Text from './Text';

type Props = ClassAttributes<HTMLElement> & {
  className?: string;
  children: ReactNode;
};

const Introduction = ({ className, children }: Props) => (
  <Text type="body1" sentence className={className}>
    {children}
  </Text>
);

export default Introduction;
