const fs = require('fs');
//create a file

fs.writeFile('example.txt',"this is an example", (err)=>{
    if(err)
        console.log(err);
    else
        console.log('File successfuly created');
        fs.readFile('example.txt','utf8',(err,file)=>{
            if(err)
                console.log(err);
            else
                // File is a Buffer Stream, we NEED to
                // encode the file with in this case utf-8 (up there)
                console.log(file);
                //Delete the file
                fs.
            
        });

});