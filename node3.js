
import * as fs from 'fs';
// mkdir("Trial/ggg" , (error)=>{
//     console.log("Error making the file");
// })
//creating the folder in node js
// rmdir("Trial" , (error)=>{
//     console.log("Error making the file");
// })//


//deleting the folder in node js using rmdir


// fs.rename('log.txt' , "password.txt" ,(error)=>{
//     console.log("Error",error);
// })  this is used to rename the file

if(fs.existsSync('server.js')){
    console.log("file found");
}
else{
    console.log("File not found");
}
