import React from "react";

import API_KEY from "./keys";
// import _ from 'lodash'

// `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&q=${searchTerm}&type=video`
class YouTubeContainer extends React.Component {
	constructor() {
		super();

		this.state = {
			term: "puppies",
			videos: [],
			selectedVideo: null
		};
	}

	render() {
		const searchTerm = "dog";
		fetch(
			`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&q=${searchTerm}&type=video`
		)
			.then(resp => resp.json())
			.then(console.log);

		return (
			<div className="ui grid container">
				<h1>HI</h1>
				{/*TODO: create some react components to build out the rest of this app*/}
			</div>
		);
	}
}

export default YouTubeContainer;
