import React from "react";

class SearchBar extends React.Component {
  // shorthand for declaring initial state:
  state = { searchInputTerm: "" };
  // this.state = {searchInputTerm: ""}
  // constructor() {
  //   super();
  //   this.state = {
  //     searchInputTerm: "",
  //   };
  // }

  handleInputChange = e => {
    this.setState({ searchInputTerm: e.target.value });
  };

  // onSubmit={e => {
  //   e.preventDefault();
  //   this.props.handleSearch(this.state.searchInputTerm);
  // }}
  render() {
    return (
      <div className="ui secondary segment">
        <div className="ui huge fluid input">
          <form
            onSubmit={e =>
              this.props.handleSearch(e, this.state.searchInputTerm)
            }
          >
            <input
              onChange={this.handleInputChange}
              value={this.state.searchInputTerm}
              refs="searchTerm"
              id="search-term"
              type="text"
            />
            <button className="ui button" type="submit">
              SEARCH
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
