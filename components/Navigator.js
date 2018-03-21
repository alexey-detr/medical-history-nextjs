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
  static getStep(code) {
    switch (code) {
      case STEP_SSN:
        return <Enter title='SSN'/>;
      case STEP_TEMPERATURE:
        return <Temperature title='Temperature'/>;
      case STEP_FEVER:
        return <Fever title='Fever'/>;
      case STEP_SYMPTOMS1:
        return <Symptoms1 title='Symptoms'/>;
      case STEP_SYMPTOMS2:
        return <Symptoms2 title='More symptoms'/>;
      case STEP_TRAVEL:
        return <Travel title='Travel'/>;
      case STEP_TRAVEL_DETAILS:
        return <TravelDetails title='Travel details'/>;
      case STEP_THANKS:
        return <Thanks title='Completed' value='ASD'/>;
      default:
        return null;
    }
  }

  render() {
    return Navigator.getStep(this.props.step);
  }
}

const mapStateToProps = state => {
  return {
    step: state.navigator.step,
  };
};

export default connect(mapStateToProps)(Navigator);
