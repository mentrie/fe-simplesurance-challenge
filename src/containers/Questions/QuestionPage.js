import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../../components/TextInput';

const QuestionPage = ({value, onChange, onNextStep, sendCustomerResponse, error}) => {
  const onClick = value.next? onNextStep: sendCustomerResponse
  return (
    <div className="questions">
      <section className="questions__header">
        <h3 className="header">Welcome To Customer Complaint Portal</h3>
        <p className="instruction">(Please, take your time to answer all the question to help us process your complaint).</p>
      </section>
      <TextInput 
        type={value.type}
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
 value: PropTypes.shape({
   text: PropTypes.string.isRequired,
   reply: PropTypes.string,
   type: PropTypes.string
 }),
 onChange: PropTypes.func.isRequired,
 sendCustomerResponse: PropTypes.func,
 error: PropTypes.string
}

export default QuestionPage