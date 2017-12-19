class Adapter {
  constructor() {
    //class constructor

  }

  // class methods
  static getPokemon() {
    fetch('http://localhost:3000/pokemons')
      .then(response => response.json())
      .then(json => Pokemon.makePokemons(json))
  }
}
