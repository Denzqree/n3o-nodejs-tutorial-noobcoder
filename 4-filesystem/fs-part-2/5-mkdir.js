const fs = require('fs');
//Creates a folder
fs.mkdir('tutorial',(err)=>{
    if(err)
        console.log(err);
    else
        console.log('Folder successfully created');
        // Removing the folder
        fs.rmdir('tutorial',(err)=>{
            if(err)
                console.log(err);
            else
                console.log('Folder successfully deleted');
        });
});