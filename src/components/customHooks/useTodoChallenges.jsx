import { useState, useEffect } from "react";
import axios from "axios";

export default function useRandomMovie() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRandomMovie();
  }, []);

  const fetchRandomMovie = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY&language=en-US&page=1`
      );

      const randomMovie = response.data.results[Math.floor(Math.random() * response.data.results.length)];
      setMovie(randomMovie);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { movie, loading, error };
}
