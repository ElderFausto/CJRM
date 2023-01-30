const p = document.querySelector('.copy-me')

p.addEventListener('copy', _ => {
  console.log('texto copiado');
})

const div = document.querySelector('.box')

div.addEventListener('mousemove', event => {
  div.textContent = `X ${event.offsetX} | ${event.offsetY}`
  console.log(event.offsetX, event.offsetY);
})

document.addEventListener('wheel', (event) => {
  console.log(event.pageX, event.pageY);
})