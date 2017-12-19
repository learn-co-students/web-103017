//when i call `new` Pokemon, JavaScript will look for and call the constructor function
// let id = 0; don't need this anymore
// we no longer need to dynamically generate ids for our objects because the database will provide ids for us. this way we can uniquely identify each object based on its id && run CRUD actions based on that id; Pokemon.find(params[:id])
class Pokemon {
  constructor(pokemonData) {
    this.name = pokemonData.name;
    this.height = pokemonData.height;
    this.abilities = pokemonData.abilities;
    this.id = pokemonData.order; //this id points to the id from db
    this.sprites = pokemonData.sprites;
    //what we did before this.id = ++id,
    Pokemon.all.push(this);
    //create our new pokemon
  }
  render() {
    return `<div>
      <p>${this.name}</p>
      <img src="${this.sprites.front}" />
      </div>`;
  }
}

//Pokemon class is technically a function. A function is technically an object. THEREFORE, we can declare key/value pairs on the function object. Pokemon.all is just an array defined on the Pokemon function object
Pokemon.all = [];
