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

/* EventEmitter

const EventEmitter = require('events').EventEmitter;

const programmer = new EventEmitter();

let energy = 5;
let insomniaRisk = 0;

programmer.on('drinkCoffee', function () {
    console.log('Coup de fouet');
});

programmer.on('drinkCoffee', function (coffee = 'café noir') {
    console.log(`Après avoir bu un ${coffee}, le programmeur se réveille`);
    console.log(`Niveau d'énergie = ${++energy}`);
});

const increaseInsomnia = () => {
    insomniaRisk = insomniaRisk + 1;
    console.log(`Le risque d'insomnie a augmenté et se trouve au niveau ${insomniaRisk}`);
}

programmer.on('drinkCoffee', increaseInsomnia);

programmer.emit('drinkCoffee');
programmer.emit('drinkCoffee', 'Café brésilien');
programmer.emit('drinkCoffee', 'Café chocolaté');

*/

/* Les eventemitter peuvent être mis partout, à la connexion d'un DB, à l'ouverture d'un document, à l'écriture sur le terminal, etc.

process.stdin.on('data', (data) => {
    console.log(data.toString());
});

*/

/* Classes EventEmitter

const ShoppingList = require('./events/ShoppingList');

const myShoppingList = new ShoppingList();

myShoppingList.on('added', (data) => {
    console.log('Liste après ajout de cet article : ', data);
});

myShoppingList.on('error', (error) => {
    console.log(`error : ${error}`);
});

// once quand on veut que ce ne soit fait qu'une seule fois

myShoppingList.once('bringFreezerBag', (data) => {
    console.log('Sac de congélation prévu', data);
});

myShoppingList.add('camembert');
myShoppingList.add('haricots verts surgelés');
myShoppingList.add('eau minéral');
myShoppingList.add('poisson surgelé');
myShoppingList.add('cocaïne');
myShoppingList.add('steacks hachés surgelés');

*/

const EventEmitter = require('events').EventEmitter;

const getBook = function() {
    const ee = new EventEmitter();
    setImmediate(() => {
        ee.emit('searchBookStarted');
    })
    const searchDuration = Math.floor(Math.random() * 5 * 1000);
    setTimeout(() => {
        const book = { title: 'super titre', author: 'super auteur'};
        ee.emit('bookFound', book);
    }, searchDuration);
    return ee;
};

const desiredBook = getBook();

desiredBook.on('searchBookStarted', function() {
    console.log('La recherche du livre a commencé');
});

desiredBook.on('bookFound', function(data) {
    console.log(`livre trouvé ${JSON.stringify(data)}`);
});