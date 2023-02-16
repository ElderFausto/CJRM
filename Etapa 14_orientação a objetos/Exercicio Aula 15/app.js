/* 
01

- Descoment a let abaixo, descubra o que o codigo esta tentando fazer
  e faça funcionar.
*/

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  created = new Date();
}

let rabbit = new Rabbit("White Rabbit");

/* 
2 

 -descomente o codigo abaixo e implemente o que esta faltando
  para que ele funcione
*/

class Counter {
  constructor(value) {
    this.count = 0;
  }
  
  get value() {
    return this.count;
  }

  increment() {
    this.count++;
  }

  set newValue(aNumber) {
    this.count = aNumber;
  }
}

const counter = new Counter();

console.log(counter.value);
counter.increment();
counter.newValue = 7;
console.log(counter.value);


/* 
3

 - a partir do array abaixo, gere um novo array com apenas os valores truthy
 - utlize um construtor para resolver este exercicio
 - nao invoque o construtor
*/

const values = [
  0,
  {},
  '',
  [],
  NaN,
  () => {}
]

const truthyValues = values.filter(Boolean)
console.log(truthyValues);

