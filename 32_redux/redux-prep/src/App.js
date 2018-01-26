import React, { Component } from 'react';
import Header from './Header';
import Counter from './Counter';

class App extends Component {
  render() {
    console.log('APP props', this.props);
    return (
      <div className="App">
        <Header />
        <Counter />
      </div>
    );
  }
}

export default App;
