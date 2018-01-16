import React from 'react';

const VideoDetail = ({ video }) => {
  return video ? (
    <div className="ui raised segments">
      <div className="ui segment">
        <div className="ui embed">
          <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} />
        </div>
      </div>
      <div className="ui segment">
        <h4>{video.snippet.title}</h4>
      </div>
      <div className="ui secondary segment">
        <p>{video.snippet.description}</p>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default VideoDetail;
