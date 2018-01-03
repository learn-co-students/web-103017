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
  }

  return User
})(/* executing the function expression */)
