import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import Label from '.';
import theme, { COLORS } from '../../../constants/theme';

test('Label snapshot testing', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={theme}>
        <Label color="black600" size={22} weight={600}>
          Getir Label
        </Label>
      </ThemeProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Label styles testing', () => {
  render(
    <ThemeProvider theme={theme}>
      <Label color="black600" size={29} weight={600}>
        Getir
      </Label>
    </ThemeProvider>,
  );
  expect(screen.getByText(/Getir/i)).toHaveStyle(
    `color: ${COLORS.black600};font-weight:600;font-size:29px`,
  );
});
