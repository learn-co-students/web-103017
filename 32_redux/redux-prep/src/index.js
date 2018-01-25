import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';

// state stored in a single place called 'state' 'state tree'

//
// const reducer = (state = { isRaining: false }, action) => {
//   console.log('current state', state);
//   console.log('action', action);
//
//   switch (action.type) {
//     case 'TOGGLE_RAINING':
//       return { isRaining: !state.isRaining };
//     case 'STOP_RAINING':
//       return { isRaining: false };
//     default:
//       return state;
//   }
// };

// LECTURE
// ===================
const initialState = { count: 99 };

const reducer = (state = initialState, action) => {
  console.log('current state', state);
  console.log('action', action);
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

//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Header />
//         <Counter />
//       </div>
//     );
//   }
// }
//
// class Header extends Component {
//   componentWillMount() {
//     store.subscribe(() => this.setState({}));
//   }
//
//   renderDescription = () => {
//     const remainder = store.getState().count % 5;
//     const upToNext = 5 - remainder;
//     return `The current count is less than ${store.getState().count +
//       upToNext}`;
//   };
//
//   render() {
//     return (
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1 className="App-title">{this.renderDescription()}</h1>
//       </header>
//     );
//   }
// }
//
// class Counter extends Component {
//   componentWillMount() {
//     store.subscribe(() => this.setState({}));
//   }
//
//   increment = amount => {
//     store.dispatch({ type: 'INCREMENT', amount });
//     // this.setState(prevState => ({ count: prevState.count + 1 }));
//   };
//
//   decrement = amount => {
//     store.dispatch({ type: 'DECREMENT', amount });
//     // this.setState(prevState => ({ count: prevState.count - 1 }));
//   };
//
//   render() {
//     return (
//       <div className="Counter">
//         <h1>{store.getState().count}</h1>
//         <button onClick={() => this.decrement(1)}> - </button>
//         <button onClick={() => this.increment(1)}> + </button>
//         <button onClick={() => this.increment(2)}> + 2</button>
//         <button onClick={() => this.increment(5)}> + 5</button>
//       </div>
//     );
//   }
// }

// CHALLENGE
// =============

// remember that reducers must be pure functions (no destructively modifying state)
// arr = [1, 2, 3, 4, 'hi', 6]
// [...arr.slice(0, 4), 5, ...arr.slice(4 + 1)] GOOD : )

// arr[4] = 5 X BAD X T_T
//
// const initialState = [{ count: 0 }, { count: 0 }, { count: 0 }, { count: 0 }];
//
// const reducer = (state = initialState, action) => {
//   console.log('current state', state);
//   console.log('action', action);
//   switch (action.type) {
//     case 'INCREMENT':
//       return { count: state.count + action.amount };
//     case 'DECREMENT':
//       return { count: state.count - action.amount };
//     default:
//       return state;
//   }
// };
//
// const store = createStore(reducer);
//
// store.subscribe(() => {
//   console.log('the new state is', store.getState());
//   console.log('--------------');
// });
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Header />
//         {store.getState().map((counter, i) => <Counter key={i} />)}
//       </div>
//     );
//   }
// }
//
// class Header extends Component {
//   componentWillMount() {
//     store.subscribe(() => this.setState({}));
//   }
//
//   render() {
//     return (
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1 className="App-title">Welcome to Redux</h1>
//       </header>
//     );
//   }
// }
//
// class Counter extends Component {
//   componentWillMount() {
//     store.subscribe(() => this.setState({}));
//   }
//
//   increment = amount => {
//     store.dispatch({ type: 'INCREMENT', amount });
//     // this.setState(prevState => ({ count: prevState.count + 1 }));
//   };
//
//   decrement = amount => {
//     store.dispatch({ type: 'DECREMENT', amount });
//     // this.setState(prevState => ({ count: prevState.count - 1 }));
//   };
//
//   render() {
//     return (
//       <div className="Counter">
//         <h1>{0}</h1>
//         <button onClick={() => this.decrement(1)}> - </button>
//         <button onClick={() => this.increment(1)}> + </button>
//       </div>
//     );
//   }
// }
