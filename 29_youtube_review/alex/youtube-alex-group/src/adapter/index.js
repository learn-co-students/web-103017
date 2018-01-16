const API_KEY = `must add this`;

const makeUrl = searchTerm =>
  `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&q=${searchTerm}&type=video`;

export const fetchVideos = (searchTerm = 'dogs') => {
  return fetch(makeUrl(searchTerm)).then(res => res.json());
};

export const someOtheFn = () => {};
