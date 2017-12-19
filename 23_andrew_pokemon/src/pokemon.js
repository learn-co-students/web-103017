//when i call `new` Pokemon, js will look for and call the constructor fn
// let id = 0; don't need this anymore
// we no longer need to dynamically generate ids for our objects because the database will provide ids for us. this way we can uniquely identify each object based on its id && run CRUD actions based on that id; Pokemon.find(params[:id])
class Pokemon {
  constructor(pokemonData) {
    (this.name = pokemonData.name),
      (this.height = pokemonData.height),
      (this.abilities = pokemonData.abilities),
      (this.id = pokemonData.order), //this id points to the id from db
      (this.sprites = pokemonData.sprites),
      //what we did before this.id = ++id,
      Pokemon.all.push(this);
    //create our new pokemon
  }
  render() {
    return `<p>${this.name}</p>`;
  }
}

Pokemon.all = [];
