const fs = require('fs');

const readStream = fs.createReadStream('./lorem.txt','utf8');

readStream.on('data',(chunk)=>{

    console.log(chunk);

});

// Memory efficient, fixed and small buffer chunks