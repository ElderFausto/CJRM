// utilizando callbacks

const ul = document.querySelector('[data-js="ul"]')

const socialNetworks = ['youtube', 'twitter', 'facebook', 'instagram']

let HTMLTemplate = ''

socialNetworks.forEach(socialNetwork => {
  HTMLTemplate += `<li style="color: blue;">${socialNetwork}</li>`
})

ul.innerHTML = HTMLTemplate
