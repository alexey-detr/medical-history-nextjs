import React from 'react';
import { connect } from 'react-redux';
import Enter from './Steps/Ssn';
import Temperature from './Steps/Temperature';
import Thanks from './Steps/Thanks';
import {
  STEP_SSN,
  STEP_TEMPERATURE,
  STEP_THANKS,
} from '../constants/steps';

class Navigator extends React.Component {
  static getStep(code) {
    switch (code) {
      case STEP_SSN:
        return <Enter title='SSN'/>;
      case STEP_TEMPERATURE:
        return <Temperature title='Temperature'/>;
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
