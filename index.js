const synchronous = require('./synchronicity/synchronous');

console.log('Avant setInterval')

let i = 0
const handle = setInterval(() => {
    console.log('Avant getRandomNumberSync()');
    const result = synchronous.getRandomNumberSync(10);
    console.log(`Le nombre généré est : ${result}`);    
    console.log('Après getRandomNumberSync()');

    i++;
    if(i === 10) {
        clearInterval(handle);
        console.log('Terminé');
    }
}, 50);

console.log('Après setInterval');
console.log('Hello World');