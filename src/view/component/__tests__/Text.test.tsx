import { ThemeProvider } from 'emotion-theming';
import { createElement } from 'react';
import { create } from 'react-test-renderer';
import theme from '../../../theme';
import Text from '../Text';

describe('<Text>', () => {
  test('it matches with the previous snapshot (props.type="body1")', () => {
    expect(
      create(
        <ThemeProvider theme={theme}>
          <Text type="body1">text</Text>
        </ThemeProvider>,
      ).toJSON(),
    ).toMatchSnapshot();
  });

  test('it matches with the previous snapshot (props.type="body2")', () => {
    expect(
      create(
        <ThemeProvider theme={theme}>
          <Text type="body2">text</Text>
        </ThemeProvider>,
      ).toJSON(),
    ).toMatchSnapshot();
  });

  test('it matches with the previous snapshot (props.type="heading1")', () => {
    expect(
      create(
        <ThemeProvider theme={theme}>
          <Text type="heading1">text</Text>
        </ThemeProvider>,
      ).toJSON(),
    ).toMatchSnapshot();
  });

  test('it matches with the previous snapshot (props.type="heading2")', () => {
    expect(
      create(
        <ThemeProvider theme={theme}>
          <Text type="heading2">text</Text>
        </ThemeProvider>,
      ).toJSON(),
    ).toMatchSnapshot();
  });

  test('it matches with the previous snapshot (props.type="heading3")', () => {
    expect(
      create(
        <ThemeProvider theme={theme}>
          <Text type="heading3">text</Text>
        </ThemeProvider>,
      ).toJSON(),
    ).toMatchSnapshot();
  });

  test('it matches with the previous snapshot (props.type="heading4")', () => {
    expect(
      create(
        <ThemeProvider theme={theme}>
          <Text type="heading4">text</Text>
        </ThemeProvider>,
      ).toJSON(),
    ).toMatchSnapshot();
  });

  test('it matches with the previous snapshot (props.type="heading5")', () => {
    expect(
      create(
        <ThemeProvider theme={theme}>
          <Text type="heading5">text</Text>
        </ThemeProvider>,
      ).toJSON(),
    ).toMatchSnapshot();
  });

  test('it matches with the previous snapshot (props.type=undefined)', () => {
    expect(
      create(
        <ThemeProvider theme={theme}>
          <Text type="body1">text</Text>
        </ThemeProvider>,
      ).toJSON(),
    ).toMatchSnapshot();
  });

  test('it matches with the previous snapshot (props.type="heading2", props.sentence=true)', () => {
    expect(
      create(
        <ThemeProvider theme={theme}>
          <Text type="heading2" sentence>
            text
          </Text>
        </ThemeProvider>,
      ).toJSON(),
    ).toMatchSnapshot();
  });
});
