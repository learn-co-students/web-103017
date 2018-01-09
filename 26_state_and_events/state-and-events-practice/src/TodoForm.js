import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { description: '', priority: '' };
  }

  handleSubmit = ev => {
    ev.preventDefault();

    this.props.addTodo(this.state);

    this.setState({ description: '', priority: '' });
  };

  handleChange = ev => {
    const value = ev.target.value;
    const name = ev.target.name;
    this.setState(prevState => {
      return { [name]: value };
    });
  };

  handleChange = (value, field) => {
    this.setState(prevState => {
      return { [field]: value };
    });
  };

  render() {
    console.log('TodoForm is rendering', this.props);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="description"
            name="description"
            value={this.state.description}
            onChange={e => this.handleChange(e.target.value, 'description')}
          />
          <input
            placeholder="priority"
            name="priority"
            value={this.state.priority}
            onChange={e => this.handleChange(e.target.value, 'priority')}
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
