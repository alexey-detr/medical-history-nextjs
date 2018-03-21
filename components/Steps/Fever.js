import React from 'react';
import StepCard from '../StepCard';
import { connect } from 'react-redux';
import { SET_STEP } from '../../constants/actions';
import { STEP_SYMPTOMS1 } from '../../constants/steps';

import cardStyles from '../StepCard.css';

class Fever extends React.Component {
  constructor(props) {
    super(props);
    const days = [];
    for (let day = 0; day <= 14; day += 1) {
      days.push(day);
    }
    this.state = {
      days,
    };
  }

  onNext = () => {
    this.props.dispatch({type: SET_STEP, payload: {step: STEP_SYMPTOMS1}});
  };

  render() {
    return <div>
      <div className={cardStyles.label}>
        How long have you had a fever?
      </div>
      <div>
        <select>
          {this.state.days.map((value, i) => <option key={i} value={value}>{value}</option>)}
        </select>
      </div>
      <button className={cardStyles.actionButton} onClick={this.onNext}>Next</button>
    </div>;
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(null, mapDispatchToProps)(StepCard(Fever));
