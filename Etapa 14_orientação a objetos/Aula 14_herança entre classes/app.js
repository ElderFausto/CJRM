class Mammal {
  constructor(species, name, age) {
    this.species = species;
    this.name = name;
    this.age = age;
    this.mamaryGland = true;
  }

  incrementAge() {
    this.age++;
  }
}

class Lion extends Mammal {
  constructor (species, name, age, manEater) {
    super(species, name, age)
    this.manEater = manEater
  }

  eatZebras(animals) {
    return animals.filter(animal => animal.species !== 'zebra')
  }
}

const zeca = new Mammal("zebra", "Zeca", 6);
const pinguim = new Mammal("pinguim", "bob", 3);
const onitorrinco = new Mammal("onitorrinco", "chico", 5);

const mufasa = new Lion("leão", "mufasa", 10, false);

const animals = [zeca, pinguim, galinha]

console.log(mufasa.eatZebras(animals));
console.log(mufasa, onitorrinco);
