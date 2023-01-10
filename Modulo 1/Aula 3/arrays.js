// arrays

let names = ['Jesus', 'Maria', 'José']
console.log(names[3 - 1]);

const ages = [31, 32, 33, 34]
const randomArray = ['Bolo', 31, '']

// metodos de arrays

const joinNames = names.join('-')
const indexOf33 = ages.indexOf(33)
const moreNames = names.concat(['joao', 'pedro'])
const pushNames = names.push('Paulo', 'lucas')
const popNames = names.pop()


console.log(joinNames);
console.log(indexOf33);
console.log(moreNames);
console.log(pushNames);
console.log(popNames);
console.log(names);