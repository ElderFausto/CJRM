class User {
  constructor (name, email) {
    this.name = name
    this.email = email
    this.points = 0
  }

  login() {
    console.log(`${this.name} logou`);
    return this
  }

  logout() {
    return `${this.name} deslogou`
  }

  addPoint() {
    this.points++
    return `${this.name} agora tem ${this.points > 1 ? 'pontos' : 'ponto'}`
  }
}

const myName = new User('Elder', 'elder@gmail.com')
const myLastName = new User('Fausto', 'fausto@gmail.com')

console.log(myName.login().addPoint());

