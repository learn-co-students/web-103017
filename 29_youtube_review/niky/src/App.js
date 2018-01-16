import React, { Component } from 'react';
import MainVideoDisplay from './components/MainVideoDisplay'
import Searchbar from './components/Searchbar'
import Sidebar from './components/Sidebar'

const API_KEY = ''
// const activeVideo = {
//    "kind": "youtube#searchResult",
//    "etag": "\"S8kisgyDEblalhHF9ooXPiFFrkc/841gm4moVMbR3dc2A0ABYoitUuA\"",
//    "id": {
//     "kind": "youtube#video",
//     "videoId": "2Vv-BfVoq4g"
//    },
//    "snippet": {
//     "publishedAt": "2017-11-09T11:04:14.000Z",
//     "channelId": "UC0C-w0YjGpqDXGB8IHb662A",
//     "title": "Ed Sheeran - Perfect (Official Music Video)",
//     "description": "https://ad.gt/yt-perfect : https://atlanti.cr/yt-album Subscribe to Ed's channel: http://bit.ly/SubscribeToEdSheeran Follow Ed on... Facebook: http://www.facebook.com/EdSheeranMusic...",
//     "thumbnails": {
//      "default": {
//       "url": "https://i.ytimg.com/vi/2Vv-BfVoq4g/default.jpg",
//       "width": 120,
//       "height": 90
//      },
//      "medium": {
//       "url": "https://i.ytimg.com/vi/2Vv-BfVoq4g/mqdefault.jpg",
//       "width": 320,
//       "height": 180
//      },
//      "high": {
//       "url": "https://i.ytimg.com/vi/2Vv-BfVoq4g/hqdefault.jpg",
//       "width": 480,
//       "height": 360
//      }
//     },
//     "channelTitle": "Ed Sheeran",
//     "liveBroadcastContent": "none"
//    }
//   }

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      videos: [],
      activeVideo: ''
    }
  }

  // can populate initial video state with an api call on componentDidMount.
  // this sets this.state.videos and this.state.activeVideo
  componentDidMount() {
    this.fetchVideos('')
  }

  handleSearchChange = (event) => {
    this.setState({searchTerm: event.target.value}, () => {
      // fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&q=${this.state.searchTerm}&type=video`)
      // .then(resp => resp.json())
      // .then(resp => this.setState({videos: resp.items, activeVideo: resp.items[0]}))
      this.fetchVideos(this.state.searchTerm)
    })
  }

  //abstracted the fetchVideos code into a separate function.
  // this is the exact same code copied and pasted into a new method
  fetchVideos = (searchTerm) => {
    return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&q=${searchTerm}&type=video`)
    .then(resp => resp.json())
    .then(resp => this.setState({videos: resp.items, activeVideo: resp.items[0]}))
  }

  // returns the videos which don't match the main videos ID. this function is executed during the render.
  // it's sole purpose is to return an array of videos to pass into Sidebar as a prop.
  filteredVideos = () => {
    return this.state.videos.filter(v => v.id.videoId !== this.state.activeVideo.id.videoId)
  }

  // TODO: pass down a function that makes a sidebar video a main video on click

  render() {
    return (
      <div >
        <Searchbar searchTerm={this.state.searchTerm} handleSearchChange={this.handleSearchChange}/>
        <MainVideoDisplay video={this.state.activeVideo} />
        <Sidebar videos={this.filteredVideos()} />
      </div>
    );
  }
}

export default App;
