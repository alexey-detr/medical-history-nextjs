import React from 'react';
import StepCard from '../StepCard';
import { STEP_TEMPERATURE } from '../../constants/steps';
import { SET_STEP } from '../../constants/actions';

import cardStyles from '../StepCard.css';

class Ssn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
    };
  }

  onNext = () => {
    if (!/^\d{6}-\d{4}$/.test(this.props.answer)) {
      this.setState({ error: 'SSN has a wrong format' });
      return;
    }
    this.props.dispatch({ type: SET_STEP, payload: { step: STEP_TEMPERATURE } });
    this.props.onNext();
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.answer}
          onChange={this.props.onChange}
        />

        {this.state.error && (
          <div className={cardStyles.errorMessage}>
            {this.state.error}
          </div>
        )}

        <button className={cardStyles.actionButton} onClick={this.onNext}>Confirm</button>
      </div>
    );
  }
}

export default StepCard(Ssn);
