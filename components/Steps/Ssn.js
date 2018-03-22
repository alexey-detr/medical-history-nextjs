import React from 'react';
import StepCard from '../StepCard';
import { STEP_TEMPERATURE } from '../../constants/steps';
import { SET_STEP } from '../../constants/actions';

import cardStyles from '../StepCard.css';

class Ssn extends React.Component {
  onNext = () => {
    this.props.dispatch({ type: SET_STEP, payload: { step: STEP_TEMPERATURE } });
    this.props.onNext();
  };

  render() {
    return <div>
      <input autoFocus={true} type='text' value={this.props.value} onChange={this.props.onChange}/>
      <button className={cardStyles.actionButton} onClick={this.onNext}>Confirm</button>
    </div>;
  }
}

export default StepCard(Ssn);
