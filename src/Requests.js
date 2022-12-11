const API_KEY='4283f7284488f5df24e6b6723c41f0a6';

const requests = {
    requestNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    requestTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    requestTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    requestComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    requestActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    requestHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    requestRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    requestDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    requestPopularMovies: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    requestSearchMovie: (keyword) => `/search/movie?api_key=${API_KEY}&query=${keyword}`,
    requestClickedMovie: (movieId) =>`/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos`,
    // requestTrailerURL:(movieIdForTrailer)`/movie/${movieIdForTrailer}/videos?api_key=${API_KEY}`

  };

  export default requests;

  // const updateUser = (payload, userId) => request.put(`users/${userId}`, payload);
//To get the video of trailer
  