import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';

class Header extends Component {
  // componentWillMount() {
  //   store.subscribe(() => this.setState({}));
  // }

  renderDescription = () => {
    const remainder = this.props.number % 5;
    const upToNext = 5 - remainder;
    return `The current count is less than ${this.props.number + upToNext}`;
  };

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to Redux</h1>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    number: state.count
  };
};

export default connect(mapStateToProps)(Header);
