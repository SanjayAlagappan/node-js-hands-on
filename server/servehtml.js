const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log('req made');

  fs.readFile('./views/index.html', (err, data) => {
    if (err) console.log(err);
    else res.end(data);
  });
});

server.listen(3000, () => {
  console.log('listening on port 3000');
});
