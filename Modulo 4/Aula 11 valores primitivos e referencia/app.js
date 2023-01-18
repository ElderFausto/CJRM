// valores primitivos

let carteira = 50
let cofre = carteira

console.log(`a carteira tem: ${carteira} reais --- o cofre tem ${cofre} reais`);

carteira = 100

console.log(`a carteira tem: ${carteira} reais --- o cofre tem ${cofre} reais`);

/* 
  o valor nao foi atribuido ao cofre 
  pois ocupam lugares diferentes no armazenamento da memoria 
*/

// valores de referencia

let cadastro = {nome: 'elder', cidade: 'olinda'}
let registro = cadastro

console.log(cadastro, registro);

cadastro.cidade = 'recife'

console.log(cadastro, registro);

/* 
  o valor atribuido a ambos pois apontam pro mesmo
  objeto no heap
  pode-se fazer a mudança em qualquer uma das duas variaveis
  que apontam para o objeto que o valor sera reatribuido para
  ambos
*/