
import * as fs from 'fs';// if we are using this import all function then we have to use 
//fs in front of  every function like fs.rename ,, fs.existSync


// mkdir("Trial/ggg" , (error)=>{
//     console.log("Error making the file");
// })
//creating the folder in node js




// rmdir("Trial" , (error)=>{
//     console.log("Error making the file");
// }) 

//deleting the folder in node js using rmdir but rmdir will not delter the 
//sub folder from the folder it will just delter the empty folder


// fs.rename('log.txt' , "password.txt" ,(error)=>{
//     console.log("Error",error);
// })  this is used to rename the file 

if(fs.existsSync('server.js')){
    console.log("file found");
}
else{
    console.log("File not found");
} // this will check if a file exist or not  
