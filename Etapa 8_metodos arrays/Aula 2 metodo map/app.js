/* const numbers = [1, 2, 3]

const doubleNumbers = numbers.map(item => item * 2)

console.log(doubleNumbers); */

/* const prices = [10, 45, 89, 349, 20, 53, 47]

const salePrices = prices.map(item => item / 2)

console.log(salePrices); */

const products = [
  {name: 'camisa', price: 30},
  {name: 'calção', price: 25},
  {name: 'terno', price: 100}
]

const halfPriceProducts = products.map(product => {
  if(product.price >= 30) {
    return {name: product.name, price: product.price / 2}
  }

  return product
})

console.log(halfPriceProducts);
