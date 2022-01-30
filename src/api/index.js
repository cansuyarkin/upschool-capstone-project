import axios from "axios";

const apiKey = "fa5a5bbe0faf1f1b303f16c093ec0cc6";

const BASE_AXIOS = axios.create({ baseUrl: "https://api.themoviedb.org/3/" });

export const fetchSearchMovies = (search) => BASE_AXIOS.get(`search/movie?api_key=${apiKey}&query=${search}`);



