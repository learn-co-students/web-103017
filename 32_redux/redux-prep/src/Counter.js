import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
  render() {
    console.log('COUNTER props are', this.props);
    return (
      <div className="Counter">
        <h1>{0}</h1>
        <button onClick={this.props.decrement}> - </button>
        <button onClick={this.props.increment}> + </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = dispatch => {
  console.log('dispatch', dispatch);
  return {
    increment: () => {
      dispatch({ type: 'INCREMENT', amount: 1 });
    },
    decrement: () => {
      dispatch({ type: 'DECREMENT', amount: 1 });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
