import express from 'express';
 import mongoose from 'moongoose';
 import connectDb from './config/db';
 import User from './Models/User.js';
 const app = express();

 const port = 3000;

 await connectDb();
 app.get('/' , (req , res)=> ('Hello world'));
 app.listen(port, () => console.log(`Example app listening on port ${port}`));