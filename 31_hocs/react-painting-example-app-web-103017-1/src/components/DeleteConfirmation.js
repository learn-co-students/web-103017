import React from 'react';
import Button from './Button';

const Painting = props => {
  // console.log('Painting props', props);
  return (
    <div className="item">
      <div className="ui small image">
        <img src={props.painting.image} alt={props.painting.slug} />
      </div>
      <div className="middle aligned content">
        <h3>Are you sure you want to remove {props.painting.title}</h3>
        <div className="ui buttons">
          <Button onClick={props.handleCancelClick} text="No" />
          <Button
            onClick={() => props.handleDelete(props.painting.id)}
            text="Delete It"
          />
        </div>
      </div>
    </div>
  );
};
export default Painting;
