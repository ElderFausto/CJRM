let user = {
  name: 'elder',
  age: 26,
  email: 'user@gmail.com',
  city: 'olinda',
  login: function() {
    console.log('usuario logado');
  },
  logout: function () {
    console.log('usuario deslogado');
  }
}

user.login()

user.logout()

