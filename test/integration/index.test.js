const { event } = require('../data/event')
const fetcher = require('../../src/trailerFetcher')

// TODO: write real tests and fix coverage
// TODO: Mock requests to AWS in order to test locally
describe('happy case', () => {
  it('should parse viaPlay response', async () => {
    const res = await fetcher.handler(event)
    const parsedResponse = JSON.parse(res.body)
    expect(parsedResponse.trailers.length).toBe(2)
  })
})
