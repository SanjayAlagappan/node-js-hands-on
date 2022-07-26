const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log('req made');
  let path = './views';

  switch (req.url) {
    case '/':
      path += '/index.html';
      break;

    case '/about':
      path += '/about.html';
      break;

    default:
      path += '/404.html';
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) console.log(err);
    else res.end(data);
  });
});

server.listen(3000, () => {
  console.log('listening on port 3000');
});
