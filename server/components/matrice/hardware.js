// Function to get values from the board (get the output)
function get() {
  return 1;
}

// Function to interact with Input values of the board
function post(emojis) {
  var { PythonShell } = require('python-shell');
  console.log(emojis)
  var command = 'open1';
  var comport = 6;
  var path = require('path');
  let options = {
	scriptPath: __dirname
	}

  switch (emojis){
	case 'smile.py':
  	console.log('smile')
		PythonShell.run('smile.py', options, function(err) {
    			if (err) throw err;
    			console.log('finished');
  			});
  		
		break;
		
	case 'sad.py': 
		PythonShell.run('sad.py', options, function(err) {
    			if (err) throw err;
    			console.log('finished');
  			});
  		
		break;
	case 'coeur.py':
		PythonShell.run('coeur.py', options,  function(err) {
    			if (err) throw err;
    			console.log('finished');
  			});
  		
		break;
	}
return 1;
}
		
		

  

// Syntax to export functions
module.exports = {
  get,
  post
};
