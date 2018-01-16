import React from 'react';

const SearchBar = (props) => {
    return <input onChange={props.handleChange} value={props.searchTerm} type="text"/>
}

export default SearchBar;
