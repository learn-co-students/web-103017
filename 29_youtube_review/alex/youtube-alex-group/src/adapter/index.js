const API_KEY = `AIzaSyCUVIg4sQA5eg8huCRYVHJQSfwElOwenoo`;

const makeUrl = searchTerm =>
  `https://www.googleapis.com/youtube/v3/search?part=snippet&key=o&q=${searchTerm}&type=video`;

export const fetchVideos = (searchTerm = 'dogs') => {
  return fetch(makeUrl(searchTerm)).then(res => res.json());
};

export const someOtheFn = () => {};
