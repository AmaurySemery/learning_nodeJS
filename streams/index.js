// data, end, error, close, ...
// pipe, close, error, drain, ...

// readable stream (fichiers déplaçables morceaux par morceaux => économie de mémoire entre autre)

//const createReadStream = require('fs').createReadStream;

//const readable = createReadStream('./fruits.txt');

//readable.on('data', (chunk) => {
//    console.log(chunk.toString());
//     console.log(chunk.length);
// });

// readable.on('end', () => {
//     console.log('fini de lire');
// });

// writable stream (le verser quelque part)

const { createWriteStream, createReadStream } = require('fs');

const readStream = createReadStream('./fruits.txt');
const writeStream = createWriteStream('./fruits_copy.txt');

readStream.on('data', (chunk) => {
    writeStream.write(chunk);
});

readStream.on('error', (error) => {
    console.log('erreur : ', error.message);
});

readStream.on('end', () => {
    writeStream.end();
});