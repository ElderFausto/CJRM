// if

const password = 'oi222222222222222222222222222'

if (password.length >= 12 && password.includes('1')) {
  console.log('senha muito forte');
} else if (password.length >= 8 || password.includes('1') && password.length >= 5) {
  console.log('senha tem 8 ou mais caracteres');
} else {
  console.log('senha deve conter 8 ou mais caracteres');
}
