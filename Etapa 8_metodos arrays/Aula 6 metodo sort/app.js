// exemplo 1 ordenando strings
const names = ['elder', 'vitoria', 'jesus','maria', 'jose']
names.sort()
console.log(names);

// exemplo 2 ordenando numeros

const scores = [1, 2, 54, 32, 45, 89, 3, 6]
scores.sort((score1, score2) => score2 - score1)
console.log(scores);

// exemplo 3 ordenando objetos
const theBigFamily = [
  {name: 'lineu', score: 20},
  {name: 'nene', score: 10},
  {name: 'tuco', score: 50},
  {name: 'bebel', score: 30},
  {name: 'agostinho', score: 70}
]

theBigFamily.sort((item1, item2) => item2.score - item1.score)

// do maior para o menor [subtração do item2 pelo item1]
// do menor para o maior [subtração do item1 pelo item2]