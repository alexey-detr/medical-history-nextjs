import React from 'react';
import StepCard from '../StepCard';
import { STEP_THANKS } from '../../constants/steps';
import { SET_STEP } from '../../constants/actions';

import cardStyles from '../StepCard.css';

class TravelDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
    };
  }

  onNext = () => {
    if (!this.props.answer) {
      this.setState({ ...this.state, error: 'You have to specify a country' });
      return false;
    }
    this.props.dispatch({ type: SET_STEP, payload: { step: STEP_THANKS } });
    this.props.onNext();
  };

  render() {
    return <div>
      <textarea rows='3' onChange={this.props.onChange} value={this.props.answer}/>

      {this.state.error && <div className={cardStyles.errorMessage}>
        {this.state.error}
      </div>}

      <button className={cardStyles.actionButton} onClick={this.onNext}>Next</button>
    </div>;
  }
}

export default StepCard(TravelDetails);
