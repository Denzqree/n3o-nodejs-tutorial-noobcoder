const express = require('express');
const path = require('path');

const app = express();

app.use('/public',express.static(path.join(__dirname,'static')));

app.set('view engine','ejs');

app.get('/:userQuery',(req,res)=>{
    res.render('index',{data : {userQuery : req.params.userQuery,
    searchResults : ['book1','book2','book3', 'book4'],loggedIn : true, username : 'johnny'}});
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