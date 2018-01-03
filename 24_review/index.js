document.addEventListener('DOMContentLoaded', init)

function init(event) {
  // Fetch data
  Adapter.getUsers()
    // Store that data in local memory
    .then(response => {
      response.data.forEach(el => new User(el))
      return User.all()
    })
    // Display that data in the DOM
    .then(users => {
      users.forEach(user => {
        document.body.innerHTML += user.renderForm()
      })
    })


  // Set up event handlers
  document.body.addEventListener('submit', function(event) {
    // event delegation
      // parent is listening
      // scope the action down to some class

    console.log(event.target);
    console.log(event.currentTarget);
    
    if (event.target.className === 'user-update-form') {
      event.preventDefault()

      const first_name = event.target.querySelector('[name="first_name"]').value;
      const last_name = event.target.querySelector('[name="last_name"]').value;

      console.log(first_name, last_name);
      // user update fetch
    }
  })
}
