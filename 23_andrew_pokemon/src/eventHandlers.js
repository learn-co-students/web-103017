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
