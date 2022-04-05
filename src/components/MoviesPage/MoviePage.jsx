import { useState } from 'react';
import { Link } from 'react-router-dom';
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
  const [query, setQuery] = useState('');
  const [foundMovie, setFoundMovie] = useState({});
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w300';

  const searchMovie = e => {
    e.preventDefault();

    searchQueryMovie();
  };

  const saveQuery = e => {
    setQuery(e.target.value);
  };

  const searchQueryMovie = async () => {
    const BASE_URL = 'https://api.themoviedb.org/3/';
    const key = '39268a7cf0f5a62bddedb30e59a8c087';

    const meta = new URLSearchParams({
      api_key: key,
      query: query,
      page: 1,
      include_adult: false,
    });

    const url = `${BASE_URL}search/movie?${meta}`;

    const fetchQueryMovie = await fetch(url);
    const r = await fetchQueryMovie.json();
    console.log(r);
    return setFoundMovie(r);
  };

  return (
    <div>
      <form className={s.SearchForm} onSubmit={searchMovie}>
        <button type="submit" className={s.SearchForm_button}>
          <span className={s.button_label}></span>
          <FcSearch />
        </button>

        <input
          onInput={saveQuery}
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
              console.log(movie);
              return (
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
              );
            })}
        </FilmsList>
      </FilmContainer>
    </div>
  );
}
