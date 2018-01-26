import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';

const initialState = { count: 101 };

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

const store = createStore(reducer);

store.subscribe(() => {
  console.log('the new state is', store.getState());
  console.log('--------------');
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
