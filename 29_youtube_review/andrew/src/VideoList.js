import React from "react";
import VideoItem from "./VideoItem";

const VideoList = props => {
  const videos = props.videos.map(video => (
    <VideoItem key={video.etag} video={video} />
  ));

  return <div>{videos}</div>;
};

export default VideoList;
