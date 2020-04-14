import React from 'react';
import renderer from 'react-test-renderer';
import Pagination from './pagination';

test('Pagination renders correctly', () => {
  const pageData = {
    pages: 2,
  };
  const tree = renderer
    .create(<Pagination pagedata={pageData} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
