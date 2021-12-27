const http = require('http');
const PORT = 8080;

const server = http.createServer((request, response) => {});

server.listen(PORT, () => {
    console.log(`Started new server ${process.pid}`);
    for (let i = 0; i < 100000000; i++) {
        const evaluated = i / 2;      
    }
});