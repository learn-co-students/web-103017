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

const Pokemon = (function createPokemonClass() {
  const all = []
  return class Pokemon {
    // new Pokemon('name', 'img', 'img')
    constructor(name, frontImg, backImg) {
      this.name = name
      this.frontImg = frontImg
      this.backImg = backImg
      all.push(this)
    }

    // Pokemon.all()
    static all() {
      return [...all]
    }
  }
})()


console.log('running creation of pokemon');
PokemonAdapter.getPokemons().then(pokemons => {
  pokemons.forEach(function(pokemon) {
    new Pokemon(pokemon.name, pokemon.sprites.front, pokemon.sprites.back)
    // console.log(`created ${pokemon.name}`);
  })
})


function displayPokemon(filteredPokemons) {
  const container = document.getElementById('pokemon-container')
  container.innerHTML = ''
  filteredPokemons.forEach(function(pokemon){
    container.innerHTML += `
      <div class="pokemon-container">
      <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
      <h1 class="center-text">${pokemon.name}</h1>
      <div style="width:239px;margin:auto">
        <div style="width:96px;margin:auto">
          <img src="${pokemon.frontImg}">
        </div>
      </div>
      <p style="padding:10px;" class="center-text flip-image" data-pokename="${pokemon.name}" data-action="flip-image">flip card</p>
      </div>
    </div>`
  })
}


function handleSearch(event /* implicit argument */){
  const searchTerm = event.target.value

  // PokemonAdapter.getPokemons() // DON'T DO THIS, MAKES TOO MANY REQUESTS
  const allPokemon = Pokemon.all()
  const filteredPokemons = allPokemon.filter(function(pokemon) {
    return pokemon.name.includes(searchTerm)
  })
  displayPokemon(filteredPokemons) // actually changing the page
}










document.addEventListener("DOMContentLoaded", function(event) {
  // --2. Listen for an input--
  // --1. Get all pokemon--
  // 3. Create some elements and attach to DOM

  console.log('adding event listener');
  const searchInput = document.querySelector('#pokemon-search-form input')
  searchInput.addEventListener('keyup', handleSearch)
})
