import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import Flex from '.';
import theme from '../../../constants/theme';

test('Flex snapshot testing', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={theme}>
        <Flex>Flex</Flex>
      </ThemeProvider>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
