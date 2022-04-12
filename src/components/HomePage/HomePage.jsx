import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import {
  FilmContainer,
  FilmsItem,
  FilmsList,
  FilmTitle,
} from './HomePage.styled';
import { getMovies } from '../Requests/Requests';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  const imgBaseUrl = 'https://image.tmdb.org/t/p/w300';

  useEffect(() => {
    getMovies().then(r => setMovies(r));
  }, []);

  // console.log(location);
  return (
    <FilmContainer>
      <FilmsList>
        {movies.map(movie => {
          return (
            <Link
              to={`movies/${movie.id}`}
              state={{ from: location }}
              key={movie.id}
            >
              <FilmsItem id={movie.id}>
                <img src={imgBaseUrl + movie.poster_path} alt=""></img>
                <FilmTitle>{movie.name ?? movie.title} </FilmTitle>
                <p>{movie.overview}</p>
              </FilmsItem>
            </Link>
          );
        })}
      </FilmsList>
    </FilmContainer>
  );
}
