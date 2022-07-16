const name = 'sanjay';
const department = 'IT';

function app() {
  console.log(name);
}
app();
module.exports = { name, department, app };

module.exports.my_name = name;

console.log(module);
