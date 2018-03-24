import React from 'react';
import StepCard from '../StepCard';
import { SET_STEP } from '../../constants/actions';
import { STEP_TRAVEL } from '../../constants/steps';

import cardStyles from '../StepCard.css';
import mainStyles from '../../styles/main.css';

class Symptoms1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      symptoms: [
        'Soar throat',
        'Cough',
        'Muscle pain',
        'Vomiting',
      ],
    };
  }

  onNext = () => {
    this.props.dispatch({ type: SET_STEP, payload: { step: STEP_TRAVEL } });
    this.props.onNext();
  };

  render() {
    return (
      <div>
        <div>
          {this.state.symptoms.map((value, i) => (
            <label htmlFor={`symptoms2-${i}`} key={i} className={mainStyles.checkboxLabel}>
              <input
                id={`symptoms2-${i}`}
                onChange={this.props.onChange}
                type="checkbox"
                name="symptoms2"
                value={value}
                checked={this.props.answer.indexOf(value) !== -1}
              />
              <div>{value}</div>
            </label>
          ))}
        </div>
        <button className={cardStyles.actionButton} onClick={this.onNext}>Next</button>
      </div>
    );
  }
}

export default StepCard(Symptoms1);
