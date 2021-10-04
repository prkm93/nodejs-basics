const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'text/html');
    if (req.url == '/') {  
        res.statusCode = 200;
        res.end('<h1>This is http server module.</h1><p>I;m learning nodejs.</p>');
    } else if (req.url == '/about') {
        res.statusCode = 200;
        res.end('<h1>About Http server module.</h1><p>Exploring http server module.</p>');
    } else if (req.url == '/bootstrap') {
        const data = fs.readFileSync('index.html');
        res.end(data.toString()); 
    } 
    else {
        res.statusCode = 404;
        res.end('<h1>Page not found on server</h1>');
    }
})

server.listen(port, () => {
    console.log(`server is listening on port ${port}`);
})