import React from 'react';

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo, i) => (
          <li key={i}>
            <p>{todo.description}</p>
            <p>{todo.priority}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
