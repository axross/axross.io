import { ThemeProvider } from 'emotion-theming';
import { createElement } from 'react';
import { create } from 'react-test-renderer';
import theme from '../../../theme';
import Text from '../Text';

describe('<Text>', () => {
  test('it matches with the previous snapshot (props.type="headline1")', () => {
    expect(
      create(
        <ThemeProvider theme={theme}>
          <Text type="headline1">text</Text>
        </ThemeProvider>,
      ).toJSON(),
    ).toMatchSnapshot();
  });

  test('it matches with the previous snapshot (props.type="headline2")', () => {
    expect(
      create(
        <ThemeProvider theme={theme}>
          <Text type="headline2">text</Text>
        </ThemeProvider>,
      ).toJSON(),
    ).toMatchSnapshot();
  });

  test('it matches with the previous snapshot (props.type="headline3")', () => {
    expect(
      create(
        <ThemeProvider theme={theme}>
          <Text type="headline3">text</Text>
        </ThemeProvider>,
      ).toJSON(),
    ).toMatchSnapshot();
  });

  test('it matches with the previous snapshot (props.type="headline4")', () => {
    expect(
      create(
        <ThemeProvider theme={theme}>
          <Text type="headline4">text</Text>
        </ThemeProvider>,
      ).toJSON(),
    ).toMatchSnapshot();
  });

  test('it matches with the previous snapshot (props.type="headline5")', () => {
    expect(
      create(
        <ThemeProvider theme={theme}>
          <Text type="headline5">text</Text>
        </ThemeProvider>,
      ).toJSON(),
    ).toMatchSnapshot();
  });

  test('it matches with the previous snapshot (props.type="headline6")', () => {
    expect(
      create(
        <ThemeProvider theme={theme}>
          <Text type="headline6">text</Text>
        </ThemeProvider>,
      ).toJSON(),
    ).toMatchSnapshot();
  });

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

  test('it matches with the previous snapshot (props.type=undefined)', () => {
    expect(
      create(
        <ThemeProvider theme={theme}>
          <Text>text</Text>
        </ThemeProvider>,
      ).toJSON(),
    ).toMatchSnapshot();
  });

  test('it matches with the previous snapshot (props.type="headline2", props.sentence=true)', () => {
    expect(
      create(
        <ThemeProvider theme={theme}>
          <Text type="headline2" sentence>
            text
          </Text>
        </ThemeProvider>,
      ).toJSON(),
    ).toMatchSnapshot();
  });
});
