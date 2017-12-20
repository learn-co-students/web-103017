//TODO: notes about responsibility of each file && posting to backend
/*The adapter class has the sole responsibility of communicating with our backend. In the event that one of our endpoints changes or we want to the ability to make more requests to the backend, keeping all of that code in one place makes it easy to update and troubleshoot any issues with our requests*/
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
    //TODO:creating a method to demonstrate request/response cycle; will integrate later
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
