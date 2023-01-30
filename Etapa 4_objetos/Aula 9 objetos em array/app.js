// objetos em array

let user = {
  name: 'elder',
  age: 26,
  email: 'user@gmail.com',
  city: 'olinda',
  blogPosts: [
    {title: 'orações', likes: 39},
    {title: 'receitas', likes: 50}
  ],
  login: function() {
    console.log('usuario logado');
  },
  logout: function () {
    console.log('usuario deslogado');
  },
  logBlogPosts () { // esse shotcut pode ser declarado tirando a palavra function 
    console.log(`o usuario ${this.name} escreveu esses posts: `);

    this.blogPosts.forEach(post => {
      console.log(post.title, post.likes);
    })
  }
}

user.logBlogPosts()

