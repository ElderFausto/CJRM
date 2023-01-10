// booleans e comparações

// console.log(true, false, 'true', 'false');

// metodos podem retornar booleans
const email = 'jose@gmail.com'
const includes = email.includes('@') 
// includes serve para verificar se existe tal caracter em uma string
// pode ser usado tanto em array quanto em strings
const numeros = [2, 5, 8, 10]
const numerosIncludes = numeros.includes(2)
// console.log(includes);
// console.log(numerosIncludes);

// operadores de comparação
const name = 'elder'

console.log(name == 'elder');
console.log(name == 'Elder');
console.log(name > 'jose'); // a letra J vem dpois do E, logo, elder nao é maior que jose

// a letra que vier depois é considerada maior
// a letra minuscula tem valor maior que a maiuscula 