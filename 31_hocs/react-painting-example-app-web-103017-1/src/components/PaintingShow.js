import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import withColor from './hocs/withColor';

const PaintingShow = ({ painting, color }) => {
  return (
    <div className={`ui ${color ? color + ' inverted' : undefined} segment`}>
      <div className="ui centered card">
        <div className="image">
          <img src={painting.image} alt={painting.slug} />
        </div>
        <div className="content">
          <div className="header">{painting.title}</div>
          <div className="meta">{painting.date}</div>
          <div className="meta">
            {painting.dimensions.width} in. x {painting.dimensions.height} in.
          </div>
          <div className="description">
            by {painting.artist.name}
            <p>
              {painting.artist.birthday} - {painting.artist.deathday}
            </p>
            <p>{painting.artist.hometown}</p>
          </div>
        </div>
        <div className="extra content">{painting.museum.name}</div>
      </div>
      <Link to="/paintings">
        <Button text="Back">
          <i className="left arrow icon" />
        </Button>
      </Link>
    </div>
  );
};

export default withColor(PaintingShow);
