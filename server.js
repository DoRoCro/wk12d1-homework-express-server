var express = require('express')
var app = express()
var path = require('path')
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/client/build/index.html'))
})

app.use(express.static('client/build'))
app.use(require('./client/src/controllers'))                // says look for index.js in controllers directory.
app.use(require('./client/src/models'))                // says look for index.js in controllers directory.

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('app listening at http://%s:%s', host, port)
})
