const paragraph = document.querySelector('p')

// paragraph.innerHTML += ' viva Cristo Rei'

// const paragraphs = document.querySelectorAll('p')

// paragraphs.forEach((paragraph, index )=> {
//   paragraph.innerText += `Novo texto ${index + 1}`
// })

const div = document.querySelector('.content')

// div.innerHTML = `<h2>Novo h2</h2>`

const people = ['elder', 'jao', 'jose']

people.forEach(name => {
  div.innerHTML += `<p>${name}</p>`
})