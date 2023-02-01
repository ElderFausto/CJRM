const present = new Date()
console.log(dateFns.format(present, 'MMM'));
console.log(dateFns.format(present, 'ddd'));
console.log(dateFns.format(present, 'YYY'));
console.log(dateFns.format(present, 'dddd'));
console.log(dateFns.format(present, 'dddd/YYY/ddd'));

const past = new Date('Aug 20 1996 10:00:00')

console.log(dateFns.distanceInWords(present, past, {addSuffix: true}));