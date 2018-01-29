import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions'

const MuseumPicker = ({filterByMuseum, fetchPaintings}) => {
  return (
    <div className="row">
      <div className="ui menu">
        <div onClick={() => fetchPaintings()}className="active item">All Museums</div>
        <div onClick={() => filterByMuseum()} className="item">National Gallery of Art, Washington D.C.</div>
      </div>
    </div>
  );
};

export default connect(null, actions)(MuseumPicker);
