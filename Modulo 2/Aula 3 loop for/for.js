// for loop

// for (let i = 0; i < 5; i++) {
//   console.log(`Dentro do loop: ${i}`);
// }

// console.log('acaboou');

const names = ['pedro', 'joao', 'jose', 'maria', 'lino']

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

for (let i = 0; i < names.length; i++) {
  const HTMLTemplate = `<p>${names[i]}</p>`
  console.log(HTMLTemplate);
}