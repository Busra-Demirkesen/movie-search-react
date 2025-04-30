const API_KEY = "3dc212e8a0bd637c80f92fe3220358b3";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () =>{
    const response = await fetch(`{BASE_URL}/movie/popular?api_key=${API_KEY}`);
}