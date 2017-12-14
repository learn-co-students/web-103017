document.addEventListener('DOMContentLoaded', function(event) {
  // create a pop-up alert when a user clicks a link
  const link = document.getElementById('googleLink')
  link.addEventListener('click', function(event) {
    // don't redirect the user
    event.preventDefault()
    alert('Gotchu')
  })

  // make all input capitalized
  const usernameInput = document.getElementById('username')
  usernameInput.addEventListener('keypress', function(event) {
    event.preventDefault()
    const charCode = event.which
    const char = String.fromCharCode(charCode).toUpperCase()
    const oldInputValue = event.target.value
    event.target.value = oldInputValue + char
  })

  // mask phone number
  const phoneInput = document.getElementById('phone')
  phoneInput.addEventListener('keypress', function(event) {
    // prevent default typing when key is pressed
    event.preventDefault()
    const charCode = event.which
    const char = String.fromCharCode(charCode)
    if (!event.target.value && !isNaN(char)) {
      event.target.value = `(${char}`
    } else if (event.target.value && !isNaN(char)) {
      switch (event.target.value.length) {
        case 4:
          event.target.value += `) ${char}`
          break
        case 9:
          event.target.value += `-${char}`
          break
        case 14:
          break
        default:
          event.target.value += char
      }
    }
  })

  // change default form submission
  const form = document.getElementById('userForm')
  form.addEventListener('submit', function(event) {
    // prevent default page refresh when form is submitted
    event.preventDefault()
    console.log({
      username: usernameInput.value,
      number: phoneInput.value
    })
  })

})
