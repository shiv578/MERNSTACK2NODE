console.log("Hello from Node");

import { error } from 'console';
import {appendFile , appendFileSync, unlink } from 'fs';
appendFile('logs.txt' , "This is a new TXT\n", (error)=>{
if(error){
    console.log("Error: ",error);
}
});



//append file with not over write it will add the data after it( work)
// wrtie file will overwrite the data  it will remove all the prevous data 


unlink("logs.txt" ,(error)=>{
    console.log("Error: ", error);
})
