import React from 'react';
import StepCard from '../StepCard';
import { connect } from 'react-redux';
import { SET_STEP } from '../../constants/actions';
import { STEP_THANKS } from '../../constants/steps';

import cardStyles from '../StepCard.css'

class Temperature extends React.Component {
  onNext = () => {
    this.props.dispatch({type: SET_STEP, payload: {step: STEP_THANKS}});
  };

  render() {
    return <div>
      <div className={cardStyles.label}>
        What was the last measured temperature.
      </div>
      <input type='text' value={this.props.value}/>
      <button onClick={this.onNext}>Next</button>
    </div>;
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(null, mapDispatchToProps)(StepCard(Temperature));
