import React from 'react';
import StepCard from '../StepCard';
import { connect } from 'react-redux';
import { SET_STEP } from '../../constants/actions';
import { STEP_TRAVEL } from '../../constants/steps';

import cardStyles from '../StepCard.css';
import mainStyles from '../../styles/main.css';

class Symptoms1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      symptoms: [
        'Soar throat',
        'Cough',
        'Muscle pain',
        'Vomiting',
      ],
    };
  }

  onNext = () => {
    this.props.dispatch({type: SET_STEP, payload: {step: STEP_TRAVEL}});
  };

  render() {
    return <div>
      <div className={cardStyles.label}>
        Do you have any of the following?
      </div>
      <div>
        {this.state.symptoms.map((value, i) =>
          <label key={i} className={mainStyles.checkboxLabel}>
            <input type='checkbox' name='symptoms2' value={value} />
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

export default connect(null, mapDispatchToProps)(StepCard(Symptoms1));
