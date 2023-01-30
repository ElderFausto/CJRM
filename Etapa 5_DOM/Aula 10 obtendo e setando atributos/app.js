const link = document.querySelector('a')

// para pegar o atributo 
console.log(link.getAttribute('href'));


// sett recebe dois parametros, 
// o que voce quer mudar e o segundo para qual mudara
// se o atributo nao existir nao tem problema, ele criara assim mesmo

link.setAttribute('href','https://www.youtube.com/watch?v=m52fDOoLUks')

link.innerText = 'canto gregoriano'

const paragraph = document.querySelector('p')

console.log(paragraph.getAttribute('class'));

paragraph.setAttribute('class', 'doidera')

paragraph.setAttribute('style', 'color: red')