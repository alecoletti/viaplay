const axios = require('axios')
const ssm = require('./ssmClient')

module.exports.getMovie = async (url) => axios.get(url)

module.exports.findByImdbID = async (id) => {
  const basePath = 'https://api.themoviedb.org/3'
  const token = '6afbe356413272490d0cc0d3cc9f8dc7'//await ssm.getSecret(process.env.THEMOVIEDB_TOKEN)

  // Find the movie by its Imdb Id in order to fetch its The Movie DB Id
  const metaData = await axios.get(`${basePath}/find/${id}?api_key=${token}&external_source=imdb_id`)
  const movieId = metaData.data.movie_results[0].id

  const response = await axios.get(`${basePath}/movie/${movieId}/videos?api_key=${token}`)
  return response.data.results
}
