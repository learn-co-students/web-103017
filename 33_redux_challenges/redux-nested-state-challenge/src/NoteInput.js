import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

class NoteInput extends React.Component {
  state = {
    value: ''
  };

  onChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleSubmit = () => {
    this.props.addNote(this.state.value);
    this.setState({
      value: ''
    });
  };

  render() {
    return (
      <div className="ui input">
        <input onChange={this.onChange} value={this.state.value} type="text" />
        <button
          onClick={this.handleSubmit}
          className="ui primary button"
          type="submit"
        >
          Add a Note
        </button>
      </div>
    );
  }
}

export default connect(null, actions)(NoteInput);
