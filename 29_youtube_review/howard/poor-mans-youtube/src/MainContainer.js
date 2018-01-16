import React from 'react';
import SearchBar from './SearchBar'
import ListContainer from './ListContainer'
import MainVideoPlayer from './MainVideoPlayer'

import API_KEY from './api-key'
export default class MainContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      searchTerm: "funny cats",
      videos: [],
      currentVideo: null,
    }
  }

  componentDidMount() {
    this.fetchVideos()
  }

  fetchVideos = () => {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&q=${this.state.searchTerm}&type=video`)
    .then(resp => resp.json())
    .then(videos => this.setState(
      {
        videos: videos.items,
        currentVideo: videos.items[0]
      }
    ))
  }

  handleChange = (e) => {
    // let value = e.target.value
    this.setState({
      searchTerm: e.target.value
    }, this.fetchVideos())
  }

  handleCurrentVideoClick = (e) => {
    console.log(e.target)
  }

  handleClick = (video) => {
    console.log("in handle click, this was clicked:")
    this.setState({
      currentVideo: video
    }
    )
  }

  render() {
    console.log("In MainContainer render, state is", this.state)
    return (
      <div>
        <SearchBar
          handleChange={this.handleChange}
          searchTerm={this.state.searchTerm}
        />
        <MainVideoPlayer handleCurrentVideoClick={this.handleCurrentVideoClick} video={this.state.currentVideo}/>
        <ListContainer handleClick={this.handleClick} videos={this.state.videos} />
      </div>
    );
  }
}
