/* const randomNumbers = [10, 25, 60, 78, 120, 987]

const numbersGreaterThan25 = randomNumbers.filter(item => item > 25)

console.log(numbersGreaterThan25); */

const users = [
  {name: 'luiz', premium: true},
  {name: 'maria', premium: false},
  {name: 'joao', premium: true},
  {name: 'vitoria', premium: true},
  {name: 'jose', premium: false}
]

const premiumUsers = users.filter(user => user.premium)

console.log(premiumUsers);