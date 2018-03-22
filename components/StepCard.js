import React from 'react';
import styles from './StepCard.css';
import { connect } from 'react-redux';
import {
  ADD_ANSWER_CHOICE,
  CHANGE_ANSWER,
  REMOVE_ANSWER_CHOICE,
} from '../constants/actions';
import axios from 'axios';

export default (QuestionComponent) => {

  class StepCard extends React.Component {

    onChange = (event) => {
      const { code, label } = this.props;

      if (event.target.tagName === 'INPUT' && event.target.attributes.type.value === 'checkbox') {
        this.props.dispatch({
          type: event.target.checked ? ADD_ANSWER_CHOICE : REMOVE_ANSWER_CHOICE,
          payload: {
            code,
            question: label,
            answer: event.target.value,
          },
        });
        return;
      }

      this.props.dispatch({
        type: CHANGE_ANSWER,
        payload: {
          code,
          question: label,
          answer: event.target.value,
        },
      });
    };

    onNext = () => {
      axios.patch('/api/v1/record', {
        code: this.props.code,
        question: this.props.label,
        answer: this.props.answer,
      });
    };

    render() {
      return <div className={styles.card}>
        <div className={styles.title}>
          {this.props.title}
        </div>
        <div className={styles.label}>
          {this.props.label}
        </div>
        <div className={styles.content}>
          <QuestionComponent {...this.props} onChange={this.onChange} onNext={this.onNext}/>
        </div>
      </div>;
    }
  }

  const mapStateToProps = (state, props) => ({
    answer: state.answers[props.code] ? state.answers[props.code].answer : '',
  });

  const mapDispatchToProps = dispatch => ({
    dispatch,
  });

  return connect(mapStateToProps, mapDispatchToProps)(StepCard);
}
