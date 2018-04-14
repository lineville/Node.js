// Load the fs (filesystem) module

var fs = require('fs');
var Parser = require('./parser');

// Read the components of the file into memory.
fs.readFile('example_log.txt', function(err, logData) {

  // if an error happens, throwing the error will
  // display the exception and end excecution
  if(err){
    throw err;
  }

  // convert the logData buffer into a string
  var text = logData.toString();

  var parser = new Parser();

  console.log(parser.parse(text));
  // expected: {A: 2, B: 14, C: 6}
});
