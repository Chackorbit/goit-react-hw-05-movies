import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';

import {
  FilmContainer,
  FilmsItem,
  FilmsList,
  FilmTitle,
} from './HomePage.styled';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [imgBaseUrl, setImgBaseUrl] = useState(
    'https://image.tmdb.org/t/p/w300'
  );

  const [showModal, setShowModal] = useState(false);
  const [modalFilm, setModalFilm] = useState([]);

  const openModal = e => {
    setShowModal(true);
    // console.log(e.target);
    // console.log(e.currentTarget);

    if (e.currentTarget.id) {
      // eslint-disable-next-line eqeqeq
      const currentFilmPage = movies.find(el => el.id == e.currentTarget.id);
      // console.log(currentFilmPage);
      setModalFilm(currentFilmPage);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setModalFilm([]);
  };

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

  //   getMovies();

  return (
    <FilmContainer>
      <FilmsList>
        {movies.map(movie => {
          return (
            <FilmsItem key={movie.id} id={movie.id} onClick={openModal}>
              <Link to={`movies/${movie.id}`}>
                <img src={imgBaseUrl + movie.poster_path} alt=""></img>
                <FilmTitle>{movie.name ?? movie.title} </FilmTitle>
                <p>{movie.overview}</p>
              </Link>
            </FilmsItem>
          );
        })}
      </FilmsList>

      {/* {showModal && (
        <Modal onClose={closeModal}>
          <div>
            <img src={imgBaseUrl + modalFilm.poster_path} alt="" />
            <FilmTitle>{}</FilmTitle>
          </div>
        </Modal>
      )} */}
    </FilmContainer>
  );
}
