var express = require('express')
var router = new express.Router()

router.use('/api/films', require('./films'))    // tell router to send anything starting /api/films to controllers/index.js,

// Create routes using the object
router.get('/', function (req, res) {              // listen for 'GET's to /, callback (request, response)
  // res.json({ data: 'Sup!, JS on the backend. Cool bananas'})
  res.sendFile(path.join(__dirname + '/index.html'))   // __dirname__ worked out by node
})

module.exports = router
