import React, { Component } from 'react';

class Pet extends Component {
  render() {
    const { pet, adopted, onAdoptPet } = this.props;
    // console.log('Pet props', this.props);

    return (
      <div className="card">
        <div className="content">
          <a className="header">{`${pet.name}  ${pet.gender === 'female'
            ? '♀'
            : '♂'}`}</a>
          <div className="meta">
            <span className="date">{pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {adopted ? (
            <button disabled className="ui primary button">
              Adopt pet
            </button>
          ) : (
            <button
              onClick={() => onAdoptPet(pet.id)}
              className="ui primary button"
            >
              Adopt pet
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Pet;
