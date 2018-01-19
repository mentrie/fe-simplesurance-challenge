import React from 'react';
import CustomerResponse from '../index';
import {questions} from '../../../__mocks__/data.json';

test('should render component properly', () => {
  const component = shallow(<CustomerResponse answers={questions}/>);
  expect(component).toMatchSnapshot();
});