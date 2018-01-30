// URL: "https://randomuser.me/api/"

// add thunk middleware

// inititally dispatch the 'ASYNC_START' function
// make a fetch request
// when you receive a response
// dispatch "FETCH_PROFILE" with the user data
export function fetchProfile() {
  return dispatch => {
    dispatch({ type: 'ASYNC_START' });

    setTimeout(() => {
      fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => {
          console.log(data);
          const firstName = data.results[0].name.first;
          const picture = data.results[0].picture.large;
          dispatch({ type: 'FETCH_PROFILE', user: { firstName, picture } });
        });
    }, 1000);
  };
}
