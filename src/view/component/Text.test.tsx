import { render, shallow } from 'enzyme';
import { createElement } from 'react';
import Text from './Text';

describe('<Text>', () => {
  test('it matches with the previous snapshot (props.type="body1")', () => {
    expect(render(<Text type="body1">text</Text>)).toMatchSnapshot();
  });

  test('it matches with the previous snapshot (props.type="body2")', () => {
    expect(render(<Text type="body2">text</Text>)).toMatchSnapshot();
  });

  test('it matches with the previous snapshot (props.type="heading1")', () => {
    expect(render(<Text type="heading1">text</Text>)).toMatchSnapshot();
  });

  test('it matches with the previous snapshot (props.type="heading2")', () => {
    expect(render(<Text type="heading2">text</Text>)).toMatchSnapshot();
  });

  test('it matches with the previous snapshot (props.type="heading3")', () => {
    expect(render(<Text type="heading3">text</Text>)).toMatchSnapshot();
  });

  test('it matches with the previous snapshot (props.type="heading4")', () => {
    expect(render(<Text type="heading4">text</Text>)).toMatchSnapshot();
  });

  test('it matches with the previous snapshot (props.type="heading5")', () => {
    expect(render(<Text type="heading5">text</Text>)).toMatchSnapshot();
  });

  test('it matches with the previous snapshot (props.sentence=true)', () => {
    expect(render(<Text sentence>text</Text>)).toMatchSnapshot();
  });

  test('it matches with the previous snapshot (props.type="heading2", props.sentence=true)', () => {
    expect(
      render(
        <Text type="heading2" sentence>
          text
        </Text>,
      ),
    ).toMatchSnapshot();
  });

  test('the default value of props.type is "body1"', () => {
    expect(shallow(<Text>text</Text>).props()._type).toBe('body1');
  });
});
