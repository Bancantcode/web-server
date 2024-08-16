// Bryan Aaron B. Santiago | WD-303 (2164)

const root = require('./root.js')
const about = require('./about.js')
const contact = require('./contact.js')

const name = "John Smith";

var http = require('http');

var server = http.createServer((req, res) => {
    if(req.url == '/' || req.url == '/root') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(`<html><body><h1>Welcome to my Node.js Application</h1><p>${root(name)}</p></body></html>`)
        res.end();
    }
    else if(req.url == '/about') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(`<html><body><h1>This is the About Page</h1><p>${about(name)}</p></body></html>`)
        res.end();
    }
    else if(req.url == '/contact') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(`<html><body><h1>This is the Contact Page</h1><p>${contact(name)}</p></body></html>`)
        res.end();
    }
    else if(req.url == '/gallery') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><h1>This is the Gallery Page</h1></body></html>')
        res.end();
    }
    else
        res.end("Invalid Request...")
});

server.listen(3000);

console.log("Server running...")



