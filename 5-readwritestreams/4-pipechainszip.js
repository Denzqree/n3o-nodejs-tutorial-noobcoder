const fs = require('fs');
// Compression library (zlib)
const zlib = require('zlib');

//We're going to create a transform stream
const gzip = zlib.createGzip();
const readStream = fs.createReadStream('./lorem.txt','utf8');
// Don't forget to change the type to -------------------.gz
const writeStream = fs.createWriteStream('./lorem_dup.txt.gz');

// Takes the piped chunks and compress it
// then piped out to the other write stream
readStream.pipe(gzip).pipe(writeStream);