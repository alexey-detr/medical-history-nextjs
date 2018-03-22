import React from 'react';
import StepCard from '../StepCard';
import { SET_STEP } from '../../constants/actions';
import { STEP_FEVER } from '../../constants/steps';

import cardStyles from '../StepCard.css';

class Temperature extends React.Component {
  constructor(props) {
    super(props);
    const temperatures = [];
    for (let temperature = 35; temperature <= 42; temperature += 0.5) {
      temperatures.push(temperature);
    }
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
        <select onChange={this.props.onChange}>
          {this.state.temperatures.map((value, i) => <option key={i} value={value + ' °C'}>{value} °C</option>)}
        </select>
      </div>
      <button className={cardStyles.actionButton} onClick={this.onNext}>Next</button>
    </div>;
  }
}

export default StepCard(Temperature);
