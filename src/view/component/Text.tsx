import { ClassAttributes, createElement, ReactNode } from 'react';
import styled from '../../core/emotion';
import Theme from '../../core/Theme';

type Props = ClassAttributes<HTMLElement> & {
  type?: TypographyVariant;
  sentence?: boolean;
  className?: string;
  children?: ReactNode;
};

type TypographyVariant = keyof Theme['typography'];

const Text = ({ type = 'body1', sentence = false, className, children }: Props) => (
  <Root _variant={type} sentence={sentence} className={className}>
    {children}
  </Root>
);

const Root = styled<{ _variant: TypographyVariant; sentence: boolean }, 'span'>('span')`
  display: block;
  line-height: ${({ sentence }) => (sentence ? 1.5 : 1)};
  color: #fff;
  font-family: ${({ _variant, theme }) => theme.typography[_variant].family};
  -webkit-font-smoothing: antialiased;
  font-size: ${({ _variant, theme }) => theme.typography[_variant].size}px;
  font-weight: ${({ _variant, theme }) => theme.typography[_variant].weight};
  font-style: ${({ _variant, theme }) => (theme.typography[_variant].italic ? 'italic' : 'normal')};
`;

export default Text;
