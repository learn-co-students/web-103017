class Adapter {
  fetchAndSetPokemon() {
    fetch("http://localhost:3000/pokemons")
      .then(r => r.json())
      //pokemonJSON.forEach(pokemon => const p = new Pokemon(pokemon))
      .then(pokemonJSON =>
        pokemonJSON.forEach(pokemonData => new Pokemon(pokemonData))
      );
  }
}
//
// etch("/api/foo")
//   .then( response => {
//     if (!response.ok) { throw response }
//     return response.json()  //we only get here if there is no error
//   })
//   .then( json => {
//     this.props.dispatch(doSomethingWithResult(json))
//   })
//   .catch( err => {
//     err.text().then( errorMessage => {
//       this.props.dispatch(displayTheError(errorMessage))
//     })
//   })
