import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Painting = props => {
  // console.log('Painting props', props);
  return (
    <div className="item">
      <div className={`ui ${props.color} segment`}>
        <div className="ui small image">
          <img src={props.painting.image} alt={props.painting.slug} />
        </div>
        <div className="middle aligned content">
          <div className="header">{`"${props.painting.title}" by ${props
            .painting.artist.name}`}</div>
          <div className="description">
            <a onClick={() => props.handleVote(props.painting.id)}>
              <i className="large caret up icon" />
              {props.painting.votes} votes
            </a>
          </div>
          <div className="extra">
            <div className="ui big buttons">
              <Link to={`/paintings/${props.painting.slug}`}>
                <Button text="More Info">
                  <i className="add circle icon" />
                </Button>
              </Link>
              <Button onClick={props.handleDelete}>
                <i className="trash icon" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Painting;
