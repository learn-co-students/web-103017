import React from "react";
import VideoItem from "./VideoItem";

const VideoList = props => {
  const videos = props.videos.map(video => (
    <VideoItem key={video.etag} video={video} />
  ));

  return <div>{videos}</div>;
};

export default VideoList;
//
// <div className="four wide column">
//   <div className="ui relaxed items">
//     <div className="item">
//       <div className="ui small image">
//         <img src={} alt="" />
//       </div>
//       <div className="content">Title</div>
//     </div>
//   </div>
// </div>
// </div>
