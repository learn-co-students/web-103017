import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import SelectedVideo from "./SelectedVideo";
import API_KEY from "./keys";
// import _ from 'lodash'
// const API_KEY = "AIzaSyCUVIg4sQA5eg8huCRYVHJQSfwElOwenoo";

// `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&q=${searchTerm}&type=video`
class YouTubeContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      term: "puppies",
      videos: [
        {
          etag: '"m2yskBQFythfE4irbTIeOgYYfBU/XoCknp0EO0YWZcuTVD_GhkJp_-M"',
          id: { kind: "youtube#video", videoId: "KMZ7oOCXfP8" },
          snippet: {
            title:
              "Super Smart Dolphin Answers Questions - Extraordinary Animals - Earth",
            description:
              "The Echo Location Visualization and Interface System (ELVIS) allows Dolphins to make choices and answer questions. Luna the young Dolphin grasped the ...",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/KMZ7oOCXfP8/default.jpg",
              },
            },
          },
        },
        {
          etag: '"m2yskBQFythfE4irbTIeOgYYfBU/z_l0ThWRPFnv9um1eRM_O1LVUqU"',
          id: { kind: "youtube#video", videoId: "3Bk6VPWGi1o" },
          snippet: {
            title: 'The Complete 2016 SeaWorld "Blue Horizons" Dolphin Show',
            description:
              "Please SUBSCRIBE by clicking here: http://www.youtube.com/subscription_center?add_user=MoneySavingVideos To see my entire SeaWorld playlist click ...",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/3Bk6VPWGi1o/default.jpg",
              },
            },
          },
        },
      ],
      selectedVideo: null,
    };
  }

  componentDidMount() {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&q=${
        this.state.term
      }&type=video`
    )
      .then(res => res.json())
      .then(console.log);
    // ADAPTER––get videos
  }

  handleSearch = (e, term) => {
    e.preventDefault();
    this.setState({ term });
    //{term: term}
    // TODO: ASK YOUTUBE FOR DATA
    // ADAPTER.findVideos
    // fetch()
  };

  handleSelectedVideo = videoId => {
    const selectedVideo = this.state.videos.find(video => video.id === videoId);
    this.setState({ selectedVideo });
  };

  render() {
    console.log(this.state);
    // const searchTerm = "dog";
    // fetch(
    //   `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&q=${searchTerm}&type=video`
    // )
    //   .then(resp => resp.json())
    //   .then(console.log);

    return (
      <div className="ui grid container">
        <div className="sixteen wide column">
          <SearchBar handleSearch={this.handleSearch} term={this.state.term} />
          <VideoList videos={this.state.videos} />
          <SelectedVideo selectedVideo={this.state.selectedVideo} />
        </div>
      </div>
    );
  }
}

export default YouTubeContainer;
