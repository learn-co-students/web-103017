import React from 'react';
import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    const allPets = this.props.pets.map(pet => {
      const adopted = this.props.adoptedPets.includes(pet.id);

      return (
        <Pet onAdoptPet={this.props.onAdoptPet} pet={pet} adopted={adopted} />
      );
    });
    return <div className="ui cards">{allPets}</div>;
  }
}

export default PetBrowser;
