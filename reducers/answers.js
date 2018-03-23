import {
  ADD_ANSWER_CHOICE,
  CHANGE_ANSWER,
  REMOVE_ANSWER_CHOICE,
} from '../constants/actions';
import {
  STEP_FEVER,
  STEP_SSN,
  STEP_SYMPTOMS1,
  STEP_SYMPTOMS2,
  STEP_TEMPERATURE,
  STEP_TRAVEL,
  STEP_TRAVEL_DETAILS,
} from '../constants/steps';
import {
  formatDays,
  formatTemperature,
} from '../utils';

const initialState = {
  [STEP_SSN]: {
    answer: '811228-9874',
  },
  [STEP_TEMPERATURE]: {
    answer: formatTemperature(36.5),
  },
  [STEP_FEVER]: {
    answer: formatDays(0),
  },
  [STEP_SYMPTOMS1]: {
    answer: 'No',
  },
  [STEP_SYMPTOMS2]: {
    answer: [],
  },
  [STEP_TRAVEL]: {
    answer: '',
  },
  [STEP_TRAVEL_DETAILS]: {
    answer: '',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ANSWER: {
      const { code, question, answer } = action.payload;
      return {
        ...state,
        [code]: {
          question,
          answer,
        },
      };
    }
    case ADD_ANSWER_CHOICE: {
      const { code, question, answer } = action.payload;
      return {
        ...state,
        [code]: {
          question,
          answer: state[code] && state[code].answer ? state[code].answer.concat([answer]) : [answer],
        },
      };
    }
    case REMOVE_ANSWER_CHOICE: {
      const { code, question, answer } = action.payload;
      const stateAnswer = state[code].answer.slice();
      stateAnswer.splice(stateAnswer.indexOf(answer), 1);
      return {
        ...state,
        [code]: {
          question,
          answer: stateAnswer,
        },
      };
    }
  }
  return state;
}
