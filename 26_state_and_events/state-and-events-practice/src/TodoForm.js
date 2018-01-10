import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { description: "", priority: "" };
  }

  handleSubmit = ev => {
    ev.preventDefault();

    this.props.addTodo(this.state);

    this.setState({ description: "", priority: "" });
  };

  handleDescriptionChange = event => {
    this.setState({ description: event.target.value });
  };

  handlePriorityChange = event => {
    this.setState({ priority: event.target.value });
  };

  render() {
    console.log("TodoForm is rendering", this.props);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="description"
            name="description"
            value={this.state.description}
            onChange={this.handleDescriptionChange}
          />
          <input
            placeholder="priority"
            name="priority"
            value={this.state.priority}
            onChange={this.handlePriorityChange}
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
