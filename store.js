import React from 'react';
import {
    applyMiddleware,
    combineReducers,
    createStore,
} from 'redux';
import navigatorReducer from './reducers/navigator';
// import callApiMiddleware from './middlewares/callApi';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'


const reducer = combineReducers({
  navigator: navigatorReducer,
});

export const initStore = (initialState) => {
    return createStore(
        reducer,
        initialState,
        composeWithDevTools(applyMiddleware(
            thunk,
            // callApiMiddleware,
        )),
    );
};
