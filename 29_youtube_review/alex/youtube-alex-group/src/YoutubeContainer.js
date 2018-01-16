import React from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import { fetchVideos } from './adapter';

class YoutubeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      searchTerm: '',
      selectedVideoId: null
    };
  }

  fetchAllVideos = term => {
    fetchVideos(term).then(data => {
      this.setState({
        videos: data.items,
        selectedVideoId: data.items[0].id.videoId
      });
    });
  };

  componentDidMount() {
    this.fetchAllVideos();
  }

  handleSelectVideo = id => {
    // console.log('handleSelectVideo is called', id);
    this.setState({ selectedVideoId: id });
  };

  handleChange = e => {
    const value = e.target.value;
    this.setState({ searchTerm: value }, () => {
      fetchVideos(this.state.searchTerm).then(data => {
        this.setState({
          videos: data.items,
          selectedVideoId: data.items[0].id.videoId
        });
      });
    });
  };

  render() {
    console.log(this.state);
    const selectedVideo = this.state.videos.find(
      v => v.id.videoId === this.state.selectedVideoId
    );

    return (
      <div className="ui grid container">
        <div className="sixteen wide column">
          <SearchBar
            handleChange={this.handleChange}
            searchTerm={this.state.searchTerm}
          />
        </div>
        <div className="twelve wide column">
          <VideoDetail video={selectedVideo} />
        </div>
        <div className="four wide column">
          <VideoList
            handleSelectVideo={this.handleSelectVideo}
            videos={this.state.videos}
          />
        </div>
      </div>
    );
  }
}

export default YoutubeContainer;
