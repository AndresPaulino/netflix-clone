// const APIKEY = process.env.REACT_APP_API_KEY;
const APIKEY = '7e8e5108a1f4ea116d38324307a09ff4';
const URL = 'https://api.themoviedb.org/3/';

const requests = {
  fetchTrending: `${URL}trending/movie/week?api_key=${APIKEY}&language=en-US`,
  fetchNetflixOriginals: `${URL}discover/tv?api_key=${APIKEY}&with_networks=213`,
  fetchTopRated: `${URL}movie/top_rated?api_key=${APIKEY}&language=en-US`,
  fetchActionMovies: `${URL}discover/movie?api_key=${APIKEY}&with_genres=28`,
  fetchComedyMovies: `${URL}discover/movie?api_key=${APIKEY}&with_genres=35`,
  fetchHorrorMovies: `${URL}discover/movie?api_key=${APIKEY}&with_genres=27`,
  fetchRomanceMovies: `${URL}discover/movie?api_key=${APIKEY}&with_genres=10749`,
  fetchDocumentaries: `${URL}discover/movie?api_key=${APIKEY}&with_genres=99`,
  fetchScienceFiction: `${URL}discover/movie?api_key=${APIKEY}&with_genres=878`,
};

export default requests;
