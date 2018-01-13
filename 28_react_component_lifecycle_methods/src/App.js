import React, { Component } from 'react';
import Parent from './Parent'
import Stocks from './Stocks'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      message: 'hello',
      books: [],
      portfolioValue: 0
    }
  }

  componentDidMount() {
    console.log("In App ComponentDidMount")

    const topics = ['classics', 'virginia woolf', 'dune', 'fire and fury', 'russian literature', 'programming', 'dummies', 'historical non-fiction', 'french cuisine', 'marcel']
    let currentTopic = topics[Math.floor(Math.random() * 10)]
    console.log(currentTopic, "current topic")
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${currentTopic}`)
      .then(resp => resp.json())
      .then(jsonData => this.setState({books: jsonData.items}))

    this.portfolioChecker = setInterval(() => {
      this.setState({portfolioValue: Math.floor(Math.random() * 100000)})
    }, 4000)
  }

  componentWillReceiveProps(nextProps) {
    console.log("In App ComponentWillMount")
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("In App shouldComponentUpdate")
    return true;
  }

  componentWillUnmount() {
    clearInterval(this.portfolioChecker)
    console.log("In App ComponentWillMount")
  }

  componentDidUpdate() {
    console.log("In App ComponentDidUpdate")
  }

  render() {
    console.log("In App render")
    console.log("State in App is ", this.state)
    return (
      <div>
        <div>
          <h2>Eyes on mah' Money</h2>
          <Stocks stocks={this.state.portfolioValue}/>
        </div>
        <h1 style={{color: 'blue'}}>Help Howard be more Literature-y</h1>
        <Parent message={this.state.message} books={this.state.books}></Parent>
      </div>

    );
  }
}

export default App;
