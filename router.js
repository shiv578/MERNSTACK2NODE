import express from 'express'

const router =  express.Router();

router.get('/Products' , (req, res)=>{
    res.send(`products Page ${req.method}`); 

    
})
.post('/Products' ,(req,res)=>{
    
    res.send(`Products page ${req.method}`);
})

.post('/Products' ,(req,res)=>{
    res.send(`Products page ${req.method}`);
})

.post('/Products' ,(req,res)=>{
    res.send(`Products page ${req.method}`);
})