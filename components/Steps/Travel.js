import React from 'react';
import StepCard from '../StepCard';
import { SET_STEP } from '../../constants/actions';
import {
  STEP_THANKS,
  STEP_TRAVEL_DETAILS,
} from '../../constants/steps';

import cardStyles from '../StepCard.css';
import mainStyles from '../../styles/main.css';

class Travel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choices: [
        'Yes',
        'No',
      ],
      error: '',
    };
  }

  onNext = () => {
    if (!this.props.answer) {
      this.setState({ ...this.state, error: 'You have to choose an answer' });
      return;
    }
    if (this.props.answer === 'Yes') {
      this.props.dispatch({ type: SET_STEP, payload: { step: STEP_TRAVEL_DETAILS } });
    } else {
      this.props.dispatch({ type: SET_STEP, payload: { step: STEP_THANKS } });
    }
    this.props.onNext();
  };

  render() {
    return (
      <div>
        <div>
          {this.state.choices.map((value, i) =>
            (
              <label htmlFor={`travel-${i}`} key={i} className={mainStyles.radioLabel}>
                <input
                  id={`travel-${i}`}
                  type="radio"
                  name="travel"
                  onChange={this.props.onChange}
                  value={value}
                  checked={value === this.props.answer}
                />
                <div>{value}</div>
              </label>
            ))}
        </div>

        {this.state.error && (
          <div className={cardStyles.errorMessage}>
            {this.state.error}
          </div>
        )}

        <button className={cardStyles.actionButton} onClick={this.onNext}>Next</button>
      </div>
    );
  }
}

export default StepCard(Travel);
