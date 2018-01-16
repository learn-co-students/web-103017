import React from "react";
import Adapter from "./Adapter";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import SelectedVideo from "./SelectedVideo";
// import API_KEY from "./keys";
// import _ from 'lodash'
// const API_KEY = "AIzaSyCUVIg4sQA5eg8huCRYVHJQSfwElOwenoo";

// `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&q=${searchTerm}&type=video`
class YouTubeContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      term: "puppies",
      videos: [],
      selectedVideo: null,
    };
  }

  componentDidMount() {
    Adapter.searchVideos(this.state.term)
      .then(res => res.json())
      .then(youtubeJSON => {
        this.setState(
          { selectedVideo: youtubeJSON.items[0], videos: youtubeJSON.items },
          () => console.log(this.state)
        );
      });
  }

  handleSearch = (e, term) => {
    e.preventDefault();
    Adapter.searchVideos(term)
      .then(res => res.json())
      .then(youtubeJSON => {
        this.setState({
          selectedVideo: youtubeJSON.items[0],
          videos: youtubeJSON.items,
        });
      });
    this.setState({ term });
  };

  handleSelectedVideo = etag => {
    const selectedVideo = this.state.videos.find(video => video.etag === etag);
    this.setState({ selectedVideo });
  };

  render() {
    return (
      <div className="ui grid container">
        <SearchBar handleSearch={this.handleSearch} />
        <SelectedVideo {...this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          handleSelectedVideo={this.handleSelectedVideo}
        />
      </div>
    );
  }
}

export default YouTubeContainer;
