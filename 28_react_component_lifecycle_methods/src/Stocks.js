import React from 'react';

export default class Stocks extends React.Component {
  constructor() {
    super()

    this.state = {
      increasing: false
    }
  }

  // componentWillReceiveProps is the method that gives us access to the current
  // props and the incoming props.  We can therefore use this method to compare
  // current vs. incoming props and use that information to set state in order
  // to conditionally render different style and/or elements

  componentWillReceiveProps(nextProps) {
    this.setState({increasing: nextProps.stocks > this.props.stocks})
  }

  render() {
    const style = {color: this.state.increasing ? 'green' : 'red'}
    console.log("In Stocks render", this.state)
    return <div style={style} >
      <h3>Value of my stocks:</h3>
      <h4>{this.state.increasing ? "Makin' that dough !!" : "OH NO, losing my moneyz!!!"}</h4>
      <h2>$$ {this.props.stocks}</h2>
    </div>
  }
}
