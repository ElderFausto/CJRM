// function declaration

function sayHi() {
  console.log('oi');
}

// function expression
const showFood = function() {
  console.log('pizza');
}


sayHi()
showFood()

// hoisting é a ordem de execução de uma função
// functions declaradas são lidas sem precisar de uma ordem hereditaria
// functions expressions precisam ser declaradas em ordem