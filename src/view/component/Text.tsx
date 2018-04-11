import { ClassAttributes, createElement, ReactNode } from 'react';
import styled from '../../core/emotion';

type Type = 'default' | 'heading2' | 'body1' | 'body2' | 'sub' | 'heading' | 'name' | 'title';

type Props = ClassAttributes<HTMLElement> & {
  type: Type;
  sentence?: boolean;
  className?: string;
  children?: ReactNode;
};

const Text = ({ type, sentence = false, className, children }: Props) => (
  <Root type={type} sentence={sentence} className={className}>
    {children}
  </Root>
);

const TYPE: Record<Type, string> = {
  default: `
    font-size: 14px;
    font-weight: 400;
  `,
  heading2: `
    font-size: 24px;
    font-weight: 400;
  `,
  body1: `
    font-size: 20px;
    font-weight: 400;
  `,
  body2: `
    font-size: 16px;
    font-weight: 400;
  `,
  sub: `
    font-size: 14px;
    font-weight: 400;
  `,
  heading: `
    font-size: 45px;
    font-weight: 900;
  `,
  name: `
    font-size: 112px;
    font-weight: 900;
  `,
  title: `
    font-size: 56px;
    font-weight: 900;
  `,
};

const Root = styled<{ type: Type; sentence: boolean }, 'span'>('span')`
  display: block;
  line-height: ${({ sentence }) => (sentence ? 1.5 : 1)};
  color: #fff;
  font-family: Montserrat;
  -webkit-font-smoothing: antialiased;
  ${({ type }) => TYPE[type]};
`;

export default Text;
