import glamorous from 'glamorous';
import { ClassAttributes, createElement, MouseEventHandler } from 'react';

type Props = ClassAttributes<HTMLElement> & {
  count: number;
  onClickIncrement: MouseEventHandler<HTMLElement>;
  onClickDecrement: MouseEventHandler<HTMLElement>;
  className?: string;
};

const Counter = ({ count, onClickIncrement, onClickDecrement, className }: Props) => (
  <Root className={className}>
    count: {count}
    <button onClick={onClickIncrement}>increment</button>
    <button onClick={onClickDecrement}>decrement</button>
  </Root>
);

const Root = glamorous.div({});

export default Counter;
