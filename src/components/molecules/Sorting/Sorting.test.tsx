import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import Sorting from '.';
import theme from '../../../constants/theme';
import store from '../../../store';

test('Sorting snapshot testing', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Sorting />
        </ThemeProvider>
      </Provider>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
