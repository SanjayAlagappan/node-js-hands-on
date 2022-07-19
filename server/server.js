const http = require('http');

const server = http.createServer((req, res) => {
  console.log('req made');
});

server.listen(3000, 'localhost', () => {
  console.log('Listening for requests in port 3000');
});
