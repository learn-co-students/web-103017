import React from 'react'

// this is a controlled component because the value always comes from state.
// React forms can also be uncontrolled. Don't mix the two!

const Searchbar = ({searchTerm, handleSearchChange}) => {
  return (
    <div className="ui secondary segment">
      <div className="ui huge fluid input">
        <input type='text' value={searchTerm} onChange={handleSearchChange}/>
      </div>
    </div>
  )
}

export default Searchbar

// you can alternately put your inputs inside a form, but you still need to set onClick functions
// to handle the data
// <form>
//   <input type='text' />
//   <input type='submit' value='search' />
// </form>

// your props look like the below:
// {handleSearchChange: function....,
// searchTerm: ''
// }
