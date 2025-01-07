// ------------------------------
// server response with plain texrt
// ------------------------------
// var http = require('http');

// var server = http.createServer(function (req, res) {
//     res.end('Hello, welcome to node js');
// });

// server.listen(4646);

// console.log('server running on http://localhost:4646');

// ------------------------------
// =========================================================================
// ------------------------------
// Server response with html
// ------------------------------
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Hello <b>World</b>!');
    res.end();
}).listen(4481);

console.log('server running on http://localhost:4481');
// ------------------------------
// =========================================================================
