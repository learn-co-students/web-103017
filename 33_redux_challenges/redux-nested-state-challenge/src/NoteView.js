import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

class NoteView extends React.Component {
  handleClick = id => {
    this.props.deleteNote(id);
  };

  render() {
    console.log(this.props);
    const notes = this.props.notes.map(note => (
      <div key={note.id} onClick={() => this.handleClick(note.id)}>
        {note.text}
      </div>
    ));
    return <div className="ui comments">{notes}</div>;
  }
}

const mapStateToProps = state => ({
  notes: state.notes
});

export default connect(mapStateToProps, actions)(NoteView);
