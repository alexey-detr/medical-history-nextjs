import React from 'react';
import StepCard from '../StepCard';
import { SET_STEP } from '../../constants/actions';
import { STEP_FEVER } from '../../constants/steps';
import { formatTemperature } from '../../utils';

import cardStyles from '../StepCard.css';

class Temperature extends React.Component {
  constructor(props) {
    super(props);
    const temperatures = [];
    for (let temperature = 35; temperature <= 42; temperature += 0.5) {
      temperatures.push(formatTemperature(temperature));
    }
    temperatures.push('Don\'t know');
    this.state = {
      temperatures,
    };
  }

  onNext = () => {
    this.props.dispatch({ type: SET_STEP, payload: { step: STEP_FEVER } });
    this.props.onNext();
  };

  render() {
    return <div>
      <div>
        <select onChange={this.props.onChange} value={this.props.answer}>
          {this.state.temperatures.map((value, i) => <option key={i} value={value}>{value}</option>)}
        </select>
      </div>
      <button className={cardStyles.actionButton} onClick={this.onNext}>Next</button>
    </div>;
  }
}

export default StepCard(Temperature);
