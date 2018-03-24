import {
  combineReducers,
  createStore,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import navigatorReducer from './reducers/navigator';
import answersReducer from './reducers/answers';

const reducer = combineReducers({
  navigator: navigatorReducer,
  answers: answersReducer,
});

export default (initialState, { query }) => {
  let state = initialState;
  if (query && query.answers) {
    state = state || {};
    state.answers = query.answers;
  }
  return createStore(
    reducer,
    state,
    composeWithDevTools(),
  );
};
