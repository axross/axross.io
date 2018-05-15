import { createElement } from 'react';
import { create } from 'react-test-renderer';
import { render, Simulate } from 'react-testing-library';
import Counter from './Counter';

describe('<Counter>', () => {
  test('it matches with the previous snapshot', () => {
    const renderer = create(
      <Counter count={5} onClickIncrement={() => undefined} onClickDecrement={() => undefined} />,
    );

    expect(renderer.toJSON()).toMatchSnapshot();
  });

  test('it fires onIncrement() when the first button is clicked', () => {
    const onClickIncrement = jest.fn();
    const event = { clientX: Date.now() };

    const { getByText } = render(
      <Counter count={0} onClickIncrement={onClickIncrement} onClickDecrement={() => undefined} />,
    );
    const incrementButton = getByText('increment');

    Simulate.click(incrementButton, event);

    expect(onClickIncrement).toHaveBeenCalledWith(expect.objectContaining(event));
  });

  test('it fires onDecrement() when the second button is clicked', () => {
    const onClickDecrement = jest.fn();
    const event = { clientX: Date.now() };

    const { getByText } = render(
      <Counter count={0} onClickIncrement={() => undefined} onClickDecrement={onClickDecrement} />,
    );
    const decrementButton = getByText('decrement');

    Simulate.click(decrementButton, event);

    expect(onClickDecrement).toHaveBeenCalledWith(expect.objectContaining(event));
  });
});
