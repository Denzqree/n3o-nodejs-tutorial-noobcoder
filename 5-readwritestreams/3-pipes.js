const fs = require('fs');

const readStream = fs.createReadStream('./lorem.txt','utf8');
const writeStream = fs.createWriteStream('./lorem_dup.txt');

readStream.pipe(writeStream);