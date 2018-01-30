import React from 'react';
import { selectMuseum } from '../actions';
import { connect } from 'react-redux';

const MuseumPicker = props => {
  return (
    <div className="row">
      <div className="ui menu">
        <div
          onClick={() => props.selectMuseum('ALL')}
          className={`${props.activeMuseum === 'ALL' ? 'active' : ''} item`}
        >
          All Museums
        </div>
        <div
          onClick={() =>
            props.selectMuseum('National Gallery of Art, Washington D.C.')}
          className={`${props.activeMuseum ===
          'National Gallery of Art, Washington D.C.'
            ? 'active'
            : ''} item`}
        >
          National Gallery of Art, Washington D.C.
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    activeMuseum: state.visiblePaintings
  };
};

export default connect(mapStateToProps, { selectMuseum })(MuseumPicker);
