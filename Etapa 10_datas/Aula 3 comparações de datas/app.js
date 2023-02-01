const past = new Date('Jun 21 1998 10:00:00')
const present = new Date()

const difference = present.getTime() - past.getTime()
const seconds = Math.round(difference/1000)
console.log({seconds});

const minutes = Math.round(seconds / 60)
console.log({minutes});

const hours = Math.round(minutes / 60)
console.log({hours});

const days = Math.round(hours / 24)
console.log({days});

const timestamp = 776824734
console.log(new Date(timestamp));