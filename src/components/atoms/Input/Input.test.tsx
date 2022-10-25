import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import Input from '.';
import theme from '../../../constants/theme';

test('Input snapshot testing', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={theme}>
        <Input onChange={() => {}} placeholder='Search...' />
      </ThemeProvider>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
