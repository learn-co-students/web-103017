import React from "react";

const VideoItem = props => {
  console.log(props);
  return (
    <div className="twelve wide column">
      <div className="ui raised segments">
        <div className="ui segment">
          <div className="ui embed">
            <img src={props.video.snippet.thumbnails.default.url} />
          </div>
        </div>
        <div className="ui segment">
          <h4>{props.video.snippet.title}</h4>
        </div>
        <div className="ui secondary segment">
          <p>{props.video.snippet.description}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
