import React from 'react';
import StepCard from '../StepCard';
import { connect } from 'react-redux';
import { STEP_TEMPERATURE } from '../../constants/steps';
import { SET_STEP } from '../../constants/actions';

import cardStyles from '../StepCard.css'

class Ssn extends React.Component {
  onNext = () => {
    this.props.dispatch({type: SET_STEP, payload: {step: STEP_TEMPERATURE}});
  };

  render() {
    return <div>
      <div className={cardStyles.label}>
        Please fill in your social security number to proceed
      </div>
      <input type='text' value={this.props.value}/>
      <button onClick={this.onNext}>Confirm</button>
    </div>;
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(null, mapDispatchToProps)(StepCard(Ssn));
