const fs = require('fs');

// Add some files to the directory
for(let i = 0;i <= 5;i++){
    fs.writeFile('./example/example'+Math.floor((Math.random()*10)+1)+'.txt','This is a nice tutorial by NoobCoder',(err)=>{
        if(err)
            console.log(err);
        else
            console.log("File successfully created");
    });
}

// List all files in a directory
fs.readdir('example',(err,files)=>{
        if(err)
            console.log(err);
        else
            console.log(files);
            // for each file
            for(let file of files){
                // delete the file
                fs.unlink('./example/' + file,(err)=>{
                    if(err)
                        console.log(err);
                    else
                        console.log('Successfully deleted all the files in ./example/')
                });
            }
});