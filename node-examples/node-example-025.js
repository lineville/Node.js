const fs = require('fs');
const watcher = fs.watch('/path/to/folder');
watcher.on('change', function (event, filename) {
    console.log(event + ' on file ' + filename);
});
