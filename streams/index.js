// data, end, error, close, ...
// pipe, close, error, drain, ...

// readable stream (fichiers déplaçables morceaux par morceaux => économie de mémoire entre autre)

const createReadStream = require('fs').createReadStream;

const readable = createReadStream('./fruits.txt');

readable.on('data', (chunk) => {
    console.log(chunk.toString());
    console.log(chunk.length);
});

readable.on('end', () => {
    console.log('fini de lire');
});
