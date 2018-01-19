import React, { Component } from 'react';
import { connect } from 'react-redux';
// import QuestionsPage from './QuestionPage';

export class CustomerResponse extends Component {

  render() {
    const { answers } = this.props;
    if(!answers) return <div>...Loading</div>;
    return(
      <div className="customer__response">
        <h3>Your Response</h3>
        <p>Your response has been sent to our customer care. We'll get back to your soon</p>
        {answers.map((answer, index) => (
          <div className="response">
            <p>{answer.reply}</p>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({answers}) => ({
  answers
});

export default connect(mapStateToProps)(CustomerResponse);