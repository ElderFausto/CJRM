// ^[a-zA-Z0-9]{6,10}$
// ^.{6,10}$
// o ponto representa caracter especial

const form = document.querySelector('.signup-form')
// const usernameInput = document.querySelector('#username')

form.addEventListener('submit', event => {
  event.preventDefault()

  console.log(form.username.value);
  console.log(event.target.username.value);
})

const username = 'eldeee'
const pattern = /^[a-z]{6,}$/
// const isAMatch = pattern.test(username)

// if(isAMatch) {
//   console.log('o test da regex passou =)');
// } else {
//   console.log('o teste da regex nao passou =(');
// }

const result = username.search(pattern)
console.log(result);