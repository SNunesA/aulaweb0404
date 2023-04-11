//const os= require("os");

//console.log("Ola node");
//console.log(os.hostname());
//console.log(os.type());
//console.log(os.arch());
//console.log(os.networkInterfaces());


//npm bibliotecas
const http= require("http");
const users=require('./mocks/users');

const server = http.createServer((request, response) => {
    console.log(`Request method: ${request.method} | 
    Endpoint: ${request.url}`);
    if(request.url === '/' && request.method === 'GET'){
        response.writeHead(200,{'Content-Type':'text/html'});
        response.end('<h1>Hello Node</h1>');
    }else if(request.url === '/users' && request.method === 'GET'){
        response.writeHead(200,{'Content-Type':'application/json'});
        response.end(JSON.stringify(users));
    }
});

server.listen(3000, ()=> console.log("Server started at localhost:3000"));

