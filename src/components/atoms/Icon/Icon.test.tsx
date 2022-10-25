import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import Icon from '.';
import theme from '../../../constants/theme';

test('Icon snapshot testing', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={theme}>
        <Icon name="ArrowLeft" />
      </ThemeProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
