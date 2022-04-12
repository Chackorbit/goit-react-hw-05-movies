import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import {
  FilmContainer,
  FilmsItem,
  FilmsList,
  FilmTitle,
} from '../HomePage/HomePage.styled';

import s from './MoviePage.module.css';
import Poster from 'img/instagram-g6f508c30b_640.png';
import { FcSearch } from 'react-icons/fc';
import { searchQueryMovie } from '../Requests/Requests';

export default function MoviePage() {
  // eslint-disable-next-line no-unused-vars
  const [query, setQuery] = useState('');
  const [foundMovie, setFoundMovie] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const imgBaseUrl = 'https://image.tmdb.org/t/p/w300';

  // useEffect(() => {
  //   const searchQuery = searchParams.get('query');
  //   if (!searchQuery || searchQuery === '') return;

  //   const searchQueryMovie = async () => {
  //     const BASE_URL = 'https://api.themoviedb.org/3/';
  //     const key = '39268a7cf0f5a62bddedb30e59a8c087';

  //     const query = new URLSearchParams(location.search).get('query') ?? '';

  //     const meta = new URLSearchParams({
  //       api_key: key,
  //       query,
  //       page: 1,
  //       include_adult: false,
  //     });

  //     const url = `${BASE_URL}search/movie?${meta}`;

  //     const fetchQueryMovie = await fetch(url);
  //     const r = await fetchQueryMovie.json();

  //     return setFoundMovie(r);
  //   };

  //   searchQueryMovie();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [query, searchParams, setSearchParams]);

  const saveQuery = e => {
    setQuery(e.target.value);
    if (e.target.value === '') {
      setSearchParams({});
      return;
    }
    setSearchParams({ query: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();

    const search = location.search;

    searchQueryMovie(searchParams, search).then(r => setFoundMovie(r));
  };

  useEffect(() => {
    if (searchParams.get('query') != null) {
      const searchQuery = searchParams.get('query');
      const search = location.search;

      searchQueryMovie(searchQuery, search).then(r => setFoundMovie(r));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <form className={s.SearchForm} onSubmit={onSubmit}>
        <button type="submit" className={s.SearchForm_button}>
          <span className={s.button_label}></span>
          <FcSearch />
        </button>

        <input
          value={
            searchParams.get('query') === null ? '' : searchParams.get('query')
          }
          onChange={saveQuery}
          className={s.SearchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search Film"
        />
      </form>

      <FilmContainer>
        <FilmsList>
          {foundMovie.results &&
            foundMovie.results.map(movie => {
              return (
                <Link
                  to={`${movie.id}`}
                  state={{ from: location }}
                  key={movie.id}
                >
                  <FilmsItem id={movie.id}>
                    {movie.poster_path ? (
                      <img src={imgBaseUrl + movie.poster_path} alt=""></img>
                    ) : (
                      <img src={Poster} alt="" width={320} height={450}></img>
                    )}
                    <FilmTitle>{movie.name ?? movie.title} </FilmTitle>
                    <p>{movie.overview}</p>
                  </FilmsItem>
                </Link>
              );
            })}
        </FilmsList>
      </FilmContainer>
    </div>
  );
}
