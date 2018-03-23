import React from 'react';
import StepCard from '../StepCard';
import { STEP_THANKS } from '../../constants/steps';
import { SET_STEP } from '../../constants/actions';

import cardStyles from '../StepCard.css';

class TravelDetails extends React.Component {
  onNext = () => {
    this.props.dispatch({ type: SET_STEP, payload: { step: STEP_THANKS } });
    this.props.onNext();
  };

  render() {
    return <div>
      <textarea rows='3' onChange={this.props.onChange} value={this.props.answer}/>
      <button className={cardStyles.actionButton} onClick={this.onNext}>Next</button>
    </div>;
  }
}

export default StepCard(TravelDetails);
