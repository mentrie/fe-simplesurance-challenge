import React from 'react'
import PropTypes from 'prop-types';
import TextArea from 'react-autosize-textarea';

const TextInput = ({value, type, error, onChange, question, className="", ...restProps}) => {
  return (
    <div className="textinput">
      <label className="textinput__label">{value.text}</label>
      { type === 'string'?
        <TextArea 
          value={value.reply}
          onChange={onChange}
          placeholder={value.reply} 
          className={`${className} ${error? "has-error": ""}`}
          rows={5}
          {...restProps}
          required
        /> :
        <input
          type={type}
          value={value.reply}
          onChange={onChange}
          placeholder={value.reply} 
          className={`${className} ${error? "has-error": ""}`}
          required
          {...restProps}
        />
      }
      {error && <p classNam="error">{error}</p>}
    </div>
  )
}

TextInput.propTypes = {
  value: PropTypes.shape({
    next: PropTypes.any(['object', 'string']),
    text: PropTypes.string.isRequired,
    reply: PropTypes.string,
    type: PropTypes.string
  }),
  onChange: PropTypes.func.isRequired,
  sendCustomerResponse: PropTypes.func,
  error: PropTypes.string
}

export default TextInput;
