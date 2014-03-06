//JSON reader
var fs = require('fs')
function readJSON (filenameJSON) {
	fs.readFileSync(filenameJSON, 'utf8') 
}

module.exports = readJSON
