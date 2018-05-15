import { createElement } from 'react';
import { create } from 'react-test-renderer';
import AspectRatioFixedImage from '../AspectRatioFixedImage';

describe('<AspectRatioFixedImage>', () => {
  test('it matches with the previous snapshot', () => {
    const renderer = create(<AspectRatioFixedImage src="https://loremflickr.com/320/240" aspectRatio={[320, 240]} />);

    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
