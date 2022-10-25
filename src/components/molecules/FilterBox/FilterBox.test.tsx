import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import FilterBox from '.';
import theme from '../../../constants/theme';
import store from '../../../store';

test('FilterBox snapshot testing', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <FilterBox
            items={[
              { key: 'key1', value: 'value 1' },
              { key: 'key2', value: 'value 2' },
            ]}
            title="Brands"
          />
        </ThemeProvider>
      </Provider>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
