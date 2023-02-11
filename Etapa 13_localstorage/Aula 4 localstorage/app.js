// localStorage.removeItem('name') remove item especifico
// localStorage.clear() remove todos os dados

// localStorage.setItem("name", "elder");
// localStorage.setItem("age", 26);

// let name = localStorage.getItem("name");
// let age = localStorage.getItem("age");

// console.log(name, age);

localStorage.clear()

const myArray = [
  { a: 1, b: 2 },
  { c: 3, d: 4 },
  { e: 5, f: 6 }
];

localStorage.setItem('myArray', JSON.stringify(myArray))

const JSONFromLocalStorage = localStorage.getItem('myArray')
const myConvertedArray = JSON.parse(JSONFromLocalStorage)
console.log(myConvertedArray)