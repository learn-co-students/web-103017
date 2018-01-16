import React from 'react';
import VideoCard from './VideoCard'

const ListContainer = (props) => {
  const videos = props.videos.map((vid, index) => <VideoCard handleClick={props.handleClick} video={vid} key={index} />)
    return (
      <div>
        {videos}
      </div>
    );
}

export default ListContainer;
