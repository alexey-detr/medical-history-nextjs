import React from 'react';
import StepCard from '../StepCard';
import { connect } from 'react-redux';
import { STEP_THANKS } from '../../constants/steps';
import { SET_STEP } from '../../constants/actions';

import cardStyles from '../StepCard.css';

class TravelDetails extends React.Component {
  onNext = () => {
    this.props.dispatch({type: SET_STEP, payload: {step: STEP_THANKS}});
  };

  render() {
    return <div>
      <div className={cardStyles.label}>
        Where did you travel
      </div>
      <textarea rows='4' />
      <button className={cardStyles.actionButton} onClick={this.onNext}>Next</button>
    </div>;
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(null, mapDispatchToProps)(StepCard(TravelDetails));
