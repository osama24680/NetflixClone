const API_KEY = "b9bdb09fc05c6f78ab2de960f7cc874e"


const request = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_geners=28`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_geners=35`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_geners=27`,
    fetchRomanticeMovies: `/discover/movie?api_key=${API_KEY}&with_geners=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_geners=99`,
}

export default request






























