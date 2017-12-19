//TODO: notes about responsibility of each file && posting to backend
class Adapter {
  static fetchAndSetPokemon() {
    //static creates a class method that we can call without instantiating Adapter––Adapter.fetchAndSetPokemon()
    return fetch("http://localhost:3000/pokemons")
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error(response.statusText);
        }
      })
      .catch(err => console.error("Something went wrong", err));
  }

  static createNewPokemon(pokemonData) {
    //creating a method to demonstrate request/response cycle; will integrate later
    return fetch("http://localhost:3000/pokemons", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        height: 10,
        weight: 130,
        name: "bulbasaur",
        abilities: ["overgrow", "chlorophyll"],
        moves: [],
        stats: [],
        types: ["grass", "poison"],
        sprites: {
          front:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        },
      }),
    }).then(r => r.json());
  }
}
