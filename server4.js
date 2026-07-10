//working on the expresss js
import express from 'express';

const PORT =  3000;
const app = express();



app.get("/", (res , req)=>{
res.send("Hellp from the server");

});

app.post("/" , (req,req)=>{
    res.send("hellp form the client");
});

app.put("/" , (res,req)=>{
    res.send("updating value in the server");
})

app.patch("/" , (req,res)=>{
    res.send("using patch");
})

app.listen(3000 , ()=>{
    console.log("server is running..!!")
})
//rest api   it is the way to communicate over the interesr usinf the http method 