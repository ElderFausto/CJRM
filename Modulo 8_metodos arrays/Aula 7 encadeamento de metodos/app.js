const books = [
  {name: 'codigo limpo', price: 30},
  {name: 'o milagre de manha', price: 5},
  {name: 'alice no pais das maravilhas', price: 10},
  {name: 'quem pensa enriquece', price: 50},
  {name: 'o livro da ciencia', price: 40}
]

const booksPromo = books
  .filter(({price}) => price > 20)
  .map(({name, price}) => 
    `O preço do livro "${name}" caiu para ${price} R$`)

console.log(booksPromo);  