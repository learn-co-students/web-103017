//TODO: notes about responsibility of each file && posting to backend
class Adapter {
  static fetchAndSetPokemon() {
    //static creates a class method that we can call without instantiating Adapter––Adapter.fetchAndSetPokemon()
    fetch("http://localhost:3000/pokemons")
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error(response.statusText);
        }
      })
      .then(pokemonJSON =>
        pokemonJSON.forEach(pokemonData => new Pokemon(pokemonData))
      )
      .catch(err => console.error("Something went wrong", err));
  }
}
