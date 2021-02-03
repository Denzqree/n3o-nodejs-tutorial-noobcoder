const http = require('http');

// create http server
// receives callback with request and response object
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
    // responding to the client
    res.write('Hello world from Nodejs');
    // send the response
    res.end();
    }else{
        res.write('using some other domain');
        res.end();
    }
});

//tell what port the server is going to listen for requests
server.listen('3000');