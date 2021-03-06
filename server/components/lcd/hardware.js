// Function to get values from the board (get the output)
function get() {
  return 1;
}

// Function to interact with Input values of the board
function post(ligne1, ligne2, on_off) {
  var { PythonShell } = require('python-shell');
  var path = require('path');

  var command = 'open1';
  var comport = 6;

  let options = {
    scriptPath: __dirname,
    args: [ligne1, ligne2, on_off]
  };

  PythonShell.run('hardware.py', options, function(err) {
    if (err) throw err;
    console.log('finished');
  });
  return 1;
}

// Syntax to export functions
module.exports = {
  get,
  post
};
