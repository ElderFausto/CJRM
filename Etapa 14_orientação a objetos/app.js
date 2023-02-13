/* 
01

- implemente uma função que recebe o nome da key de um item da localstorage 
  e retorna o valor da key parseado para objeto javascript
*/

const myObject = { name: "elder", age: 26 };
const myObjectAsJSON = JSON.stringify(myObject);

localStorage.setItem("myObject", myObjectAsJSON);

const getObjectFromLocalStorage = (keyName) => {
  const keyValue = localStorage.getItem(keyName);
  return JSON.parse(keyValue);
};

console.log(getObjectFromLocalStorage('myObject'));