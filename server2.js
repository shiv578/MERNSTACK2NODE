import { createServer } from "http";


const data = {
    name: "shivam",
    regno: 23443,
    age: 33
}

const server = createServer((req, res) => {
if(req.url === '/'){
    res.end("This si the home page")
    
}else if(req.url === '/about'){
res.end("You are Currently at about page" +
JSON.stringify(data)

);

}
else if(req.url === '/contact'){
    res.end("You are not at the contact Page")
}
else{
    res.end("Bad Request")
}
});





server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});