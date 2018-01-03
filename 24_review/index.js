class App {
  static init() {
    // grabbing elements already on page
    App.userList = document.querySelector('.user-list')

    // setting up event listeners
    document.body.addEventListener('submit', App.handleUserUpdate)
    document.body.addEventListener('submit', App.handleUserCreate)

    // initial setup / state for the page
    Adapter.getUsers()
      // Store that data in local memory
      .then(response => {
        response.data.forEach(el => new User(el))
        return User.all()
      })
      // Display that data in the DOM
      .then(users => {
        users.forEach(user => {
          App.userList.innerHTML += user.renderForm()
        })
      })
  }

  static handleUserCreate(event) {
    if (event.target.className === 'user-new-form') {
      event.preventDefault()

      const first_name = event.target.querySelector('[name="first_name"]').value;
      const last_name = event.target.querySelector('[name="last_name"]').value;

      Adapter.createUser(first_name, last_name)
        .then(userData => {
          const u = new User(userData)
          App.userList.innerHTML += u.renderForm()
        })
    }
  }

  static handleUserUpdate(event) {
   // event delegation
     // parent is listening
     // scope the action down to some class
   if (event.target.className === 'user-update-form') {
     event.preventDefault()

     // get information
     const id = parseInt(event.target.id);
     const first_name = event.target.querySelector('[name="first_name"]').value;
     const last_name = event.target.querySelector('[name="last_name"]').value;

     const u = User.findById(id)
     u.first_name = first_name
     u.last_name = last_name
     document.getElementById(id).innerHTML = `updated ${u.renderForm()}`
     Adapter.updateUser(id, first_name, last_name)
      .catch(err => {
        document.getElementById(id).innerHTML = `there was an error`
      })


     // operate on that information
     // Adapter.updateUser(id, first_name, last_name)
     //   .then(userData => {
     //     // update user in local memory
     //     const u = User.findById(id)
     //     u.first_name = userData.first_name
     //     u.last_name = userData.last_name
     //
     //     // update the dom
     //     document.getElementById(id).innerHTML = `updated ${u.renderForm()}`
     //   });

     // display some result
   }
 }
}

document.addEventListener('DOMContentLoaded', App.init)
