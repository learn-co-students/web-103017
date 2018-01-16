import React from 'react';

const SearchBar = props => {
  return (
    <div className="ui secondary segment">
      <div className="ui huge fluid input">
        <input onChange={props.handleChange} value={props.searchTerm} />
      </div>
    </div>
  );
};

export default SearchBar;
