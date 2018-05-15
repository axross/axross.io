import { ThemeProvider } from 'emotion-theming';
import { createElement } from 'react';
import { create } from 'react-test-renderer';
import theme from '../../../theme';
import Header from '../Header';

describe('<Header>', () => {
  test('it matches with the previous snapshot', () => {
    const renderer = create(
      <ThemeProvider theme={theme}>
        <Header className="amsterdam" />
      </ThemeProvider>,
    );

    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
