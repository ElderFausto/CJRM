class User {
  constructor (name, email) {
    this.name = name
    this.email = email
    incrementCounter() {
      return ++this.counter
    }
  }
}

// factory functio

const createUser = (name, email) => (
  let counter = 0

  return {
    name,
    email,
    incrementCounter: () => ++counter

  }
)

const user = new User('elder', 'elder@gmail.com')
const user2 = createUser('fausto', 'fausto@gmail.com')