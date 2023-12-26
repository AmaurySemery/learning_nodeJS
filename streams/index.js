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

// const { createWriteStream, createReadStream } = require('fs');

// const readStream = createReadStream('./fruits.txt');
// const writeStream = createWriteStream('./fruits_copy.txt');

// readStream.on('data', (chunk) => {
//     writeStream.write(chunk);
// });

// readStream.on('error', (error) => {
//     console.log('erreur : ', error.message);
// });

// readStream.on('end', () => {
//     writeStream.end();
// });

// const { createWriteStream} = require('fs');
// const writeStream = createWriteStream('./massif.txt');

// for (let i = 0 ; i <= 1e5; i++) {
//     writeStream.write(`${i} - je me répète mais je ne suis pas fou\n`);
// };

// writeStream.end();

// process.stdin.pipe(process.stdout);

const { createReadStream } = require('fs');

// Affiche le contenu du fichier dans la console

createReadStream('./fruits.txt').pipe(process.stdout);