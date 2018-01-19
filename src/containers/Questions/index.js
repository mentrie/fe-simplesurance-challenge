import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import QuestionsPage from './QuestionPage';
import CustomerResponse from '../../components/CustomerReponse';
import { fetchNextQuestion, sendCustomerResponse } from '../../actions/action-creators';

export class Questions extends Component {

  state = {
    question: Object.assign({}, this.props.newQuestion),
    togglePage: false,
    error: null
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
    if(!this.isValid()) {
      this.setState(({error}) => ({error: 'This is a required field. Please you must provide an answer'}));
      return;
    }
    if(this.state.question.next) {
      this.props.fetchNextQuestion(this.state.question);
      this.setState(({error}) => ({error: null}));      
    }
  }

  isValid() {

    const {question} = this.state;
    if(question.reply === '') return false;
    if(question.type === 'string' && typeof(question.reply) !== 'string') return false;
    if(question.type === 'date' && !moment(question.reply, 'YYYY-MM-DD', true).isValid()) return false;
    if(question.type === 'boolean' && typeof(question.reply) !== 'boolean' && !['yes', 'no'].includes(question.reply.toLowerCase())) return false;
    if(question.type === 'number' && !/[0-9]/.test(question.reply)) return false;

    return true;
  }

  sendCustomerResponse = () => {
    if(!this.isValid()) {
      this.setState(({error}) => ({error: 'You must provide the right answer type'}));
      return;
    }
    this.setState({togglePage: true, error: null}, () => this.props.sendCustomerResponse(this.state.question));
  }

  render() {
    const { question, togglePage, error } = this.state;
    const { answers } = this.props;

    if(!question && answers) return <div>Laoding....</div>;

    return(
      <div>
        {!togglePage ? <QuestionsPage 
          error={error}
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