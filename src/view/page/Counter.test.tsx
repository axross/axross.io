import { shallow } from 'enzyme';
import { createElement } from 'react';
import Counter from './Counter';

describe('<Counter>', () => {
  test('it matches with the previous snapshot', () => {
    const wrapper = shallow(
      <Counter count={5} onClickIncrement={() => undefined} onClickDecrement={() => undefined} />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('it fires onIncrement() when the first button is clicked', () => {
    const onClickIncrement = jest.fn();
    const event = Symbol('event');
    const wrapper = shallow(
      <Counter count={0} onClickIncrement={onClickIncrement} onClickDecrement={() => undefined} />,
    );

    wrapper
      .find('button')
      .first()
      .simulate('click', event);

    expect(onClickIncrement).toHaveBeenCalledWith(event);
  });

  test('it fires onDecrement() when the second button is clicked', () => {
    const onClickDecrement = jest.fn();
    const event = Symbol('event');
    const wrapper = shallow(
      <Counter count={0} onClickIncrement={() => undefined} onClickDecrement={onClickDecrement} />,
    );

    wrapper
      .find('button')
      .at(1)
      .simulate('click', event);

    expect(onClickDecrement).toHaveBeenCalledWith(event);
  });
});
