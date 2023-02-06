const getPokemon = url => new Promise((resolve, reject) => {

  const request = new XMLHttpRequest()
  
  request.addEventListener('readystatechange', () => {
    const isRequestOk = request.readyState === 4 && request.status === 200
    const isRequestNotOk = request.readyState === 4
  
    if(isRequestOk) {
      const data = JSON.parse(request.responseText)
      resolve(data)
    }
  
    if(isRequestNotOk) {
      reject('nao foi possivel obter os dados')
    }
  })
  
  request.open('GET', url)
  request.send()
  
  console.log(request);
})

getPokemon(`https://pokeapi.co/api/v2/pokemon/1`)
  .then(pokemon => {
    console.log(pokemon);
    return getPokemon(`https://pokeapi.co/api/v2/pokemon/4`)
  })
  .then(charmander => {
    console.log(charmander)
    return getPokemon(`https://pokeapi.co/api/v2/pokemon/7`)
  })
  .then(console.log)
  .catch(error => console.log(error))




/* const getData = () => {
  return new Promise((resolve, reject) => {
    //resolve('dados aqui')
    reject('deu erro')
  })
}

getData()
  .then((value) => console.log(value))
  .catch(error => console.log(error)) */