class Pokemon {
  constructor(json) {
    this.name = json.name
    this.front = json.sprites.front
    this.back = json.sprites.back
    // make the empty div with
    // property of display none
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
  }

  showPoke() {
    document.getElementById(this.name).style.display = 'block'
  }

  hidePoke() {
    document.getElementById(this.name).style.display = 'none'
  }

  // render's job is to create and return HTML
  render() {
    return (
      `<div>
        <h1>${this.name}</h1>
        <img src=${this.front}>
        <p>flip card</p>
      </div>`
    )
  }



}


const pokes = {
  "height": 10,
  "weight": 130,
  "order": 2,
  "name": "ivysaur",
  "abilities": [
    "overgrow",
    "chlorophyll"],
  "moves": [],
  "stats": [
    { "value": 80,
      "name": "special-defense"
    },
    {
      "value": 80,
      "name": "special-attack"
    },
    {
      "value": 63,
      "name": "defense"
    },
    {
      "value": 62,
      "name": "attack"
    },
    {
      "value": 60,
      "name": "speed"
    },
    {
      "value": 60,
      "name": "hp"
    }
  ],
  "types": [
    "grass",
    "poison"
  ],
  "sprites": {
    "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    "back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png"
  }
}
