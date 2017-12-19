class PokemonAdapter {
  // manages making requests, in between app code and server

  static getPokemons() {
    // returns a promise so that we can chain
    return fetch('http://localhost:3000/pokemons')
  	 .then(response => response.json())
  }

  static getPokemon(name) {
    // return promise with one pokemon object
    return fetch(`http://localhost:3000/pokemons/?name=${name}`)
  	 .then(response => response.json())
     .then(arr => arr[0])
  }
}

// PokemonAdapter.getPokemons()
// DON'T DO: new PokemonAdapter()

document.addEventListener("DOMContentLoaded", function() {
  // --1. Get all pokemon--
  // 2. Listen for an input
  // 3. Create some elements and attach to DOM
})
