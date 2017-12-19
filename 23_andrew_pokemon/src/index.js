document.addEventListener("DOMContentLoaded", () => {
  console.log("content loaded");
  //TODO
  //want the user input
  //stop the form from submitting
  // filter and find pokemon

  //grabbing DOM elements
  let searchTerm = "";
  const pokemonContainer = document.getElementById("pokemon-container");
  const searchInput = document.getElementById("pokemon-search-input");
  searchInput.addEventListener("keydown", e => {
    //TODO: fix the bug when user types backspace
    //iterate through Pokemon.all, see if we have any matches
    searchTerm += e.key;

    const filteredPokemon = Pokemon.all.filter(pokemon => {
      return pokemon.name.includes(searchTerm);
    });
    console.log(filteredPokemon);
    pokemonContainer.innerHTML = filteredPokemon
      .map(filteredMonster => filteredMonster.render())
      .join("");
  });

  //instantiate adapter && save fetch pokemon from DB && save in JS memory as Pokemon.all array
  // let adapter = new Adapter();
  //by creating a `static` or class method on the Adapter class, we no longer need to instantiate it
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
  Adapter.fetchAndSetPokemon();
  // fn that handles fetched data

  //when app first mounts what do we want to do?
});

//
