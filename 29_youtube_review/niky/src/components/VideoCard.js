import React from 'react'

const VideoCard = ({video}) => {
  return (
    <div className="four wide column">
      <div className="ui relaxed items">
        <div className="item">
          <div className="ui small image">
            <img src={video.snippet.thumbnails.medium.url}  />
          </div>
          <div className="content">{video.snippet.title}</div>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
