import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
  render() {
    console.log('COUNTER props are', this.props);
    return (
      <div className="Counter">
        <h1>{this.props.count}</h1>
        <button
          onClick={() => {
            this.props.decrement(this.props.index);
          }}
        >
          {' '}
          -{' '}
        </button>
        <button
          onClick={() => {
            this.props.increment(this.props.index);
          }}
        >
          {' '}
          +{' '}
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    count: state[ownProps.index].count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: index => {
      dispatch({ type: 'INCREMENT', amount: 1, index });
    },
    decrement: index => {
      dispatch({ type: 'DECREMENT', amount: 1, index });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
