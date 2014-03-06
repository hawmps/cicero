/*
 * Module dependencies
 */
 //scheck out node-schedule
var express = require('express')
  , stylus = require('stylus')
  , nib = require('nib')
  , bootstrap = require('bootstrap3-stylus')
  , ponyPower = require('./routes/formatReport.js')
var app = express()




function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    //.use(nib())
    .use(bootstrap())
}



app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(express.logger('dev'))
app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
))
app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
  res.render('index',
   {title : 'Home' }
  )
})

app.get('/disk', function (req, res) {    
  
  ponyPower.createReport(res.render('disk'))
  //res.end()
})




app.listen(3000)