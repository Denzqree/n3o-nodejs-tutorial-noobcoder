const http = require('http');
const fs = require('fs');
http.createServer((req,res)=>
{
    // creating the readstream for the file
    const readStream = fs.createReadStream('./static/index.html');

    // writing header (200 means everything is ok)
    // content type can be text, image or applicaton
    res.writeHead(200,{'Content-type':'text/html'});

    // pipe the readstream into where we want to send it
    // response is also a writeable stream
    readStream.pipe(res);
}).listen(3000);