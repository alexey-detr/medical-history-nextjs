import React from 'react';
import StepCard from '../StepCard';
import { connect } from 'react-redux';
import { SET_STEP } from '../../constants/actions';
import { STEP_SYMPTOMS2 } from '../../constants/steps';

import cardStyles from '../StepCard.css';
import mainStyles from '../../styles/main.css';

class Symptoms1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      symptoms: [
        'Problem breathing',
        'Stiff neck',
        'Chest pain',
        'Abdominal pain',
      ],
    };
  }

  onNext = () => {
    this.props.dispatch({type: SET_STEP, payload: {step: STEP_SYMPTOMS2}});
  };

  render() {
    return <div>
      <div className={cardStyles.label}>
        Do you have any of the following?
      </div>
      <div>
        {this.state.symptoms.map((value, i) =>
          <label key={i} className={mainStyles.radioLabel}>
            <input type='radio' name='symptoms1' value={value} />
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
