import React, { useEffect, useState } from 'react';
import axios from './axios';
import './Row.scss';

const baseURL = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <div className='row'>
          <h2>{title}</h2>
          
          <div className='row__posters'>
              {movies.map(movie => (
                  <img className='row__poster' src={`${baseURL}${movie.poster_path}`} alt={movie.name} key={movie.id} />
                ))}
          </div>
    </div>
  );
}

export default Row;
