import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div className="App"><App /></div>, document.getElementById('root'));
registerServiceWorker();


// this.portfolioChecker = setInterval(() => {
//   this.setState({portfolioValue: Math.floor(Math.random() * 10000)})
// }, 1000)
