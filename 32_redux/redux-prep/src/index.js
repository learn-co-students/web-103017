import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import { Provider } from 'react-redux';

import App from './App';

const myCreateStore = reducer => {
  let state;
  let functionsThatShouldBeCalledWhenTheStateChanges = [];

  const dispatch = action => {
    state = reducer(state, action);
    functionsThatShouldBeCalledWhenTheStateChanges.forEach(fn => fn());
  };

  const getState = () => {
    return state;
  };

  const subscribe = callback => {
    functionsThatShouldBeCalledWhenTheStateChanges.push(callback);
  };

  dispatch({ type: '@@myRedux/INIT' });

  return {
    dispatch,
    getState,
    subscribe
  };
};

const initialState = { count: 1 };

const reducer = (state = initialState, action) => {
  console.log('current state', state);
  console.log('action', action);

  const { index, amount } = action;

  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.amount };
    case 'DECREMENT':
      return { count: state.count - action.amount };
    default:
      return state;
  }
};

const store = myCreateStore(reducer);

store.subscribe(() => {
  console.log('the new state is', store.getState());
  console.log('--------------');
});
``;
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
