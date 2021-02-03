const fs = require('fs');
// Compression library (zlib)
const zlib = require('zlib');

//We're going to create a transform stream
// for unzipping (createGunzip())
const gunzip = zlib.createGunzip();
const readStream = fs.createReadStream('./lorem_dup.txt.gz');
// Don't forget to change the type to -------------------.gz
const writeStream = fs.createWriteStream('./lorem_uncompressed.txt');

// Takes the piped chunks and uncompress it
// then piped out to the other write stream
readStream.pipe(gunzip).pipe(writeStream);