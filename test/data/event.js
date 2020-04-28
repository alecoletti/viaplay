module.exports.event = {
  resource: '/{proxy+}',
  path: '/get-trailer',
  httpMethod: 'GET',
  isBase64Encoded: true,
  queryStringParameters: {
    movie: 'http://content.viaplay.se/pc-se/film/fargo-1996',
  },
}
