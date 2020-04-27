// TODO test parsing adn mock response
const movie = require('../data/fargo')

describe('happy case', () => {
  it('should parse viaPlay response', () => {
    const parsedMovie = JSON.parse(movie)
    const handler = require('../../src/index').handler()

    expect(1).toEqual(3)
  })
})
