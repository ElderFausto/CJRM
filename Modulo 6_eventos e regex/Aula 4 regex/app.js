// ^[a-zA-Z0-9]{6,10}$
// o ponto representa caracter especial

const form = document.querySelector('.signup-form')
// const usernameInput = document.querySelector('#username')

form.addEventListener('submit', event => {
  event.preventDefault()

  console.log(form.username.value);
  console.log(event.target.username.value);
})