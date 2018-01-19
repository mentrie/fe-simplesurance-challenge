import {
  LOAD_NEXT_QUESTION,
  SEND_CUSTOMER_RESPONSE,
} from './types';


export const fetchNextQuestion = (response) => ({
  type: LOAD_NEXT_QUESTION,
  response
});

export const sendCustomerResponse = (response) => ({
  type: SEND_CUSTOMER_RESPONSE,
  response
});


