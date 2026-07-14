import express from 'express';
 import mongoose from 'moongoose';
 const app = express();

 const port = 3000;

 app.get('/' , (req , res)=> ('Hello world'));
 app.listen(port, () => console.log(`Example app listening on port ${port}`));