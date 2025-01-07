const app_url = 'http://localhost/';
const server_port = 8900;

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
// --------------------- response application/pdf ---------------------
// http.createServer((request, response) => {
//     const file = './att.pdf';
//     fs.readFile(file, (error, data) => {
//         if (error) {
//             response.writeHead(404, { 'Content-Type': 'text/plain' });
//             response.end('File not found');
//         } else {
//             response.writeHead(200, { 'Content-Type': 'application/pdf' });
//             response.end(data);
//         }
//     });
// }).listen(server_port);
//----------------------------------------------------------------------

// --------------------- response application/json ---------------------
// http.createServer((request, response) => {
//     response.writeHead(200, { 'Content-Type': 'application/json' });
//     response.write('{"message" : "Hello world!"}');
//     response.end();
// }).listen(server_port);
// ----------------------------------------------------------------------

// --------------------- routing ---------------------
// http.createServer((request, response) => {
//     response.writeHead(200, { 'Content-Type': 'text/html' }); // define content type text/html

//     switch (request.url) { // switch condition using request.url
//         case '/': // route /
//             response.write('ini adalah halaman index'); // response return
//             break; // break operations

//         case '/about': // route /about
//             response.write('ini adalah halaman about'); // response return
//             break; // break operations

//         case '/profile': // route /profile
//             response.write('ini adalah halaman profile'); // response return
//             break; // break operations

//         default:
//             response.write('404: Halaman tidak ditemukan!'); // default response if requesting unregistered route
//     }

//     // response.write(route);
//     response.end();
// }).listen(server_port);
//----------------------------------------------------------------------

// --------------------- get query string ---------------------

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' }); //define content type text/html
    let q = url.parse(request.url, true).query; // parse request.url
    let txt = `Kata Kunci: ${q.genre}`; // prepare queried url with 'name = genre'
    response.end(txt); // pass query method into url
}).listen(server_port); // can be tested with `http://localhost:8900/?genre=LoFi`

//-------------------------------------------------------------
console.log(`Server running on ${app_url}:${server_port}`);
