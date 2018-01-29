import React, { Component } from 'react';
import logo from './logo.svg';
// import { connect } from 'react-redux';
import myConnect from './myConnect';

class Header extends Component {
  renderDescription = () => {
    const remainder = this.props.number % 5;
    const upToNext = 5 - remainder;
    return `The current count is less than ${this.props.number + upToNext}`;
  };

  render() {
    console.log('HEADER props', this.props);
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{this.renderDescription()}</h1>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    number: state.count
  };
};

export default myConnect(mapStateToProps)(Header);
