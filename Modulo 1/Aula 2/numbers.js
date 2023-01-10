// inteiros e decimais

const radius = 10
const pi = 3.14

// operadores aritmeticos

const area = pi * radius ** 2

// ordem de operações

/*  1 parenteses
  2 expoentes ou raizes
  3 multiplicação e divisao
  4 adição e subtração
*/

const crazyOperations = 5 * (10 - 3) ** 2


// operadores de incremento e decremento

let postLikes = 10

// postLikes = postLikes + 1
// postLikes++;
// postLikes--;


// operadores addition, subtraction, multiplication and division assigment

// postLikes = postLikes + 10
postLikes += 10;
postLikes -= 5;
postLikes *= 3;
postLikes /= 2;

// NaN - not a number
console.log( 7 / 'a');

// concatenação de string com numero
const likesMessage = 'O post tem ' + postLikes + ' likes'