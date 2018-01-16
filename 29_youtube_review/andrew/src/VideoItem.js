import React from "react";

const VideoItem = props => (
  /*return*/ <div
    className="item"
    onClick={() => props.handleSelectedVideo(props.video.etag)}
  >
    <div className="ui small image">
      <img src={props.video.snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="content">{props.video.snippet.title}</div>
  </div>
);

export default VideoItem;
