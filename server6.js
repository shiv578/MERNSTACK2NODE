import express from 'express';
 import mongoose from 'moongoose';
 import connectDb from './config/db';
 import User from './Models/User.js';
 const app = express();

 const port = 3000;

 await connectDb();

 app

 .get('/' , (req , res)=>{
res.send(`${req.method} is called...`);
 })//fethc all the information from the server from the data base



  .get('/:id' , (req , res)=>{

    
res.send(`${req.method} is called...`);
 })//it will also fetch documenet but only a single document matching the id that is givern


 .post('/' , (req , res)=>{
res.send(`${req.method} is called...`)

 })// create and store the data on the data base 

  .put('/:id' , (req , res)=>{
res.send(`${req.method} is called...`)

 })//we will put  or update the data using id up data a particular data
 
  .delete('/' , (req , res)=>{
res.send(`${req.method} is called...`)

 })//delete all the socument on the data base 



  .delete('/:id' , (req , res)=>{
res.send(`${req.method} is called...`)

 });// we will delte a particular data on the data base using the id mathicn a id
 // we will delte a particular data.





 app.listen(port, () => console.log(`Example app listening on port ${port}`));