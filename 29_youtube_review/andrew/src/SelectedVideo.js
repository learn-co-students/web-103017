import React from "react";
// const embedUrl = `https://www.youtube.com/embed/${videoId}`;

const SelectedVideo = props => (
  <div className="twelve wide column">
    <div className="ui raised segments">
      <div className="ui segment">
        <div className="ui embed">
          <iframe src={`https://www.youtube.com/embed/${props.videoId}`} />
        </div>
      </div>
      <div className="ui segment">
        <h4>Title</h4>
      </div>
      <div className="ui secondary segment">
        <p>Description</p>
      </div>
    </div>
  </div>
);
export default SelectedVideo;
