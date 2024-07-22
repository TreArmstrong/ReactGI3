import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const API_KEY = '66ec7939c6891335ec73af1e8517344c'; 

  const searchMovies = async () => {
    if (!query) return;
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    setMovies(data.results || []);
  };

  return (
    <div>
      <h1>Movie Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie..."
      />
      <button onClick={searchMovies}>Search</button>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              {movie.title} ({movie.release_date ? movie.release_date.split('-')[0] : 'N/A'})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieSearch;
