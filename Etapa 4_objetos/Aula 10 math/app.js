// objeto math

const area = 8.2

console.log(Math.round(area)); // arredonda pra cima
console.log(Math.floor(area));  // arredonda pra baixo
console.log(Math.trunc(area)); // remove o decimal e retorna so o inteiro
console.log(Math.ceil(area)); // arredonda pra cima

// numeros aleatorios

const randomNumber = Math.random()

console.log(randomNumber);

console.log(Math.round(randomNumber * 100));