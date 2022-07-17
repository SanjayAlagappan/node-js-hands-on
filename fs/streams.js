const fs = require('fs');

const readStream = fs.createReadStream('./files/streamfile.txt');
const writeStream = fs.createWriteStream('./files/streamfile1.txt');
let count = 0;

readStream.on('data', (chunk) => {
  count++;
  console.log('.............NEW CHUNK..........');
  console.log(chunk.toString());
  writeStream.write(
    '.............................NEW CHUNK.........................................................'
  );
  writeStream.write(chunk);
});

readStream.on('end', () => {
  console.log(count);
});
