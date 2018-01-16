import React from "react";
// const embedUrl = `https://www.youtube.com/embed/${videoId}`;

const SelectedVideo = ({ id, snippet }) => {
  if (!id || !snippet) {
    return <div>LOADING VIDEOS</div>;
  } else {
    return (
      <div className="twelve wide column">
        <div className="ui raised segments">
          <div className="ui segment">
            <div className="ui embed">
              <iframe src={`https://www.youtube.com/embed/${id.videoId}`} />;
            </div>
          </div>
          <div className="ui segment">
            <h4>{snippet.title}</h4>
          </div>
          <div className="ui secondary segment">
            <p>{snippet.description}</p>
          </div>
        </div>
      </div>
    );
  }
};
export default SelectedVideo;
