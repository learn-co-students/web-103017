import React from 'react'
import VideoCard from './VideoCard'

const Sidebar = props => props.videos.map(v => <VideoCard video={v} />)

export default Sidebar
