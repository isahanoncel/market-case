import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import Container from '.';
import theme from '../../../constants/theme';

test('Container snapshot testing', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={theme}>
        <Container>Container</Container>
      </ThemeProvider>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
