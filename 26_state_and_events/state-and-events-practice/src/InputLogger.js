import React from 'react';

class InputLogger extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: '', dog: 'scooby', cat: 'garfield' };
  }

  handleChange = ev => {
    console.log('handleChnage has been called');

    const value = ev.target.value;

    this.setState(prevState => {
      return { value: value };
    });
  };

  render() {
    console.log('the new state is', this.state);
    return (
      <div>
        <input value={this.state.value} onChange={this.handleChange} />
        <p>{this.state.value}</p>
      </div>
    );
  }
}

export default InputLogger;
