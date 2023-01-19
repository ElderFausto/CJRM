// o Array.from() converte os dados de um HTMLcollection em um Array

const article = document.querySelector('article')

Array.from(article.children).forEach((element) => {
  element.classList.add('article-element')
})

const title = document.querySelector('h2')

// para saber o pai de um elemento se usa o .parentElement
// pode-se usar  em sequencia

console.log(title.parentElement.parentElement);

// para saber o irmão de um elemento se usa o .nextElementSibling
console.log(title.nextElementSibling)


// para saber o irmão que vem posteriormente se usa .previousElementSibling
console.log(title.previousElementSibling);