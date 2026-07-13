import express from 'express';
 const PORT = 3000;

 const app =  express();

 app.get('/' , (req,res)=>{

  
    res.send("Index Page");
 });

 app.listen(PORT , '127.0.0.1', ()=>{
    console.log(`node is running on local host: ${PORT}`);
 })