import React, { Component } from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

import { getAll } from '../data/pets';

class App extends Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all'
      }
    };
  }

  componentDidMount() {
    this.setState({ pets: getAll() });
  }

  onChangeType = type => {
    const newType = { type };

    this.setState({ filters: newType });
  };

  onAdoptPet = id => {
    this.setState(prevState => {
      return {
        adoptedPets: [...prevState.adoptedPets, id]
      };
    });
  };

  render() {
    console.log('App is rendering', this.state);
    const { pets, adoptedPets, filters } = this.state;

    const filteredPets = pets.filter(pet => {
      if (filters.type === 'all') {
        return pet;
      } else {
        return pet.type === filters.type;
      }
    });

    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.onChangeType}
                activeFilter={filters.type}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                onAdoptPet={this.onAdoptPet}
                pets={filteredPets}
                adoptedPets={adoptedPets}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
