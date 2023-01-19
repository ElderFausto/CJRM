// // const paragraph = document.querySelector('p')

/* o .classList é uma maneira de retornar 
uma lista com as classes de uma tag */

// // // console.log(paragraph.classList);

// // // para adicionar classe
// // paragraph.classList.add('error')


// // // para remover classe
// // paragraph.classList.remove('error')

// const paragraphs = document.querySelectorAll('p')

// paragraphs.forEach(paragraph => {
//   if(paragraph.textContent.includes('error')) {
//     paragraph.classList.add('error')
//   }

//   if(paragraph.textContent.includes('sucess')) {
//     paragraph.classList.add('sucess')
//   }
// })

const title = document.querySelector('h1')

title.classList.toggle('test')
