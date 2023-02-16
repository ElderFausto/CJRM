// class Student {
//   constructor (name, email) {
//     this.name = name
//     this.email = email
//   }
// }

// o this sempre vai referenciar dentro do escopo onde ele esta

function Student(name, email) {
  this.name = name
  this.email = email
}

Student.prototype.login = function () {
  return `${this.name} fez login`
}

const elder = new Student('elder', 'elder@gmail.com')
const fausto = new Student('fausto', 'fausto@gmail.com')

console.log(elder.login === fausto.login);