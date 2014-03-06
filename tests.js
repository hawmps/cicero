//Get test
//test for pony power call
// var ponyPower = require('./routes/formatReport.js')
// ponyPower()
var async = require('async')
var readJSON = require('./routes/readJSON.js')
async.series([

var testJSON = readJSON('./test.json')
var json2 = readJSON('./sydney-vmware.json')
], function (err, result) {
	console.log(result)
}))


