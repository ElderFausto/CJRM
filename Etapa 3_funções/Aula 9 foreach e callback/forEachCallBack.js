// forEach e callbacks

// const myFunc = callback => {
//   const value = 20

//   callback(value)
// }

// myFunc(number => {
//   console.log(number);
// })

const socialNetworks = ['youtube', 'twitter', 'facebook', 'instagram']

const logArrayInfo = (socialNetworks, index, array) => {
  console.log(index, socialNetworks, array);
}

socialNetworks.forEach(logArrayInfo)