const getTodos = (url, callback) => {

  const request = new XMLHttpRequest()
  
  request.addEventListener('readystatechange', () => {
    const isRequestOk = request.readyState === 4 && request.status === 200
    const isRequestNotOk = request.readyState === 4
  
    if(isRequestOk) {
      const data = JSON.parse(request.responseText)
      callback(null, data)
      return
    }
  
    if(isRequestNotOk) {
      callback('nao foi possivel obter os dados', null)
    }
  })
  
  request.open('GET', url)
  request.send()
  
  console.log(request);
}

getTodos('./JSON/todos.json', (error, data) => {
  console.log(data)
  getTodos('./JSON/todos-03.json', (error, data) => {
    console.log(data);
    getTodos('./JSON/todos-02.json', (error, data) => {
      console.log(data)
    })
  })
})