import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import HomeTemplate from '.';
import theme from '../../../constants/theme';
import store from '../../../store';

test('HomeTemplate snapshot testing', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <HomeTemplate />
        </ThemeProvider>
      </Provider>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
