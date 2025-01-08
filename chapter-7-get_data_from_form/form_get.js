const http = require('http');
const url = require('url');
const fs = require('fs');

const config = require('../server');
const { app_url, server_port } = config;

// strip trailing slash function
const trailingSlashStrip = (str) => {
    return str.endsWith('/') ? str.slice(0, -1) : str;
};

// http.createServer((request, response) => {
//     let q = url.parse(request.url, true);

//     if (q.pathname == '/search/' && request.method === 'GET') {
//         let keyword = q.query.keyword;

//         if (keyword) {
//             response.writeHead(200, { 'Content-Type': 'text/html' });
//             response.write('<h3>Search Result</h3>');
//             response.write(`<p>Anda mencari : ${keyword}</p>`);
//             response.end('<a href="/search/">kembali</a>');
//         } else {
//             fs.readFile('search.html', (error, data) => {
//                 if (error) {
//                     response.writeHead(404, { 'Content-Type': 'text/html' });
//                     response.write(`Error 404 : ${error}`);
//                 }

//                 response.writeHead(200, { 'Content-Type': 'text/html' });
//                 response.write(data);
//                 response.end();
//             });
//         }
//     }
// }).listen(server_port);

// console.log(`Server running on ${trailingSlashStrip(app_url)}:${server_port}`);

http.createServer((request, response) => {
    const send404 = (errorMsg) => {
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end(`Error 404 : ${errorMsg}`);
    };

    // Route switch
    switch (request.url) {
        case '/':
            fs.readFile('index.html', (error, data) => {
                if (error) {
                    send404('File not found: index.html');
                } else {
                    response.writeHead(200, { 'Content-Type': 'text/html' });
                    response.end(data);
                }
            });
            break;

        case '/search':
            fs.readFile('search.html', (error, data) => {
                if (error) {
                    send404('File not found: search.html');
                } else {
                    response.writeHead(200, { 'Content-Type': 'text/html' });
                    response.end(data);
                }
            });
            break;

        default:
            send404('Route not found');
            break;
    }
}).listen(server_port);

console.log(`Server running on ${trailingSlashStrip(app_url)}:${server_port}`);
