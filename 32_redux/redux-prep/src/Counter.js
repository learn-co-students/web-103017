import React, { Component } from 'react';
import myConnect from './myConnect';
import { connect } from 'react-redux';

import * as actions from './actions';

class Counter extends Component {
  render() {
    return (
      <div className="Counter">
        <h1>{this.props.count}</h1>
        <button onClick={() => this.props.decrement(2)}> - </button>
        <button onClick={() => this.props.increment(2)}> + </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: amount => {
//       dispatch(actions.incrementActionCreator(amount));
//     },
//     decrement: amount => {
//       dispatch(actions.decrementActionCreator(amount));
//     }
//   };
// };

export default connect(mapStateToProps, actions)(Counter);
