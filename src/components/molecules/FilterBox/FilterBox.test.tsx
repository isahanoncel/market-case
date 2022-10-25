import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import FilterBox from '.';
import theme from '../../../constants/theme';

test('FilterBox snapshot testing', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={theme}>
        <FilterBox
          items={[
            { key: 'key1', value: 'value 1' },
            { key: 'key2', value: 'value 2' },
          ]}
          title="Brands"
        />
      </ThemeProvider>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
