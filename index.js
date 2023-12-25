/*
const synchronous = require('./synchronicity/synchronous');
const asynchronous = require('./synchronicity/asynchronous_1');
const promises = require('./synchronicity/promises');


console.log('Avant');

promises.getRandomNumber(11, (err, result) => {
    if(err) {
        console.error(`Erreur : ${err.message}`);
        return;
    }
    console.log(`Résultat avec callback : ${result}`)
})

promises.getRandomNumber(11)
.then(data => console.log(`Résultat avec promise : ${data}`))
.catch(error => console.error(`Erreur : ${error.message}`));

console.log('Après');
*/
/* 
console.log('Avant');

asynchronous.getRandomNumber(10, (err,res) => {
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
*/

/*

Code synchrone

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

*/

const EventEmitter = require('events').EventEmitter;

const programmer = new EventEmitter();

programmer.on('drinkCoffee', function () {
    console.log('Coup de fouet');
});

programmer.emit('drinkCoffee');