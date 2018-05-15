import { ThemeProvider } from 'emotion-theming';
import { createElement } from 'react';
import { create } from 'react-test-renderer';
import theme from '../../../theme';
import Footer from '../Footer';

describe('<Footer>', () => {
  test('it matches with the previous snapshot', () => {
    const renderer = create(
      <ThemeProvider theme={theme}>
        <Footer className="rome" />
      </ThemeProvider>,
    );

    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
