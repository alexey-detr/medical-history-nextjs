import React from 'react';
import StepCard from '../StepCard';
import { SET_STEP } from '../../constants/actions';
import { STEP_SYMPTOMS2 } from '../../constants/steps';

import cardStyles from '../StepCard.css';
import mainStyles from '../../styles/main.css';

class Symptoms1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      symptoms: [
        'No',
        'Problem breathing',
        'Stiff neck',
        'Chest pain',
        'Abdominal pain',
      ],
      error: '',
    };
  }

  onNext = () => {
    if (!this.props.answer) {
      this.setState({ ...this.state, error: 'You have to choose an answer' });
      return;
    }
    this.props.dispatch({ type: SET_STEP, payload: { step: STEP_SYMPTOMS2 } });
    this.props.onNext();
  };

  render() {
    return (
      <div>
        <div>
          {this.state.symptoms.map((value, i) =>
            (
              <label htmlFor={`symptoms1-${i}`} key={i} className={mainStyles.radioLabel}>
                <input
                  id={`symptoms1-${i}`}
                  onChange={this.props.onChange}
                  type="radio"
                  name="symptoms1"
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

export default StepCard(Symptoms1);
