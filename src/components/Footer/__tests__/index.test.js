import React from 'react';
import Footer from '../index';

test('It should render component', () => {
  const component = shallow(<Footer />);
  expect(component).toMatchSnapshot();
});

test('It should render a link tag', () => {
  const component = shallow(<Footer />);
  expect(component.find('a').length).toBe(1);
});

