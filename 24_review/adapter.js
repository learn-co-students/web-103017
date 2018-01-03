class Adapter {
  static getUsers() {
    return fetch('https://reqres.in/api/users')
      .then(res => res.json())
  }

  

  static createUser(first_name, last_name) {
    return fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ first_name: first_name, last_name: last_name })
    }).then(res => res.json())
  }

  static updateUser(id, first_name, last_name) {
    return fetch(`https://reqres.in/api/users/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ first_name: first_name, last_name: last_name })
    }).then(res => {
      // if (res.statusCode >= 400) {
      //   throw res.json()
      // }

      return res.json()
    })
  }
}
