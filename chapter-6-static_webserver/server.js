const http = require('http');
const url = require('url');
const fs = require('fs');
const app_url = 'http://localhost/';
const server_port = 8900;

// strip trailing slash function
const trailingSlastStrip = (str) => {
    return str.endsWith('/') ? str.slice(0, -1) : str;
};

// --------------------[static webserver]--------------------

http.createServer((request, response) => {
    let q = url.parse(request.url, true);
    const filename = `.${q.pathname}`;

    fs.readFile(filename, (error, data) => {
        if (error) {
            response.writeHead(404, { 'Content-Type': 'text/plain' });
            return response.end('Error 404: ' + error);
        }

        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(data);
        return response.end();
    });
}).listen(server_port);
console.log(`Server running on : ${trailingSlastStrip(app_url)}:${server_port}`);

// test with "http://localhost:8900/index.html" appending file extension, if not, it is not gonna work

// ----------------------------------------------------------
