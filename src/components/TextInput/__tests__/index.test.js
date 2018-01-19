import React from 'react'
import TextInput from '../index';

test('should render component', () => {
  const props = {
    value: {
      text: '',
      reply: ''
    }
  }
  const component = shallow(<TextInput {...props} />);
  expect(component).toMatchSnapshot();
});

test('It should render TextArea if question type is string', () => {
  const props = {
    value: {
      text: '',
      reply: ''
    },
    type: 'string',
    onChange: jest.fn()
  }

  const component = shallow(<TextInput {...props} />);
  expect(component).toMatchSnapshot();
  expect(component.find('TextareaAutosize').length).toBe(1);
});

test('It should render input tag if question type is not a string', () => {
  const props = {
    value: {
      text: '',
      reply: ''
    },
    type: 'date',
    onChange: jest.fn()
  }

  const component = shallow(<TextInput {...props} />);
  expect(component).toMatchSnapshot();
  expect(component.find('input').length).toBe(1);
});

