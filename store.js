import React from 'react';
import {
  applyMiddleware,
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

export const initStore = (initialState) => {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(
    )),
  );
};
