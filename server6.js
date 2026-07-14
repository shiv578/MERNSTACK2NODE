import express from 'express';
 import mongoose from 'moongoose';
 import connectDb from './config/db';
 import User from './Models/User.js';
 import {v4 as uuidv4} from 'uuid';
 const app = express();

 console.log(uuidv4());
 const port = 3000;
app.use(express.json());
 await connectDb();

 app

 .get('/' , (req , res)=>{

    const datas =  User.find({}).exec();

    res.json(User);


 })//fethc all the information from the server from the data base



  .get('/:id' , (req , res)=>{


 })//it will also fetch documenet but only a single document matching the id that is givern


 .post('/' , (req , res)=>{

await User.create({
id: uuidv4(),
name: req.body.name ,
age: req.body.age,
email: req.body.email,


})
res.status(201).json({message: "Document Created succesfully!"});

 })// create and store the data on the data base 

  .put('/:id' , (req , res)=>{
await User.findOneAndUpdate({
    id: req.params.id,
},

{
name: req.body.name ,
age: req.body.age,
email: req.body.email,


}
)
    
 })//we will put  or update the data using id up data a particular data
 
  .delete('/' , (req , res)=>{

    

 await User.delete({})

 res.status(200).json({
message: "All document delted sucessfully..."

 })
 })//delete all the socument on the data base 



  .delete('/:id' , (req , res)=>{
   await User.deleteOne({
        id: req.params.id,
    })

    res.status(200).json({
        message: "Documemt deleted successfully"
    })
    
 });// we will delte a particular data on the data base using the id mathicn a id
 // we will delte a particular data.





 app.listen(port, () => console.log(`Example app listening on port ${port}`));