import { render } from 'enzyme';
import { createElement } from 'react';
import AspectRatioFixedImage from './AspectRatioFixedImage';

describe('<AspectRatioFixedImage>', () => {
  test('it matches with the previous snapshot', () => {
    const rendered = render(<AspectRatioFixedImage src="https://loremflickr.com/320/240" aspectRatio={[320, 240]} />);

    expect(rendered).toMatchSnapshot();
  });
});
