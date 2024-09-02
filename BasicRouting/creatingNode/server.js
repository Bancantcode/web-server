var http = require('http');

var server = http.createServer((req, res) => {
    if(req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html'});

        res.write('<html><body><h1>This is Home Page</h1></body></html>')
        res.end();
    }
    else if(req.url == '/student') {
        res.writeHead(200, { 'Content-Type': 'text/html'});

        res.write('<html><body><h1>This is Student Page</h1></body></html>')
        res.end();
    }
    else if(req.url == '/admin') {
        res.writeHead(200, { 'Content-Type': 'text/html'});

        res.write('<html><body><h1>This is Admin Page</h1></body></html>')
        res.end();
    }
    else if(req.url == '/data') {
        res.writeHead(200, { 'Content-Type': 'application/json'});

        res.write(JSON.stringify({ message: "Hello World!" }));
        res.end();
    }
    else
        res.end('Invalid Request!');
});

server.listen(3000);

console.log('Server running...');