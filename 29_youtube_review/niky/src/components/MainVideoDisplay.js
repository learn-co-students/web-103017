import React from 'react'

const MainVideoDisplay = ({video}) => {
  // conditionally returns null if there is no video present. can also be solved by setting a default Main Video.

  //these extra classes are for semantic css. otherwise our code is the same
  if (!video) {
    return null
  }
  return (
    <div className="twelve wide column">
     <div className="ui raised segments">
       <div className="ui segment">
         <div className="ui embed">
           <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video.id.videoId}`} allow="autoplay; encrypted-media" />
         </div>
       </div>
       <div className="ui segment">
         <h4>{video.snippet.title}</h4>
       </div>
     </div>
   </div>
  )
}

export default MainVideoDisplay
