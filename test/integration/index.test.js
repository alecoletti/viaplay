const { event } = require('../data/event')
const fetcher = require('../../src/trailerFetcher')

// TODO: write real tests and fix coverage
// TODO: Mock requests to AWS in order to test locally
describe('happy case', () => {
  it('Should return a 200 with valid trailers', async () => {
    const res = await fetcher.handler(event)
    const parsedBody = JSON.parse(res.body)

    expect(res.statusCode).toBe(200)
    expect(parsedBody.trailers.length).toBe(2)
  })

  it('should return a 404 when requesting a non existing movie', async () => {
    const request = {
      ...event,
      queryStringParameters: {
        movie: 'nonexistingmovie',
      },
    }

    const res = await fetcher.handler(request)
    expect(res.statusCode).toBe(404)
  })
})
