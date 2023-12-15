const synchronous = require('./synchronicity/synchronous');

console.log('avant for')

for(let i = 0 ; i < 10000 ; i++) {

    console.log('Avant getRandomNumberSync()');
    const result = synchronous.getRandomNumberSync(10);
    console.log(`Le nombre généré est : ${result}`);    
    console.log('Après getRandomNumberSync()');
    
}

console.log('après for')