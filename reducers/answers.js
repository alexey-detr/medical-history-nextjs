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
    answer: '',
  },
  [STEP_TEMPERATURE]: {
    answer: formatTemperature(36.5),
  },
  [STEP_FEVER]: {
    answer: formatDays(0),
  },
  [STEP_SYMPTOMS1]: {
    answer: '',
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

export default (state = {}, action) => {
  const mergedState = {
    ...initialState,
    ...state,
  };
  switch (action.type) {
    case CHANGE_ANSWER: {
      const { code, question, answer } = action.payload;
      return {
        ...mergedState,
        [code]: {
          question,
          answer,
        },
      };
    }
    case ADD_ANSWER_CHOICE: {
      const { code, question, answer } = action.payload;
      const stateAnswer = mergedState[code] && mergedState[code].answer;
      return {
        ...mergedState,
        [code]: {
          question,
          answer: stateAnswer ? stateAnswer.concat([answer]) : [answer],
        },
      };
    }
    case REMOVE_ANSWER_CHOICE: {
      const { code, question, answer } = action.payload;
      const stateAnswer = mergedState[code].answer.slice();
      stateAnswer.splice(stateAnswer.indexOf(answer), 1);
      return {
        ...mergedState,
        [code]: {
          question,
          answer: stateAnswer,
        },
      };
    }
    default:
      return mergedState;
  }
};
