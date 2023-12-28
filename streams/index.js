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

// const { createReadStream } = require('fs');

// Affiche le contenu du fichier dans la console

// createReadStream('./fruits.txt').pipe(process.stdout);

// Taper par exemple "node index fruits.txt"

// createReadStream(process.argv[2]).pipe(process.stdout);

// const { Readable } = require('stream');

// const text = `Gros test
// sur plusieurs
// déjà la fin`;

// class StreamText extends Readable {
//     constructor(text){
//         super();
//         this.text = text;
//         this.sentences = text.split('\n');
//     }
//     _read() {
//         this.sentences.map(data => {
//             this.push(data);
//         });
//         this.push(null);
//     }
// } // class end

// const streamText = new StreamText(text);
// streamText.on('data', (chunk) => console.log(chunk.toString()));
// streamText.on('end', () => console.log('lecture terminée'));

// const { Writable } = require('stream');

// class CustomWritable extends Writable {
//     _write(chunk, encoding, next) {
//         console.log(chunk.toString().trim().toUpperCase());
//         next();
//     }
// }

// const cw = new CustomWritable();
// streamText.pipe(cw);

// const { createReadStream, createWriteStream } = require('fs');

// const myReadStream = createReadStream('./massif.txt');
// const myWriteStream = createWriteStream('./massif_copie.txt', {
//     highWaterMark: 512
// });

// let nbOfPauses = 0

// myReadStream.on('data', (chunk) => {
//     const isReadyToWriteMoreData = myWriteStream.write(chunk);
//     if(!isReadyToWriteMoreData) {
//         nbOfPauses = nbOfPauses + 1;
//         console.log('Trop de données poussées pour moi', nbOfPauses);
//         myReadStream.pause();
//     }
// });

// myWriteStream.on('drain', () => {
//     console.log('De nouveau prêt à écrire');
//     myReadStream.resume();
// });

// const { createReadStream, createWriteStream } = require('fs');

// const myWriteStream = createWriteStream('fruits.txt');
// createReadStream('fruits.txt').pipe(process.stdout);
// process.stdin.pipe(myWriteStream);

// readable -> duplex / transform / passthrough / ... -> writable
// readable -> transform -> writable (exemple compression de fichiers)

const { Transform } = require('stream');

class Slugify extends Transform {
    _transform(chunk, encoding, next) {
        const slug = chunk.toString().trim().replace(/\s+/g, '-');
        this.push(slug + '\n');
        next();
    }
    _flush(next) {
        console.log('bye bye');
    }
} // class end

const slugify = new Slugify();
process.stdin.pipe(slugify).pipe(process.stdout);