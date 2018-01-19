import {
  LOAD_NEXT_QUESTION,
  SEND_CUSTOMER_RESPONSE
} from '../actions/types';
import { questions } from '../__mocks__/data.json';

const initialState = {
  questions: questions,
  newQuestion: questions[0],
  answers: []
}

// For easy lookup 0(1)
const convertJSonToObject = () => {
  return questions.reduce((memo, item) => {
    memo[item.id] = item;
    return memo;
  }, {});
};

const newMockData = convertJSonToObject();

export default (state=initialState, action) => {
  switch(action.type) {
    case LOAD_NEXT_QUESTION:
      return {
        ...state,
        answers: state.answers.concat(action.response),
        newQuestion: newMockData[action.response.next]
      };
    case SEND_CUSTOMER_RESPONSE:
      return  {
        ...state,
        answers: state.answers.concat(action.response)
      }
    default: 
      return state;
  }
}