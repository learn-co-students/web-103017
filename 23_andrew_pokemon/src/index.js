/*we can think of the index.js file as our `main` file, similar to `app.rb` that we saw in the ruby CLI project. This file is responsible for kicking off our application. Following this line of thought, we should grab all the DOM elements we'll need, attach event listeners to those DOM elements, and fetch the data from our backend*/
document.addEventListener("DOMContentLoaded", () => {
  console.log("content loaded"); //make sure our listener for DOMContentLoaded is working properly

  //request data from our API, which has been moved into an adapter class whose sole responsibility is communicating with the server. If there is a change to the API or any of our endpoints, we know exactly where to look if code needs to be updated
  Adapter.fetchAndSetPokemon().then(pokemonData =>
    pokemonData.forEach(pokemon => {
      new Pokemon(pokemon);
    })
  ); //by creating a `static` or class method on the Adapter class, we no longer need to instantiate it––https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
  //select our DOM elements
  // let searchTerm = ""; //declare a variable to keep track of whatever the user typed in
  const pokemonContainer = document.getElementById("pokemon-container"); //the container where we will append elements
  pokemonContainer.addEventListener("click", e => {
    if (e.target.name === "flip-pokemon") {
      const targetId = parseInt(e.target.dataset.id);
      const targetPokemon = Pokemon.all.find(
        pokemon => pokemon.id === targetId
      );
      const targetImg = document.querySelector(`img[data-id="${targetId}"]`);
      targetPokemon.flipPokemon(targetImg);
    }
  });

  const searchInput = document.getElementById("pokemon-search-input"); //input field user types their term into
  searchInput.addEventListener("input", e => {
    const searchTerm = e.target.value.trim();
    // console.log(searchTerm);
    // searchTerm += e.key; we can use e.target.value now to update searchTerm everytime the user types something

    //this variable will save a filtered copy of our Pokemon.all array; TODO: could this be moved somewhere else?
    const filteredPokemon = Pokemon.all.filter(pokemon =>
      pokemon.name.includes(searchTerm)
    );

    pokemonContainer.innerHTML = filteredPokemon
      .map(pokemon => pokemon.render())
      .join(""); //update the DOM by resetting the innerHTML based on our filteredPokemon list
  });
});
