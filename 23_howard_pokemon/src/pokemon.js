// If you would like to refactor, have a look at the to-do list below :)

// TO DO
// Add filter to display the appropriate pokemon *DONE*
// Add keyup listener to search input *DONE*
// Add the 'flip' functionality - change display of sprite *DONE*
// make allPokemon a private class variable *DONE*
// Add the CSS in
// Remove some of the code smell that's going on below
//  |-> refactor duplicate lines into SRP methods
//  |-> consider breaking into a new class for handling DOM actions
//  |-> consider different, cleaner ways of accomplishing various tasks

const Pokemon = function() {
   // class variables declarations
   // allPokemon will hold the collection of Pokemon objects
   const allPokemon = [];
   // class constants -- these do not change.  Be careful no to mistake the
   // const declaration for true constants that don't change, represented
   // by all caps:
   const NO_POKE_MESSAGE_P = document.getElementById('no-poke')
   const SEARCH_INPUT = document.getElementById('pokemon-search-input')
   const POKE_CONTAINER_DIV = document.getElementById('pokemon-container')

   return class Pokemon {
    constructor(json) {
      this.name = json.name
      this.front = json.sprites.front
      this.back = json.sprites.back
      allPokemon.push(this)
    }

    // static class methods

    // The following method would be required if we were to build
    // a separate class to handle DOM interaction that needs access
    // to all our pokemons, referenced by Pokemon.all()
    // static all() {
    //   return [...allPokemon]
    // }

    static attachListeners() {
      SEARCH_INPUT.addEventListener('keyup', this.filterPokemons)
    }

    static filterPokemons(e) {
      if (e.target.value === '') {
        allPokemon.forEach(pokemon => pokemon.hidePoke())
        Pokemon.noPokeMsgToggle(true)
      } else {
        Pokemon.noPokeMsgToggle(false)
        Pokemon.displayFilteredPokemons(Pokemon.findPokemon(e.target.value))
      }
    }

    static noPokeMsgToggle(bool) {
      NO_POKE_MESSAGE_P.style.display = bool
        ? 'block'
        : 'none'
    }


    static makePokemons(json) {
      json.forEach(
        function(pokemon){
          let newPokemon = new Pokemon(pokemon)
          newPokemon.makeDiv()
        }
      )
    }

    static findPokemon(query) {
      return allPokemon.filter(pokemon => pokemon.name.includes(query))
    }

    static displayFilteredPokemons(filteredPokemons) {
      // 'reset' the pokemons view -- is there a better way to do this?
      allPokemon.forEach(pokemon => pokemon.hidePoke())
      // show the pokemons that match the search query
      filteredPokemons.forEach(pokemon => pokemon.showPoke())
      // show the 'No Pokemons' message or not
      filteredPokemons.length === 0
      ? Pokemon.noPokeMsgToggle(true)
      : Pokemon.noPokeMsgToggle(false)
    }

    toggleImage(pokemon) {
      let pokeImage = document.querySelector(`#${this.name} img`)
      pokeImage.src === this.back ? pokeImage.src = this.front : pokeImage.src = this.back;
    }

    makeDiv() {
      // create our div for this instance
      // pokemon -- in #pokemon-container
      let div = document.createElement('div');
      div.className = 'pokemon-container'
      div.id = this.name
      div.innerHTML = this.render();
      POKE_CONTAINER_DIV.appendChild(div)
      div.style.display = 'none'
      div.addEventListener('click', Pokemon.flipPoke)
    }

    static flipPoke(e) {
      if (e.target.id.includes('flip')) {
        let pokemon = allPokemon.find(p => p.name === e.target.dataset.id)
        pokemon.toggleImage()
      }
    }

    // show a pokemon
    showPoke() {
      document.querySelector(`#${this.name} img`).src = this.front
      document.getElementById(this.name).style.display = 'block'
    }

    // hide a pokemon
    hidePoke() {
      document.getElementById(this.name).style.display = 'none'
    }

    // render's job is to create and return HTML
    render() {
      return (
        `<div class='flip-image center-text'>
          <h1>${this.name}</h1>
          <img src=${this.front}>
          <p data-id=${this.name} id="p-flip-${this.name}">flip card</p>
        </div>`
      )
    }
  }
}()
