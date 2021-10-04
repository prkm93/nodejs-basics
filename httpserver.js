const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log({req});
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end('<h1>This is http server module.</h1><p>I;m learning nodejs.</p>');
})

server.listen(port, () => {
    console.log(`server is listening on port ${port}`);
})