function handleSpriteToggle(event) {
  //we are attaching a listener to the pokemon-container. because this parent element will always know about what happens to its children, we can delegate the responsibility and use one event handler for ALL pokemon cards instead of separate handlers for each pokemon
  if (event.target.name === "flip-pokemon") {
    //we named the button to make it easier to determine what the user clicked
    const targetId = parseInt(event.target.dataset.id); //data-id is always a string; our ids are integers
    const targetImg = document.querySelector(`img[data-id="${targetId}"]`); //grab the img tag we want to flip
    const targetPokemon = Pokemon.all.find(pokemon => pokemon.id === targetId); //let the pokemon flip its own card
    targetPokemon.flipPokemon(targetImg);
  }
}

function handleSearchInput(event, pokemonContainer) {
  //event is the "input" event
  const searchTerm = event.target.value.trim(); //grab whatever the user typed in and .trim() off any extra spaces

  const filteredPokemon = Pokemon.all.filter(pokemon =>
    pokemon.name.includes(searchTerm)
  ); //grab a filtered list of pokemon that match the user's search term

  pokemonContainer.innerHTML = filteredPokemon
    .map(pokemon => pokemon.render())
    .join(""); //update the DOM by resetting the innerHTML based on our filteredPokemon list; each instance of pokemon has a .render() method that generates a string of HTML. .map() returns an array that we can .join("") in order to create a large string of HTML
}
