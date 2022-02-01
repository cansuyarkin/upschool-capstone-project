import axios from "axios";

const apiKey = "fa5a5bbe0faf1f1b303f16c093ec0cc6";

const BASE_AXIOS = axios.create({ baseURL: "https://api.themoviedb.org/3/" });

export const fetchSearchMovies = (search) => BASE_AXIOS.get(`search/movie?api_key=${apiKey}&query=${search}`);

export const fetchDiscover = () => BASE_AXIOS.get(`discover/movie?api_key=${apiKey}`);

export const fetchTrending = (time_window) => BASE_AXIOS.get(`trending/movie/${time_window}?api_key=${apiKey}`);

export const fetchDetails = (movieId) => BASE_AXIOS.get(`movie/${movieId}?api_key=${apiKey}`);

export const fetchCredits = (movieId) => BASE_AXIOS.get(`movie/${movieId}/credits?api_key=${apiKey}`);

export const fetchReviews = (movieId) => BASE_AXIOS.get(`movie/${movieId}/reviews?api_key=${apiKey}`);

export const fetchRecommendations = (movieId) => BASE_AXIOS.get(`movie/${movieId}/recommendations?api_key=${apiKey}`);

export const fetchPopular = () => BASE_AXIOS.get(`movie/popular?api_key=${apiKey}`);

export const fetchTopRated = () => BASE_AXIOS.get(`movie/top_rated?api_key=${apiKey}`);

export const fetchGenres = () => BASE_AXIOS.get(`genre/movie/list?api_key=${apiKey}`);