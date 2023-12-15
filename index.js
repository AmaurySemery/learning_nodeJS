const synchronous = require('./synchronicity/synchronous');
const asynchronous = require('./synchronicity/asynchronous_1')

console.log('Avant');

asynchronous.getRandomNumber(5, (err,res) => {
    if (err) throw err;
    console.log(`Nombre généré par getRandomNumber(): ${res}`);
});

asynchronous.add(2, 5, (error, result) => {
    if (error) {
        console.error(`Erreur : ${error.message}`);
    return;
}
console.log(`Résultat de add(2, 5) : ${result}`);

})

console.log('Après');
 
/** 
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

**/