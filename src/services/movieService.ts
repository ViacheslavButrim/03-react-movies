import axios from "axios";
import type { Movie } from "../types/movie";

interface MoviesResponse {
  results: Movie[];
}

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
});

export async function fetchMovies(query: string): Promise<Movie[]> {
  const response = await api.get<MoviesResponse>("/search/movie", {
    params: {
      query,
      language: "en-US",
      include_adult: false,
    },
  });

  return response.data.results;
}