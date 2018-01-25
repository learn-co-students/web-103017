import React, { Component } from 'react';
import Header from './Header';
import Counter from './Counter';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    console.log('APP props', this.props);
    return (
      <div className="App">
        <Header />
        {this.props.counters.map((counter, index) => (
          <Counter index={index} key={index} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counters: state
  };
};

export default connect(mapStateToProps)(App);
