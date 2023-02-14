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

console.log(getObjectFromLocalStorage("myObject"));

/* 
2

- mesmo com um input type="number", a expressao event.target.value abaixo
resulta em uma string
- exiba no console o valor que foi inserido no input
- o exibido valor  deve ser do tipo number
- nao utilize a invocação da Number() ou qualquer outro metodo que converta
string em number

dica: pesquiser por valueAsNumber
*/

const input = document.querySelector('[data-js="input"]');

input.addEventListener("input", (event) => {
  console.log(event.target.valueAsNumber);
});

/* 
3

- implemente uma função "combineOperations" que recebe 2 parametros:
  - um valor inicial, do tipo number
  - um array de funções
- A combineOperations deve:
  - passar o valor inicial para 1 função do array
  - passar o valor retornado pela invocação da 1 função para a 2 função e
  assim por diante. Ate que cada função do array tenha sido invocada
  - retornar o valor que a invocação da ultima função do array retornou
- descomente o codigo abaixo. A primeira invocação da combineOperations 
  deve retornar 60 e a segunda invocação 10    
*/

function add100(num) {
  return num + 100;
}

function divByFive(num) {
  return num / 5;
}

function multiplyByThree(num) {
  return num * 3;
}

function multiplyFive(num) {
  return num * 5;
}

function addTen(num) {
  return num + 10;
}

const combineOperations = (initValue, arrOfFuncs) =>
  arrOfFuncs.reduce((acc, func) => func(acc), initValue);

console.log(combineOperations(0, [add100, divByFive, multiplyByThree]));
console.log(combineOperations(0, [divByFive, multiplyFive, addTen]));

/* 
4

- o codigo abaixo nao esta funcionando. 
  Descubra o que ele esta tentando fazer e refatore--o
*/

const albums = [
  {
    id: 537,
    title: "the dar side of the moon",
    artist: "pink floyd",
    price: 59.9,
    genre: "progressive rock",
  },
  {
    id: 975,
    title: "houses of the holy",
    artist: "led zeppelin",
    price: 81.0,
    genre: "rock",
  },
  {
    id: 359,
    title: "heaven and hell",
    artist: "black sabbath",
    price: 49.9,
    genre: "heavy metal",
  },
];

const searchAlbum = {
  id: 975,
  title: "houses of the holy",
  artist: "led zeppelin",
  price: 81.0,
  genre: "rock",
};

const searchAlbumExistsArray = albums.some(
  (album) => album.id === searchAlbum.id
);

if (searchAlbumExistsArray) {
  console.log(`${JSON.stringify(searchAlbum)} existe no array almbums.`);
}

/*
5

- baseado no que foi mostrado na aula passada faça uma copia do 'obj'
*/

const obj = {
  prop1: "a",
  prop2: "b",
  prop3: null,
  prop4: true,
  prop5: false,
  prop6: [9, { x: 1, y: 2 }],
  prop7: 7,
  prop8: { a: "x", b: "y" },
};



const objCopy = { 
  ...obj,
  prop6: [
    obj.prop6[0],
    {...obj.prop6[1]}
  ],
  prop8: {
    ...obj.prop8
  }
};

obj.prop6[0] = 'hello'
console.log(obj, objCopy);

//copia em json
/* const objAsJSON = JSON.stringify(obj, null, 2)
const objCopy = JSON.parse(objAsJSON)
console.log(objCopy); */


/* 
6

 - implemente uma função que cria e retorna um elemento HTML
 - Ela deve receber o nome do elemento HTML a ser criado e um objeto com os
 atributos que o elemento deve conter
 - A quantidade de atributos que o elemento ira conter pode variar

 Dica: pesquiser por Object.entries.
*/

const createElement = (elementName, atributes) => {
  const element = document.createElement(elementName)
  const attributesAsArray = Object.entries(atributes)

  attributesAsArray.forEach(([key, value]) => element.setAttribute(key, value))
  return element
}

const input1 = createElement('input', {
  type: 'radio',
  id: 'input1',
  name: 'main',
  value: 'principal',
  for: 'input1',
  'data-js': 'input1'
})

console.log(input1);