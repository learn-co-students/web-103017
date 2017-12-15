// ONLY RUN CODE INSIDE OF THIS BLOCK WHEN THE PAGE HAS LOADED
document.addEventListener('DOMContentLoaded', function(event) {
  // MAKE A GET REQUEST TO AN API WITH XHR AND LOG RESULT
  // const req = new XMLHttpRequest()
  // req.open('GET', 'https://reqres.in/api/users?delay=3')
  // req.addEventListener('load', function(event) {
  //   console.log(event) // IMAGINE THIS ADDS USERS TO THE PAGE
  // })
  // req.send()


  // MAKE A GET REQUEST TO AN API WITH XHR AND GET JS OBJECTS
  // const req = new XMLHttpRequest()
  // req.open('GET', 'https://reqres.in/api/users?delay=3')
  // req.addEventListener('load', function(event) {
  //   const resp = JSON.parse(event.target.response)
  //   console.log(resp); // IMAGINE THIS ADDS USERS TO THE PAGE
  // })
  // req.send()


  // MAKE A GET REQUEST TO AN API WITH FETCH AND LOG RESULT
  // fetch('https://reqres.in/api/users?delay=3')
  //   .then(resp => resp.json())
  //   .then(console.log)


  // MAKE A GET REQUEST TO AN API WITH FETCH AND CHANGE PAGE
  // fetch('https://reqres.in/api/users?delay=3')
  //   .then(resp => resp.json())
  //   .then(data => {
  //     document.body.innerHTML = '<h1>Users</h1>'
  //     data.data.forEach(user => {
  //       document.body.innerHTML += `
  //         <div>
  //           <img src="${user.avatar}">
  //           <h2>${user.last_name}</h2>
  //           <p>${user.first_name}</p>
  //         </div>
  //       `
  //     })
  //   })


  // MAKE A POST REQUEST TO AN API WITH FETCH AND UPDATE PAGE
  // const data = {
  //   "name": "morpheus",
  //   "job": "leader"
  // }
  // fetch('https://reqres.in/api/users?delay=3', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/json'
  //   },
  //   body: JSON.stringify(data)
  // }).then(resp => resp.json())
  //   .then(data => {
  //     document.body.innerHTML += `
  //       <h2>${data.name}</h2>
  //       <p>${data.job}</h2>
  //     `
  //   })


  // MORE COMPLEXITY
  // -- ABSTRACT API CALLS INTO THEIR OWN FUNCTIONS TO BE REUSED
  function getUsersAPI() {
    return fetch('https://reqres.in/api/users?delay=3')
      .then(resp => resp.json())
  }

  function createEmployeeAPI(data) {
    return fetch('https://reqres.in/api/users?delay=3', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(resp => resp.json())
  }

  // -- SEPARATE API LOGIC FROM VIEW LOGIC (SEPARATION OF CONCERNS)
  function displayUserList(data) {
    const userList = document.getElementById('users')
    userList.innerHTML += '<h1>Users</h1>'
    data.data.forEach(user => {
      userList.innerHTML += `
        <div>
          <img src="${user.avatar}">
          <h2>${user.last_name}</h2>
          <p>${user.first_name}</p>
        </div>
      `
    })
  }

  function displayEmployee(data) {
    document.getElementById('employees').innerHTML += `
      <li>
        <h2>${data.name}</h2>
        <p>${data.job}</h2>
      </li>
    `
  }

  // -- SETUP EVENT HANDLERS WHICH MAKE API CALLS
  document.getElementById('newEmployeeForm').addEventListener('submit', function(e) {
    e.preventDefault()

    const data = {}
    data.name = document.getElementById('nameInput').value
    data.job = document.getElementById('jobInput').value

    createEmployeeAPI(data)
      .then(displayEmployee)
  })

  // -- FINALLY, EXECUTE INITIAL API CALL
  getUsersAPI()
    .then(displayUserList)

})
