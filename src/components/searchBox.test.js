import React from 'react';
import renderer from 'react-test-renderer';
import SearchBox from './SearchBox';

test('Pagination renders correctly', () => {
  const pageData = {
    pages: 2,
  };

  const component = renderer.create(
    <SearchBox />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
