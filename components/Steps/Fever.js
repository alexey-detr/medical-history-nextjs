import React from 'react';
import StepCard from '../StepCard';
import { SET_STEP } from '../../constants/actions';
import { STEP_SYMPTOMS1 } from '../../constants/steps';

import cardStyles from '../StepCard.css';
import { formatDays } from '../../utils';

class Fever extends React.Component {
  constructor(props) {
    super(props);
    const days = [];
    for (let day = 0; day <= 14; day += 1) {
      days.push(day);
    }
    this.state = {
      days,
    };
  }

  onNext = () => {
    this.props.dispatch({ type: SET_STEP, payload: { step: STEP_SYMPTOMS1 } });
    this.props.onNext();
  };

  render() {
    return <div>
      <div>
        <select onChange={this.props.onChange} value={this.props.answer}>
          {this.state.days.map((value, i) => {
            const daysString = formatDays(value);
            return <option key={i} value={daysString}>{daysString}</option>;
          })}
        </select>
      </div>
      <button className={cardStyles.actionButton} onClick={this.onNext}>Next</button>
    </div>;
  }
}

export default StepCard(Fever);
