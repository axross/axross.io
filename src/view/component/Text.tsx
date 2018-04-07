import glamorous, { CSSProperties } from 'glamorous';
import { ClassAttributes, createElement, ReactNode } from 'react';

type Type = 'default' | 'heading2' | 'body1' | 'body2' | 'sub' | 'heading' | 'name' | 'title';

type Props = ClassAttributes<HTMLElement> & {
  type: Type;
  sentence?: boolean;
  className?: string;
  children?: ReactNode;
};

const Text = ({ type, sentence, className, children }: Props) => (
  <Root type={type} sentence={sentence} className={className}>
    {children}
  </Root>
);

const TYPE: Record<Type, CSSProperties> = {
  default: {
    fontSize: 14,
    fontWeight: 400,
  },
  heading2: {
    fontSize: 24,
    fontWeight: 400,
  },
  body1: {
    fontSize: 20,
    fontWeight: 400,
  },
  body2: {
    fontSize: 16,
    fontWeight: 400,
  },
  sub: {
    fontSize: 14,
    fontWeight: 400,
  },
  heading: {
    fontSize: 45,
    fontWeight: 900,
  },
  name: {
    fontSize: 112,
    fontWeight: 900,
  },
  title: {
    fontSize: 56,
    fontWeight: 900,
  },
};

const Root = glamorous.span(({ type, sentence }: { type: Type; sentence?: boolean }) => ({
  display: 'block' as any,
  lineHeight: sentence ? 1.5 : 1,
  color: '#fff',
  fontFamily: 'Montserrat',
  WebkitFontSmoothing: 'antialiased',
  ...TYPE[type],
}));

export default Text;
