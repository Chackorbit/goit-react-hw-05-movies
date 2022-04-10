import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  FilmContainer,
  FilmsItem,
  FilmsList,
  FilmTitle,
} from '../HomePage/HomePage.styled';

import s from './MoviePage.module.css';
import Poster from 'img/instagram-g6f508c30b_640.png';
import { FcSearch } from 'react-icons/fc';

export default function MoviePage() {
  // const [query, setQuery] = useState('');
  const [foundMovie, setFoundMovie] = useState({});
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w300';

  // const { pathname, search } = useLocation();
  let [searchParams, setSearchParams] = useSearchParams();

  // console.log(searchParams.get('query' || ''));

  const searchMovie = e => {
    e.preventDefault();

    if (searchParams.get('query' || '') !== null) {
      searchQueryMovie();
    }
    // setSearchParams(`query=${query}`);
  };

  const saveQuery = e => {
    // setQuery(e.target.value);

    let query = e.target.value;
    if (query) {
      setSearchParams({ query });
    } else {
      setSearchParams({});
    }
  };

  const searchQueryMovie = async () => {
    const BASE_URL = 'https://api.themoviedb.org/3/';
    const key = '39268a7cf0f5a62bddedb30e59a8c087';

    const meta = new URLSearchParams({
      api_key: key,
      query: searchParams.get('query' || ''),
      page: 1,
      include_adult: false,
    });

    const url = `${BASE_URL}search/movie?${meta}`;

    const fetchQueryMovie = await fetch(url);
    const r = await fetchQueryMovie.json();
    // console.log(r);
    return setFoundMovie(r);
  };
  useEffect(() => {
    if (searchParams.get('query' || '') !== null) {
      searchQueryMovie();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <form className={s.SearchForm} onSubmit={searchMovie}>
        <button type="submit" className={s.SearchForm_button}>
          <span className={s.button_label}></span>
          <FcSearch />
        </button>

        <input
          value={searchParams.get('query' || '')}
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
                // <Route path={pathname + search}>
                <Link to={`${movie.id}`} key={movie.id}>
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
                ///* </Route> */
              );
            })}
        </FilmsList>
      </FilmContainer>
    </div>
  );
}
