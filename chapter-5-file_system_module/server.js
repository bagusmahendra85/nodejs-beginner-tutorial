const http = require('http'); // import http module
const fs = require('fs'); // import file system module
const app_url = 'http://localhost/'; // define application url
const server_port = 8900; // define application port

//remove trailing slash function
const trailingSlashStrip = (str) => {
    return str.endsWith('/') ? str.slice(0, -1) : str; // returning str with conditional check
};

// ------------------------------[HARD CODED HTML]------------------------------

// http.createServer((request, response) => {
//     response.writeHead(200, { 'Content-Type': 'text/html' });
//     response.write(`Hello <b>World</b>`);
//     response.end();
// }).listen(server_port);
// console.log(`Server running on ${trailingSlashStrip(app_url)}:${server_port}`);
// -----------------------------------------------------------------------------

// -------------------[RETURN index.html - FS - readfile]-----------------------
// NOTE : a function to read file

// http.createServer((request, response) => {
//     fs.readFile('index.html', (error, data) => {
//         if (error) {
//             response.writeHead(500, { 'Content-Type': 'text/plain' });
//             response.end('Internal Server Error (500)');
//             console.error('Error reading file:', error);
//         }

//         response.writeHead(200, { 'Content-Type': 'text/html' });
//         response.write(data);
//         response.end();
//     });
// }).listen(server_port);
// console.log(`Server running on ${trailingSlashStrip(app_url)}:${server_port}`);
// -----------------------------------------------------------------------------

// -------------------------------[FS - append]---------------------------------
// NOTE: a function to create and append content to a file

// fs.appendFile('newfile1.txt', 'Hello dari newfile1.txt', (error) => {
//     if (error) throw error;
//     console.log(`File successfully created!`);
// });

//NOTE: if you run this twice, then the content will be added, if run thrice, content will be thrice, and so on

// -----------------------------------------------------------------------------

// -------------------------------- [FS - open ]--------------------------------
// NOTE : this function has two functionality, for opening file and for writing file

// --- write flag 'w'
// fs.open('newfile2.txt', 'w', (error, file) => {
//     if (error) throw error;

//     console.log('Saved!');
// });

/** NOTE : fs.open() has three parameters
 *  NOTE : fs.open(fileName, flag, callback_function)
 *  NOTE : example above we using 'w' flag, meaning write */

// --- read and write flag 'w+'

// fs.open('newfile2.txt', 'w+', (error, file) => {
//     if (error) throw error;

//     let content = 'Hello from mengwidev!'; // defining content

//     fs.writeFile(file, content, (error) => {
//         // write file
//         if (error) throw error;
//         console.log('saved!');
//     });

//     fs.readFile(file, (error, data) => {
//         // read file
//         if (error) throw error;
//         console.log(data.toString('utf8')); // change the text encoding to UTF-8
//     });
// });

// -----------------------------------------------------------------------------

// ------------------------------[FS - rename()]--------------------------------
// NOTE : a function to rename file

// fs.rename('newfile1.txt', 'newfile1-renamed.txt', (error) => {
//     if (error) throw error;
//     console.log('File renamed!');
// });

// -----------------------------------------------------------------------------

// ------------------------------[FS - unlink()]--------------------------------
// NOTE : a fs function to delete file

fs.unlink('newfile2.txt', (error) => {
    if (error) throw error;
    console.log('File deleted!');
});

// -----------------------------------------------------------------------------
