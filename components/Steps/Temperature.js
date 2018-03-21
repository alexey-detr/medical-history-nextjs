import React from 'react';
import StepCard from '../StepCard';
import { connect } from 'react-redux';
import { SET_STEP } from '../../constants/actions';
import {
  STEP_FEVER,
  STEP_THANKS,
} from '../../constants/steps';

import cardStyles from '../StepCard.css'

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
    this.props.dispatch({type: SET_STEP, payload: {step: STEP_FEVER}});
  };

  render() {
    return <div>
      <div className={cardStyles.label}>
        What was the last measured temperature.
      </div>
      <div>
        <select>
          {this.state.temperatures.map((value, i) => <option key={i} value={value}>{value} °C</option>)}
        </select>
      </div>
      <button className={cardStyles.actionButton} onClick={this.onNext}>Next</button>
    </div>;
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(null, mapDispatchToProps)(StepCard(Temperature));
