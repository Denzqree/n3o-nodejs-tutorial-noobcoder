const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use('/public',express.static(path.join(__dirname,'static')));

// extended true for objects
app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

// We made a request to the server, the server
// did some processing, and then adds whatever to
// the request with req.myobject = 'myobject';
app.use((req,res,next)=>{
    console.log(req.url,req.method);
    next();
});

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','index.html'));
});

app.post('/',(req,res)=>{
    console.log(req.body);
    // database work here
    res.json({success: true
    });
});

app.get('/example',(req,res)=>{
    res.send('hitting example route');
});

app.get('/example/:name/:age',(req,res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send(req.params.name + " : " + req.params.age);
});

app.listen(3000);