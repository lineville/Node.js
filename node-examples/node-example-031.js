const fs = require('fs');
var sourceFile = fs.createReadStream('/path/to/source.txt');
var destinationFile = fs.createWriteStream('/path/to/dest.txt');

sourceFile.on('data', function (chunk) {
    destinationFile.write(chunk);
});

