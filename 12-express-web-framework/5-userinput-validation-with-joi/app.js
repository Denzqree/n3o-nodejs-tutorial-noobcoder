const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Joi = require('joi');

const app = express();

app.use('/public',express.static(path.join(__dirname,'static')));

// extended true for objects
app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','index.html'));
});

async function validateBody(body,result,schema){
    let validation;
    try {
        validation = await schema.validateAsync(body);
        console.log(result);
        result.send('Successfully posted data');
    } catch (err) {
        console.log(err);
        result.send('Error has occured');
    }
}

app.post('/',(req,res)=>{
    console.log(req.body);
    const schema = Joi.object({
        email : Joi.string().trim().email().required(),
        password : Joi.string().min(5).max(10).required()
    });
    validateBody(req.body,res,schema);
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