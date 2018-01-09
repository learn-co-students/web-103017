import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputLogger from './InputLogger';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const todos = [
  { description: 'a', priority: 'low' },
  { description: 'b', priority: 'high' }
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: todos
    };
  }

  addTodo = newTodo => {
    console.log('newTodo is', newTodo);
    this.setState(prevState => {
      return {
        todos: [...prevState.todos, newTodo]
      };
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* <InputLogger /> */}
        <TodoForm addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
