import React from 'react';
import {
  combineReducers,
  createStore,
} from 'redux';
import navigatorReducer from './reducers/navigator';
import answersReducer from './reducers/answers';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
  navigator: navigatorReducer,
  answers: answersReducer,
});

export const makeStore = (initialState, {query}) => {
  if (query && query.answers) {
    initialState = initialState || {};
    initialState.answers = query.answers;
  }
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(),
  );
};
