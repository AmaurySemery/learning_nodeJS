const synchronous = require('./synchronicity/synchronous');

const result = synchronous.getRandomNumberSync(10);
console.log(`Le nombre généré est : ${result}`);