import React, { Component } from 'react';
import PropTypes from 'prop-types';
import sanitizeHtml from 'sanitize-html';

export class CustomerResponse extends Component {

  render() {
    const { answers } = this.props;
    if(!answers) return <div>...Loading</div>;

    return(
      <div className="customer__response">
        <section className="customer__response__header">
          <h3 className="header">We Have Received your Complaint</h3>
          <p className="instruction">Your response has been sent to our customer representative. We will get back to your soon</p>
        </section>
        <hr />
        <div className="customer__response__answers">
          {answers.map((answer, index) => (
            <div key={index} className="customer__response__answer">
              <p className="question">Questions {index + 1}: <span>{answer.text}</span></p>
              <span dangerouslySetInnerHTML={{__html: sanitizeHtml(answer.reply)}} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

CustomerResponse.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
    reply: PropTypes.string,
  })).isRequired
}

export default CustomerResponse;