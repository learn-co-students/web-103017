import React from 'react';

const VideoCard = (props) => {
    let thumbnail_url, caption
    thumbnail_url = props.video.snippet.thumbnails.default.url
    caption = props.video.snippet.description

    console.log("thumb", thumbnail_url, "caption", caption)
    return (
      <div onClick={() => props.handleClick(props.video)}>
        <img src={thumbnail_url} alt=""/>
        <div>{caption}</div>
      </div>
    );
}

export default VideoCard;
