// const button = document.querySelector('button')

// button.addEventListener('click', () => {
//   console.log('clicou no botao');
// })

/* const lis = document.querySelectorAll('li')

lis.forEach(li => {
  li.addEventListener('click', event => {
    const clickedElement = event.target
    console.log('clicou na LI');
    event.stopPropagation()
    clickedElement.remove()
  })
}) */

const ul = document.querySelector('ul')
const button = document.querySelector('button')

button.addEventListener('click', () => {
  const li = document.createElement('li')

  li.textContent = `Novo item`
  ul.prepend(li)
})

ul.addEventListener('click', event => {
  const clickedElement = event.target
  
  if(clickedElement.tagName === 'LI') {
    clickedElement.remove()
  }
})

