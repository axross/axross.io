import { ClassAttributes, createElement, ReactNode } from 'react';
import styled from '../../core/emotion';

type Type = 'body1' | 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'heading5' | 'body2';

type Props = ClassAttributes<HTMLElement> & {
  type?: Type;
  sentence?: boolean;
  className?: string;
  children?: ReactNode;
};

const Text = ({ type = 'body1', sentence = false, className, children }: Props) => (
  <Root _type={type} sentence={sentence} className={className}>
    {children}
  </Root>
);

const TYPE: Record<Type, string> = {
  body1: `
    font-size: 16px;
    font-weight: 400;
  `,
  body2: `
    font-size: 14px;
    font-weight: 400;
  `,
  heading1: `
    font-size: 20px;
    font-weight: 400;
  `,
  heading2: `
    font-size: 24px;
    font-weight: 400;
  `,
  heading3: `
    font-size: 45px;
    font-weight: 900;
  `,
  heading4: `
    font-size: 56px;
    font-weight: 900;
  `,
  heading5: `
    font-size: 112px;
    font-weight: 900;
  `,
};

const Root = styled<{ _type: Type; sentence: boolean }, 'span'>('span')`
  display: block;
  line-height: ${({ sentence }) => (sentence ? 1.5 : 1)};
  color: #fff;
  font-family: Montserrat;
  -webkit-font-smoothing: antialiased;
  ${({ _type }) => TYPE[_type]};
`;

export default Text;
