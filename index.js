// creating a server

const http = require("http")

const myServer = http.createServer((req, res) => {
console.log('New Request Recive');
res.end("End Server");
});

myServer.listen(3000,()=> console.log("Server Started!"))









