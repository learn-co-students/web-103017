import React, { Component } from 'react';
import logo from './logo.svg';

class Header extends Component {
  // componentWillMount() {
  //   store.subscribe(() => this.setState({}));
  // }

  renderDescription = () => {
    const remainder = this.props.count % 5;
    const upToNext = 5 - remainder;
    return `The current count is less than ${this.props.count + upToNext}`;
  };

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{this.renderDescription()}</h1>
      </header>
    );
  }
}

export default Header;
