import { ThemeProvider } from 'emotion-theming';
import { createElement } from 'react';
import { create } from 'react-test-renderer';
import theme from '../../../theme';
import Introduction from '../Introduction';

describe('<Introduction>', () => {
  test('it matches with the previous snapshot', () => {
    const renderer = create(
      <ThemeProvider theme={theme}>
        <Introduction className="berlin">text</Introduction>
      </ThemeProvider>,
    );

    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
