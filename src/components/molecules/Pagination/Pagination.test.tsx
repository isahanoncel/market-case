import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import Pagination from '.';
import theme from '../../../constants/theme';
import store from '../../../store';

test('Pagination snapshot testing', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Pagination
            setPage={() => {}}
            itemLength={100}
            page={1}
            itemsPerPage={16}
          />
        </ThemeProvider>
      </Provider>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
