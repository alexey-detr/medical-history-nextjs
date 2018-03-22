import {
  ADD_ANSWER_CHOICE,
  CHANGE_ANSWER,
  REMOVE_ANSWER_CHOICE,
} from '../constants/actions';

export default (state = {}, action) => {
  switch (action.type) {
    case CHANGE_ANSWER: {
      const {code, question, answer} = action.payload;
      return {
        ...state,
        [code]: {
          question,
          answer,
        },
      };
    }
    case ADD_ANSWER_CHOICE: {
      const {code, question, answer} = action.payload;
      return {
        ...state,
        [code]: {
          question,
          answer: state[code] && state[code].answer ? state[code].answer.concat([answer]) : [answer],
        },
      };
    }
    case REMOVE_ANSWER_CHOICE: {
      const {code, question, answer} = action.payload;
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
