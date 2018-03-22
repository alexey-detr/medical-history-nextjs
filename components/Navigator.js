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
  getStep = (code) => {
    switch (code) {
      case STEP_SSN:
        return <Enter code='ssn' title='SSN' label='Please fill in your social security number to proceed'/>;
      case STEP_TEMPERATURE:
        return <Temperature code='temperature' title='Temperature' label='What was the last measured temperature?'/>;
      case STEP_FEVER:
        return <Fever code='fever' title='Fever' label='How long have you had a fever?'/>;
      case STEP_SYMPTOMS1:
        return <Symptoms1 code='symptoms1' title='Symptoms' label='Do you have any of the following?'/>;
      case STEP_SYMPTOMS2:
        return <Symptoms2 code='symptoms2' title='More symptoms' label='Do you have any of the following?'/>;
      case STEP_TRAVEL:
        return <Travel code='travel' title='Travel' label='Have you recently traveled abroad?'/>;
      case STEP_TRAVEL_DETAILS:
        return <TravelDetails code='travelDetails' title='Travel details' label='Where did you travel?'/>;
      case STEP_THANKS:
        return <Thanks title='Completed' label='Thank you!'/>;
      default:
        return null;
    }
  };

  render() {
    return this.getStep(this.props.step);
  }
}

const mapStateToProps = state => {
  return {
    step: state.navigator.step,
  };
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigator);
