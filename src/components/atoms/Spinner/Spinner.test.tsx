import React from 'react';
import renderer from 'react-test-renderer';
import Spinner from '.';

test('Spinner snapshot testing', () => {
  const tree = renderer.create(<Spinner />).toJSON();
  expect(tree).toMatchSnapshot();
});
