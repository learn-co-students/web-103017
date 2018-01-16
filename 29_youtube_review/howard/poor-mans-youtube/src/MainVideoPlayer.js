import React from 'react';

const MainVideoContainer = (props) => {
    let caption, videoId
    caption = props.video ? props.video.snippet.description : '...loading'
    videoId = props.video ? props.video.id.videoId : ''
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    console.log("caption", caption, 'videoId', videoId)
    return (
      <div >
        <iframe onClick={props.handleCurrentVideoClick} src={embedUrl} />
        <div>{caption}</div>
      </div>
    );
}

export default MainVideoContainer;

//
// iframes are weird
// iframes are a little bit picky about the url you use for the src attribute. To get the video to render be sure to set up the embedUrl along the lines of:
//
// // videoId is coming from the api response,
// // to be found at .id.videoId
// const embedUrl = `https://www.youtube.com/embed/${videoId}`;
//
// // in the JSX
// <iframe src={embedUrl} />
