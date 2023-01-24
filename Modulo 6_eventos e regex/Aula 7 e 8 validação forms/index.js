const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')

const testUsername = username => /^[a-zA-Z]{6,12}$/.test(username)

form.addEventListener('submit', event => {
  event.preventDefault()

  const isAValidUsername = testUsername(event.target.username.value)

  if(isAValidUsername) {
    feedback.textContent = 'username valido =]'
    return
  }
  feedback.textContent = 'username deve conter entre 6 a 12 caracteres e apenas letras'
})

form.username.addEventListener('keyup', event => {
  console.log(event);
  const isAValidUsername = testUsername(event.target.value)

  if(isAValidUsername) {
    form.username.setAttribute('class', 'sucess')
    return
  }
  form.username.setAttribute('class', 'error')
})