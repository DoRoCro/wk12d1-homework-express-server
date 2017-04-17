var Film = require('../film.js')
var assert = require('assert')

describe('Film', function () {
  var film

  beforeEach(function () {
    film = new Film({
      title: 'Titanic',
      actors: ['Leonardo DiCaprio']
    })
  })

  it('should have title titanic', function () {
    assert.equal(film.title, 'Titanic')
  })
})
