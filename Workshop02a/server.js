const http = require('http');

const server = http.createServer((req, res)=> {
    res.setHeader('Content-Type', 'text/plain');

    if(req.url === '/') {
        res.writeHead(200);
        res.end('Hello, World!');

    } else if (req.url === '/about') {
        res.writeHead(200);
        res.end('About Page');

    } else if (req.url === '/contact') {
        res.writeHead(200);
        res.end('Contact Page');

    } else {
        res.writeHead(404);
        res.end('404 Not Found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});