// If you would like to refactor, have a look at the to-do list below :)

// TO DO
// Add filter to display the appropriate pokemon *DONE*
// Add keyup listener to search input *DONE*
// Add the 'flip' functionality - change display of sprite *DONE*
// Add the CSS in
// make allPokemon a private class variable **This might be the best place to start**
// Remove some of the code smell that's going on below
//  |-> refactor duplicate lines into SRP methods
//  |-> consider breaking into a new class for handling DOM actions
//  |-> consider different, cleaner ways of accomplishing various tasks

const allPokemon = [];
class Pokemon {
  constructor(json) {
    this.name = json.name
    this.front = json.sprites.front
    this.back = json.sprites.back
    allPokemon.push(this)
    // make the empty div with
    // property of display none
  }

  // static class methods
  static attachListeners() {
    document.getElementById('pokemon-search-input').addEventListener('keyup', this.filterPokemons)
  }

  static filterPokemons(e) {
    if (e.target.value === '') {
      allPokemon.forEach(pokemon => pokemon.hidePoke())
      document.getElementById('no-poke').style.display = 'block'
    } else {
      document.getElementById('no-poke').style.display = 'none'
      Pokemon.displayFilteredPokemons(Pokemon.findPokemon(e.target.value))
    }
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
    allPokemon.forEach(pokemon => pokemon.hidePoke())
    filteredPokemons.forEach(pokemon => pokemon.showPoke())
    // show the 'No Pokemons' message or not
    if (filteredPokemons.length === 0) {
      document.getElementById('no-poke').style.display = 'block'
    } else {
      document.getElementById('no-poke').style.display = 'none'
    }
  }

  toggleImage(pokemon) {
    if (document.querySelector(`#${this.name} img`).src === this.back) {
      document.querySelector(`#${this.name} img`).src = this.front
    } else {
      document.querySelector(`#${this.name} img`).src = this.back
    }

  }

  makeDiv() {
    // create our div for this instance
    // pokemon -- in #pokemon-container
    let div = document.createElement('div');
    div.className = 'pokemon-container'
    div.id = this.name
    div.innerHTML = this.render();
    document.getElementById('pokemon-container').appendChild(div)
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
      `<div>
        <h1>${this.name}</h1>
        <img src=${this.front}>
        <p data-id=${this.name} data-brendan="Brendan" id="p-flip-${this.name}">flip card</p>
      </div>`
    )
  }
}
