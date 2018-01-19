import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionsPage from './QuestionPage';
import CustomerResponse from '../../containers/CustomerReponse';
import { fetchNextQuestion, sendCustomerResponse } from '../../actions/action-creators';


export class Questions extends Component {

  state = {
    question: Object.assign({}, this.props.newQuestion),
    togglePage: false,
  }

  componentWillReceiveProps(nextProps) {
    if(this.state.question.id !== nextProps.newQuestion.id) {
      this.setState({question: nextProps.newQuestion});
    }
  }
  handleOnChange = ({target: { value }}) => {
    this.setState({question: {...this.state.question, reply: value }});
  }

  onNextStep = () => {
    if(this.state.question.next) {
      this.props.fetchNextQuestion(this.state.question);
    }
  }

  sendCustomerResponse = () => {
    this.setState({togglePage: true}, () => 
      this.props.sendCustomerResponse(this.state.question));
    }

  render() {
    const { question, togglePage } = this.state;
    const { answers } = this.props;

    if(!question) return null;
    return(
      <div>
        {!togglePage ? <QuestionsPage 
          value={question}
          onChange={this.handleOnChange}
          onNextStep={this.onNextStep}
          sendCustomerResponse={this.sendCustomerResponse}
        /> : <CustomerResponse answers={answers}/> }
      </div>
    );
  }
}

const mapStateToProps = ({answers, newQuestion}) => ({
  answers,
  newQuestion
});

const mapDispatchToProps = {
  fetchNextQuestion,
  sendCustomerResponse
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions);