const api = require('lambda-api')()
const client = require('./viaplayClient')

const fetchMovieTrailers = async (movieUrl) => {
  let imdbID
  try {
    // fetch data from viaPlay servers
    const movie = await client.getMovie(movieUrl)
    imdbID = movie.data['_embedded']['viaplay:blocks'][0]['_embedded']['viaplay:product'].content.imdb.id
  } catch (e) {
    console.log('something went wrong', { message: e.message }, 'fetchMovieTrailers')
    throw e
  }

  // fetch data from The Movie DB and return
  return client.findByImdbID(imdbID)
}

api.get('/get-trailer', async (req, res) => {
  try {
    const movieUrl = req.query.movie
    console.log('requesting movie: ', movieUrl)
    const trailers = await fetchMovieTrailers(movieUrl)

    return {
      movieUrl,
      trailers,
    }
  } catch (e) {
    // TODO: fix better error handling and status codes
    // Return always 404
    res.send({ message: 'We could not find the movie your are looking for' }).status(404)
  }

  return as
})

exports.handler = async (event) => api.run(event)
