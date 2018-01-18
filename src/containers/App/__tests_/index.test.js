import React from 'react';
import App from '../index'

it('renders without crashing', () => {
  const component = shallow(<App />);
  expect(component).toMatchSnapshot();
});

it('It should contain Footer component', () => {
  const component = shallow(<App />);
  expect(component.find('Footer').length).toBe(1);
})
