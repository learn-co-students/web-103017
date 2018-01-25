import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';

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

const reducer = (state = { count: 25 }, action) => {
  console.log('current state', state);
  console.log('action', action);
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'INCREMENT_BY_TWO':
      return { count: state.count + 2 };
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log('the new state is', store.getState());
  console.log('--------------');
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Counter />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
    );
  }
}

class Counter extends Component {
  state = { count: 0 };

  componentWillMount() {
    store.subscribe(() => this.setState({}));
  }

  increment = () => {
    store.dispatch({ type: 'INCREMENT' });
    // this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  decrement = () => {
    store.dispatch({ type: 'DECREMENT' });
    // this.setState(prevState => ({ count: prevState.count - 1 }));
  };

  renderDescription = () => {
    const remainder = this.state.count % 5;
    const upToNext = 5 - remainder;
    return `The current count is less than ${this.state.count + upToNext}`;
  };

  render() {
    return (
      <div className="Counter">
        <h1>{store.getState().count}</h1>
        <button onClick={this.decrement}> - </button>
        <button onClick={this.increment}> + </button>
        <button onClick={() => ({})}> + 2</button>
        <button onClick={() => ({})}> + 5</button>
        <h3>{this.renderDescription()}</h3>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
