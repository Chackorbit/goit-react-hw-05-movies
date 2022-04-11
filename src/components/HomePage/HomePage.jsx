import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import {
  FilmContainer,
  FilmsItem,
  FilmsList,
  FilmTitle,
} from './HomePage.styled';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  const imgBaseUrl = 'https://image.tmdb.org/t/p/w300';

  const getMovies = async () => {
    const BASE_URL = 'https://api.themoviedb.org/3/';
    const key = '39268a7cf0f5a62bddedb30e59a8c087';

    const meta = new URLSearchParams({
      api_key: key,
      page: 1,
    });
    const url = `${BASE_URL}trending/all/day?${meta}`;

    const fetchPopularMovie = await fetch(url);
    const r = await fetchPopularMovie.json();
    console.log(r.results);

    return setMovies(r.results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log(location);
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
