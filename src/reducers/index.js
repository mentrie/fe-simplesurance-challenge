import {
  LOAD_NEXT_QUESTION
} from '../actions/types';
import mockData from '../__mocks__/data.json';

const initialState = {
  questions: mockData,
  nextQuestion: mockData[0],
}

export default (state=initialState, action) => {
  switch(action.type) {
    case LOAD_NEXT_QUESTION:
      return state;
    default: 
      return state;
  }
}