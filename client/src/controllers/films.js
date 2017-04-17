var express = require('express')
var filmRouter = new express.Router()
var Films = require('../models/films')
var Film = require('../models/film')
var Review = require('../models/review')

var films = new Films()

// ROUTES FOR FILMS RESOURCE

// after using the router to prepend /api/films to any requests to this file

// INDEX
filmRouter.get('/', function (req, res) {
  res.json(films)
})

// SHOW
filmRouter.get('/:id', function (req, res) {
  console.log(req.params)
  res.json({ data: films[req.params.id] })         // similar to sinatra, use the params property from the request
})

// UPDATE
filmRouter.put('/:id', function (req, res) {
  // console.log(req.body)
  films[req.params.id] = req.body.film
  res.json(films)
})

// CREATE
filmRouter.post('/', function (req, res) {
  films.push(req.body.film)
  res.json(films)
})

// DELETE
filmRouter.delete('/:id', function (req, res) {
  films.splice(req.params.id, 1)
  res.json(films)
})

module.exports = filmRouter
