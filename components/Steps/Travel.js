import React from 'react';
import StepCard from '../StepCard';
import { connect } from 'react-redux';
import { SET_STEP } from '../../constants/actions';
import {
  STEP_SYMPTOMS2,
  STEP_THANKS,
  STEP_TRAVEL_DETAILS,
} from '../../constants/steps';

import cardStyles from '../StepCard.css';
import mainStyles from '../../styles/main.css';

class Travel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choices: [
        'Yes',
        'No',
      ],
      answer: null,
    };
  }

  onNext = () => {
    if (this.state.answer === 'Yes') {
      this.props.dispatch({type: SET_STEP, payload: {step: STEP_TRAVEL_DETAILS}});
    } else {
      this.props.dispatch({type: SET_STEP, payload: {step: STEP_THANKS}});
    }
  };

  onChangeAnswer = (event) => {
    this.setState({...this.state, answer: event.target.value});
  };

  render() {
    return <div>
      <div className={cardStyles.label}>
        Have you recently traveled abroad?
      </div>
      <div>
        {this.state.choices.map((value, i) =>
          <label key={i} className={mainStyles.radioLabel}>
            <input type='radio' name='travel' onChange={this.onChangeAnswer} value={value} />
            <div>{value}</div>
          </label>
        )}
      </div>
      <button className={cardStyles.actionButton} onClick={this.onNext}>Next</button>
    </div>;
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(null, mapDispatchToProps)(StepCard(Travel));
