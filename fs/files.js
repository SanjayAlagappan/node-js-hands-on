const fs = require('fs');

/* reading a file

these fs methods done are asynchronous means that the easier tasks below will be completed without waiting for this to complete.


fs.readFile('./files/sample1.txt', (err, data) => {
  if (err) console.log(err);
  console.log(data.toString());
});   

*/

/*

Writing files  - In writing the file will be initially looked for , if it isn't there it will be
created automatically to write on it.

fs.writeFile('./files/sample3.txt', 'this is changed text', () => {
  console.log('file was written');
});

*/

/*

making directories

fs.mkdir('./assets', (err) => {

  if (err) console.log(err);

  console.log('folder created successfully');
});

[EEXIST: file already exists, mkdir './assets'] {
  code: 'EEXIST',
  errno: -17,                  if folder already exists it will result in a error like this
  path: './assets',
  syscall: 'mkdir'
}

*/

/*

removing directories

if (!fs.existsSync('./assets')) {
  fs.mkdir('./assets', (err) => {
    if (err) console.log(err);

    console.log('folder created successfully');
  });
} else {
  fs.rmdir('./assets', (err) => {
    console.log(err);
  });

  console.log('folder existed and deleted successfully using rmdir');
}


*/
