const api = require('lambda-api')
const getMovie = require('./viaplayClient').getMovie()


api.get('/getTrailer', async (req, res) => {
  console.log('requesting movie: ', req.params.movie)
  const movie = await fetchMovieTrailer(req.params.movie)
  res.send(movie)
})

exports.handler = async (event, context) => api.run(event, context)


const fetchMovieTrailer = async (movieUrl) => {
  // TODO: fetch movie metadata from viaPlay
  // TODO: fetch trailer from movie db

  try {
    const movie = await getMovie(movieUrl)
    // Todo: Axios call to Movie DB


    if (!movieUrl) {
      return false
    }

    return {
      movie: 'Fargo',
      trailerUrl: 'http://youtube.com',
    }
  } catch (e) {
    console.log('something went wrong', e.message)

    return false
  }
}
