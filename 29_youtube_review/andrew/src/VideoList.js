import React from "react";
import VideoItem from "./VideoItem";

const VideoList = props => {
  const videoItems = props.videos.map(video => (
    <VideoItem
      key={video.etag}
      video={video}
      handleSelectedVideo={props.handleSelectedVideo}
    />
  ));

  return (
    <div className="four wide column">
      <div className="ui relaxed items">{videoItems}</div>
    </div>
  );
};

export default VideoList;
