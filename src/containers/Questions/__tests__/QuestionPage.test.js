import React from 'react'
import QuestionPage from '../QuestionPage';

test('should render page correctly', () => {
  const props = {
    value: {
      type: '',
      next: null,
      text: 'Testing'
    }
  }

  const component = shallow(<QuestionPage {...props} />);
  expect(component).toMatchSnapshot()
});

test('should call on next question when button is clicked', () => {
  const props = {
    value: {
      type: '',
      next: '34',
      text: 'Testing'
    },
    onNextStep: jest.fn()
  }

  const component = mount(<QuestionPage {...props} />);
  component.find('button').simulate('click');
  expect(component.props().onNextStep).toHaveBeenCalled()
});