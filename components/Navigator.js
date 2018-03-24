import React from 'react';
import { connect } from 'react-redux';
import Enter from './Steps/Ssn';
import Temperature from './Steps/Temperature';
import Fever from './Steps/Fever';
import Symptoms1 from './Steps/Symptoms1';
import Symptoms2 from './Steps/Symptoms2';
import Travel from './Steps/Travel';
import TravelDetails from './Steps/TravelDetails';
import Thanks from './Steps/Thanks';
import {
  STEP_SSN,
  STEP_TEMPERATURE,
  STEP_FEVER,
  STEP_SYMPTOMS1,
  STEP_SYMPTOMS2,
  STEP_TRAVEL,
  STEP_TRAVEL_DETAILS,
  STEP_THANKS,
} from '../constants/steps';

class Navigator extends React.Component {
  getStep = () => {
    switch (this.props.step) {
      case STEP_SSN:
        return (
          <Enter
            code={this.props.step}
            title="SSN"
            label="Please fill in your social security number to proceed"
          />
        );
      case STEP_TEMPERATURE:
        return (
          <Temperature
            code={this.props.step}
            title="Temperature"
            label="What was the last measured temperature?"
          />
        );
      case STEP_FEVER:
        return <Fever code={this.props.step} title="Fever" label="How long have you had a fever?" />;
      case STEP_SYMPTOMS1:
        return <Symptoms1 code={this.props.step} title="Symptoms" label="Do you have any of the following?" />;
      case STEP_SYMPTOMS2:
        return <Symptoms2 code={this.props.step} title="More symptoms" label="Do you have any of the following?" />;
      case STEP_TRAVEL:
        return <Travel code={this.props.step} title="Travel" label="Have you recently traveled abroad?" />;
      case STEP_TRAVEL_DETAILS:
        return <TravelDetails code={this.props.step} title="Travel details" label="Where did you travel?" />;
      case STEP_THANKS:
        return <Thanks title="Completed" label="You have answered to all questions. Thank you!" />;
      default:
        return null;
    }
  };

  render() {
    return this.getStep();
  }
}

const mapStateToProps = state => ({
  step: state.navigator.step,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigator);
