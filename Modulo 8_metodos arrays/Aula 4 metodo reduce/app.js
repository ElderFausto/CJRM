/* const numbers = [1, 2, 3]

const sumResults = numbers.reduce((acumulador, item) => acumulador + item, 0)

console.log(sumResults); */

const players = [
  {name: 'maria', score: 200},
  {name: 'elder', score: 400},
  {name: 'joao', score: 150},
  {name: 'jose', score: 100},
  {name: 'maria', score: 200},
  {name: 'elder', score: 80},
  {name: 'joao', score: 90},
  {name: 'jose', score: 40},
]

const playersScores = players.reduce((acumulador, player) => {
  if(player.name === 'elder') {
    acumulador += player.score 
  }
  return acumulador
}, 0)

console.log(playersScores);