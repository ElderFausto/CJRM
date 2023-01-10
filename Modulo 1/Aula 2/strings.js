// strings

const email = 'zzzz@gmail.com'

console.log(email);

// concatenação de strings

const firstName = 'joao'
const lastName = 'jose'
const fullName = firstName + ' ' + lastName

console.log(fullName);

// acessando caracteres

console.log(fullName[0]);

// comprimento de uma string

console.log(fullName.length);

/* metodos de string */

const result = fullName.toLowerCase()

console.log(fullName.toUpperCase());

console.log(result, fullName);

const index = email.indexOf('@')

console.log(index);

const correioEletronico = 'joao@gmail.com'

const lastIndexOf = correioEletronico.lastIndexOf('i')
// console.log(lastIndexOf);

const emailSlice = correioEletronico.slice(0, 10)
// console.log(emailSlice);

const emailReplace = correioEletronico.replace('joao', 'jose')
// console.log(emailReplace);