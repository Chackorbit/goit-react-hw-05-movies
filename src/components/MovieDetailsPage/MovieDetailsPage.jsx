import { useParams, NavLink, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Cast from 'components/Cast/Cast';

export default function MovieDetailsPage(props) {
  // const match = useRoutes();
  // console.log(match);
  const { movieId } = useParams();
  const [detailsFilm, setDetailsFilm] = useState([]);
  const [imgBaseUrl, setImgBaseUrl] = useState(
    'https://image.tmdb.org/t/p/w500'
  );

  useEffect(() => {
    const fetchDetailsMovie = async () => {
      const BASE_URL = 'https://api.themoviedb.org/3/';
      const key = '39268a7cf0f5a62bddedb30e59a8c087';

      const meta = new URLSearchParams({
        api_key: key,
      });
      // console.log(movieId);

      const url = `${BASE_URL}movie/${movieId}?${meta}&append_to_response=credits`;

      const fetchMovie = await fetch(url);
      const r = await fetchMovie.json();
      console.log(r);
      return setDetailsFilm(r);
    };
    fetchDetailsMovie();
  }, [movieId]);

  // console.log(window.location.pathname);
  return (
    <div>
      <img src={imgBaseUrl + detailsFilm.poster_path} alt="" />
      <h1>{detailsFilm.title || detailsFilm.name}</h1>
      {detailsFilm.genres && (
        <p>Жанры: {detailsFilm.genres.map(genre => genre.name + ', ')} </p>
      )}

      <p>{detailsFilm.overview}</p>
      <p>Дата выхода: {detailsFilm.release_date}</p>
      <br />
      <NavLink to="cast">Актеры</NavLink>
      <br />
      <Routes>
        <Route path="cast" element={<Cast credits={detailsFilm.credits} />} />
      </Routes>
      <p>...</p>

      {/* <p>Актеры: </p> */}
      {/* {detailsFilm.credits && detailsFilm.credits.cast.map(actor => <li></li>)} */}
      {/* <Cast /> */}
    </div>
  );
}
