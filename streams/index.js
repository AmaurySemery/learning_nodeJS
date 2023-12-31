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

// const { Transform } = require('stream');

// class Slugify extends Transform {
//     _transform(chunk, encoding, next) {
//         const slug = chunk.toString().trim().replace(/\s+/g, '-');
//         this.push(slug + '\n');
//         next();
//     }
//     _flush(next) {
//         console.log('bye bye');
//     }
// } // class end

// const slugify = new Slugify();
// process.stdin.pipe(slugify).pipe(process.stdout);

// create big file

// const fs = require('fs');
// const file = fs.createWriteStream('./big.txt');

// for(let i=0; i<= 100; i++) {
//     file.write(`${i} - je me répète mais je ne suis pas fou\n`);
// }

// file.end();

// const { createReadStream, createWriteStream } = require('fs');
// const { PassThrough } = require('stream');

// const myReadStream = createReadStream('./big.txt');
// const myPassThrough = new PassThrough();
// let total = 0;
// myPassThrough.on('data', (chunk) => {
//     total += chunk.length;
//     console.log(`${total} octets`)
// });

// myReadStream.pipe(myPassThrough).pipe(process.stdout);

// const net = require('net');

// net.createServer(function(stream) {
//     stream.pipe(stream);
// }).listen(5000);

// const { Readable } = require('stream');

// const text = `Gros test
// sur plusieurs
// déjà la fin`;

// class StreamText extends Readable {
//     constructor(text){
//         super({ objectMode: true });
//         this.text = text;
//         this.sentences = text.split('\n');
//     }
//     _read() {
//         this.sentences.map(data => {
//             const obj = {
//                 data: data,
//                 length: data.length
//             };
//             this.push(obj);
//         });
//         this.push(null);
//     }
// } // class end

// const streamText = new StreamText(text);
// streamText.on('data', (chunk) => console.log(JSON.stringify(chunk)));
// streamText.on('end', () => console.log('lecture terminée'));

// Sans streams

// const http = require('http');
// const fs = require('fs');
// const videoPath = './videos/test.mp4'

// const server = http.createServer();

// server.on('request', (req, res) => {
//     if (req.url === '/favicon') return;
//     if (req.url === '/contact') {
//         memoryUsageInMegaBytes(`Route ${req.url}`);
//         res.end('Contactez moi');
//     }
//     else if (req.url === '/videos') {
//         fs.readFile(videoPath, (error, data) => {
//             memoryUsageInMegaBytes(`Route ${req.url}`);
//             if (error) {
//                 console.error(`Echec de la lecture ${error.message}`);
//             }
//             res.writeHead(200, { 'Content-Type': 'video/mp4'});
//             res.end(data);
//         })
//     } else {
//         memoryUsageInMegaBytes(`Route ${req.url}`);
//         res.end(`Sur la page ${req.url}`);
//     }
// });

// const port = 3000;
// server.listen(port, () => {
//     console.log(`Serveur sur port ${port}`);
// });

// function memoryUsageInMegaBytes (pageUrl) {
//     const used = process.memoryUsage();
//     console.log(`==== ${pageUrl} ====`);
//     for (let key in used) {
//         console.log(`${key} ${Math.round(used[key] / 1024 / 1024 ) * 100} Mo`);
//     }
//     console.log(`==== ${pageUrl} end ====\n\n`);
// }

// Avec streams

const http = require('http');
const fs = require('fs');
const { createReadStream } = require('fs');
const videoPath = './videos/test.mp4'

const server = http.createServer();

server.on('request', (req, res) => {
    if (req.url === '/favicon') return;
    if (req.url === '/contact') {
        memoryUsageInMegaBytes(`Route ${req.url}`);
        res.end('Contactez moi');
    }
    else if (req.url === '/videos') {
        const myReadStream = createReadStream(videoPath);
        res.writeHead(200, { 'Content-Type': 'video/mp4'});
        myReadStream.pipe(res);
        memoryUsageInMegaBytes(`Route ${req.url}`);
    } else {
        memoryUsageInMegaBytes(`Route ${req.url}`);
        res.end(`Sur la page ${req.url}`);
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Serveur sur port ${port}`);
});

function memoryUsageInMegaBytes (pageUrl) {
    const used = process.memoryUsage();
    console.log(`==== ${pageUrl} ====`);
    for (let key in used) {
        console.log(`${key} ${Math.round(used[key] / 1024 / 1024 ) * 100} Mo`);
    }
    console.log(`==== ${pageUrl} end ====\n\n`);
}