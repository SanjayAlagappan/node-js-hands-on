const http = require('http');

const server = http.createServer((req, res) => {
  console.log('req made');
  console.log(req);
  console.log(req.url + ' ' + req.method);
  //setting headers
  // res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1>Hey there!!!</h1>');
  res.write("<p>How y'all doing</p>");
  res.end(); //res.end('data') can also be passed since we are just using a single data chunk.
});

server.listen(3000, 'localhost', () => {
  console.log('Listening for requests in port 3000');
});
