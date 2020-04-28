#ViaPlayTrailerFetcher

The trialer fetcher takes a movie URL as an argument and will try to fetch information about the available trailers for it. In case success it will answer with an array of trailers, otherwise it will just return an 404 
status code with an error message.

Example: 

GET `https://mocbw8de27.execute-api.eu-west-1.amazonaws.com/dev/get-trailer?movie=http://content.viaplay.se/pc-se/film/fargo-1996`

	{
	   "movieUrl":"http://content.viaplay.se/pc-se/film/fargo-1996",
	   "trailers":[
	      {
	         "id":"533ec653c3a3685448000242",
	         "iso_639_1":"en",
	         "iso_3166_1":"US",
	         "key":"h2tY82z3xXU",
	         "name":"Fargo Official Trailer #1 - Steve Buscemi Movie (1996) HD",
	         "site":"YouTube",
	         "size":1080,
	         "type":"Trailer"
	      },
	      {
	         "id":"5c7f3d94c3a3684e9bd3165f",
	         "iso_639_1":"en",
	         "iso_3166_1":"US",
	         "key":"oJsRRVXNj4M",
	         "name":"Fargo (1996) | THROWBACK TRAILER",
	         "site":"YouTube",
	         "size":720,
	         "type":"Trailer"
	      }
	   ]
	}
