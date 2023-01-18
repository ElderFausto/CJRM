const title = document.querySelector('h1')

// title.setAttribute('style', 'margin: 50px')

console.log(title.style);
console.log(title.style.color);

title.style.margin = '50px'
title.style.color = 'pink'
title.style.fontSize = '50px'

// para remover um atributo

title.style.margin = ''