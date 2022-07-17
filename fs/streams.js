const fs = require('fs');

const readStream = fs.createReadStream('./files/streamfile.txt', {
  encoding: 'utf8',
});
const writeStream = fs.createWriteStream('./files/streamfile1.txt');

// we can pass encoding property or either we can use .toString() method inside the stream function
/*

let count = 0;

readStream.on('data', (chunk) => {
  count++;
  console.log('.............NEW CHUNK..........');
  console.log(chunk);
  writeStream.write(
    '.............................NEW CHUNK.........................................................'
  );
  writeStream.write(chunk);
});

readStream.on('end', () => {
  console.log(count);
});
*/

/*piping

readStream.pipe(writeStream);

*/
