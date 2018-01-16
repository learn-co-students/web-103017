import API_KEY from "./keys.js";

const Adapter = {
  searchVideos(searchTerm) {
    return fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&q=${searchTerm}&type=video`
    );
  },
};

export default Adapter;
