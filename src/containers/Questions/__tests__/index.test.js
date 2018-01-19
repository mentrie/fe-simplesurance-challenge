import React from 'react'
import confiigureStore from 'redux-mock-store';
import { questions } from '../../../__mocks__/data.json';

import Questions from '../index';

describe('Container - Questions', () => {
  const initialState = {
    questions: questions
  }
  const mockStore = confiigureStore();
  let store, container;

  beforeEach(() => {
    store = mockStore(initialState);
    let props  = {
      onChange: jest.fn()
    }
    container = shallow(<Questions store={store} {...props}/>)
  })

  test('should render component properly', () => {
    expect(container).toMatchSnapshot();
  });

  test('should render QuestionsPage component', () => {
    expect(container.length).toEqual(1);
  });
});