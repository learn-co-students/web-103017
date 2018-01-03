// The `user` variable is a class/constructor function
// Revealing module patterns
const User = (function createUserClass() {
  const allUsers = []

  class User {
    constructor(data) {
      this.id = data.id
      this.avatar = data.avatar
      this.first_name = data.first_name
      this.last_name = data.last_name
      allUsers.push(this)
    }

    static all() {
      return [...allUsers]
    }

    render() {
      return `
      <div id="${this.id}">
        <img src="${this.avatar}">
        <p>${this.first_name} ${this.last_name}
      </div>
      `
    }

    renderForm() {
      return `
      <form class="user-update-form" id="${this.id}">
        <img src="${this.avatar}">
        <input type="text" name="first_name" value="${this.first_name}">
        <input type="text" name="last_name" value="${this.last_name}">
        <input type="submit">
      </form>
      `
    }

    static findById(id) {
      return allUsers.find(user => user.id === id)
    }

    static findOrCreateByName(first_name, last_name) {
      let x // the eventual of either
      const u = allUsers.find(user => user.first_name === first_name && user.last_name === last_name)

      if (!u) {
        x = Adapter.createUser(first_name, last_name).then(userData => x = new User(userData))
      } else {
        x = Promise.resolve(u)
      }

      return x
    }
  }

  return User
})(/* executing the function expression */)
