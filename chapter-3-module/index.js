const app_url = 'http://localhost/';
const server_port = 8080;

let http = require('http');

http.createServer((req, res) => {
    res.end('Hello server');
}).listen(server_port);

console.log(`Server running on ${app_url + server_port}`);
