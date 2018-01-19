import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../../components/TextInput';

const QuestionPage = ({value, onChange, onNextStep, sendCustomerResponse, error}) => {
  const type = value.type === 'string'? 'text': value.type ;
  const onClick = value.next? onNextStep: sendCustomerResponse
  return (
    <div className="question__item">
      <TextInput 
        type={type}
        value={value}
        onChange={onChange}
        question={value.text}
        error={error}
      />
      <button className="question__next__btn" onClick={onClick}>Next</button>
    </div>
  );
}

QuestionPage.propTypes = {
  // Add validation here
}

export default QuestionPage