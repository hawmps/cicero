//get the JSON and create the static page for viewing
//to do - READ directory and auto create tables
//Dependencies
var path = require('path')
var fs = require('fs')
var async = require('async')
//Cache JSON objects initially
var testJSON = 'testJSON'//require('../test.json')
var json2 = 'json2'//require('../sydney-vmware.json')
//JSON reader
var readJSON = require('./readJSON')
//Set filename
var fileName = path.join(__dirname, '../', 'views/disk.jade')

function triggerGET (callback) {
	console.log('entering triggerGET')
	readJSON('../test.json',testJSON,readyLove)
	readJSON('../sydney-vmware.json',json2,readyLove)
	console.log(testJSON, json2)
	createReport(callback)
}

//Reportcreator. This only creates two tables at the moment.
function createReport (callback) {
console.log('entering createReport')
var header = "extend layout\nblock body\n header\n h1 Pony Power\n .container-fluid\n  .col-md-6\n   block content\n    table(class='table table-bordered')\n     tr"
fs.writeFileSync(fileName, header)
//create table header
var tableHeader = Object.keys(testJSON[0])
for (var i = 0; i < tableHeader.length; i ++) {
	tableHeader[i] = '\n      th <b>' + tableHeader [i] + '</b>'
	fs.appendFileSync(fileName, tableHeader[i])
	console.log('Writing' + tableHeader[i])
}	
for (var i = 0; i < Object.keys(testJSON).length; i ++) {
	var keysEnum = Object.keys(testJSON[i])	
	console.log(keysEnum)
	fs.appendFileSync(fileName, "\n     tr")
	for (var x = 0; x < keysEnum.length; x ++) {
		var outPut = "\n      td " + testJSON[i][keysEnum[x]]
		//console.log('appending' + outPut)
		fs.appendFileSync(fileName, outPut)		
	}
}
//Table 2
//
var header2 = "\n .col-md-6 \n   block content2\n    table(class='table table-bordered')\n     tr"
fs.appendFileSync(fileName, header2)


var tableHeader = Object.keys(json2[0])
for (var i = 0; i < tableHeader.length; i ++) {
	tableHeader[i] = '\n      th <b>' + tableHeader [i] + '</b>'
	fs.appendFileSync(fileName, tableHeader[i])
	console.log('Writing' + tableHeader[i])
}	
for (var i = 0; i < Object.keys(json2).length; i ++) {
	var keysEnum = Object.keys(json2[i])	
	console.log(keysEnum)
	fs.appendFileSync(fileName, "\n     tr")
	for (var x = 0; x < keysEnum.length; x ++) {
		var outPut = "\n      td " + json2[i][keysEnum[x]]
		//console.log('appending' + outPut)
		fs.appendFileSync(fileName, outPut)		
	}
}
//callback()
}

function readyLove(varName,data) { 
	var varName = data
	console.log(varName[0])
	}

module.exports.createReport = triggerGET
//createReport()
