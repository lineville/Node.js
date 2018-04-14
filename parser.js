
// Parser constructor
var Parser = function(){

};

// Parses some text
Parser.prototype.parse = function(text) {
  var results = {};

  // split on line breaks
  var lines = text.split('\n');

  for(var i=0; i<lines.length-1; i++){
    var parts = lines[i].split(' ');
    var letter = parts[1];
    var count = parseInt(parts[2]);

    // if the result does not have the letter yet
    // give it the value of zero
    if(!results[letter]){
      results[letter] = 0;
    }

    // otherwise we increment the results at letter with the new count value.
    results[letter] += parseInt(count);
  }
  return results;

};

// Export the Parser constructor from this module
module.exports = Parser;
