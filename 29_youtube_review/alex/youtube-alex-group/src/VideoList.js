import React from 'react';

const VideoList = props => {
  const items = props.videos.map(vid => {
    return (
      <div
        onClick={() => props.handleSelectVideo(vid.id.videoId)}
        key={vid.id.videoId}
        className="item"
      >
        <div className="ui small image">
          <img src={vid.snippet.thumbnails.default.url} alt="" />
        </div>
        <div className="content">{vid.snippet.title}</div>
      </div>
    );
  });
  return <div className="ui relaxed items">{items}</div>;
};

export default VideoList;
