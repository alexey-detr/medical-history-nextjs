import { STEP_SSN } from '../constants/steps';
import { SET_STEP } from '../constants/actions';

export default (state = { step: STEP_SSN }, action) => {
  switch (action.type) {
    case SET_STEP:
      return {
        ...state,
        step: action.payload.step,
      };
    default:
      return state;
  }
};
