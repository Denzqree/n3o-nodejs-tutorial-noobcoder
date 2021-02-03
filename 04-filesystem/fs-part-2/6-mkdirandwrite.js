const fs = require('fs');
//Creates a folder
fs.mkdir('tutorial',(err)=>{
    if(err)
        console.log(err);
    else
        console.log('Folder successfully created');
        // Writing the file
        fs.writeFile('./tutorial/example.txt','Lorem ipsum dolor sit amet',(err)=>{
            if(err)
                console.log(err);
            else
                console.log('File succesfully written in ./tutorial');
        });
});