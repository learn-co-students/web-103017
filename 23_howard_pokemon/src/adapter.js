class Adapter {
  constructor() {
    //class constructor

  }
  // instance methods

  // class methods
  static getPokemon() {
    fetch('http://localhost:3000/pokemons')
      .then(response => response.json())
      .then(json => this.makePokemons(json))
  }

  static makePokemons(json) {
    json.forEach(
      function(pokemon){
        let newPokemon = new Pokemon(pokemon)
        newPokemon.makeDiv()
      }
    )
  }

}
