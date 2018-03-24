import React from 'react';
import StepCard, { stepCardImplementationPropTypes } from '../StepCard';
import { SET_STEP } from '../../constants/actions';
import { STEP_FEVER } from '../../constants/steps';
import { formatTemperature } from '../../utils';

import cardStyles from '../StepCard.css';

class Temperature extends React.Component {
  constructor(props) {
    super(props);
    const temps = [];
    for (let temp = 35; temp <= 42; temp += 0.5) {
      temps.push(formatTemperature(temp));
    }
    temps.push('Don\'t know');
    this.state = {
      temperatures: temps,
    };
  }

  onNext = () => {
    this.props.dispatch({ type: SET_STEP, payload: { step: STEP_FEVER } });
    this.props.onNext();
  };

  render() {
    return (
      <div>
        <div>
          <select onChange={this.props.onChange} value={this.props.answer}>
            {this.state.temperatures.map((value, i) => (
              <option key={i} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <button className={cardStyles.actionButton} onClick={this.onNext}>Next</button>
      </div>
    );
  }
}

Temperature.propTypes = stepCardImplementationPropTypes;

export default StepCard(Temperature);
