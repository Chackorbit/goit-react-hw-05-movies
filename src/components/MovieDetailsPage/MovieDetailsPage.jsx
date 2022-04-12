import {
  useParams,
  NavLink,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import GoBackBtn from '../GoBackBtn/GoBackBtn';
import { fetchDetailsMovie } from '../Requests/Requests';
export default function MovieDetailsPage(props) {
  const { movieId } = useParams();
  const [detailsFilm, setDetailsFilm] = useState([]);

  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';
  const location = useLocation();

  useEffect(() => {
    fetchDetailsMovie(movieId).then(r => setDetailsFilm(r));
  }, [movieId]);

  return (
    <>
      <GoBackBtn location={location}></GoBackBtn>
      <div>
        <img src={imgBaseUrl + detailsFilm.poster_path} alt="" />
        <h1>{detailsFilm.title || detailsFilm.name}</h1>
        {detailsFilm.genres && (
          <p>Жанры: {detailsFilm.genres.map(genre => genre.name + ', ')} </p>
        )}

        <p>{detailsFilm.overview}</p>
        <p>Дата выхода: {detailsFilm.release_date}</p>
        <br />
        <NavLink to="cast" state={{ from: location?.state?.from ?? '/' }}>
          Cast{' '}
        </NavLink>
        <NavLink to="reviews" state={{ from: location?.state?.from ?? '/' }}>
          Reviews
        </NavLink>
        <br />

        <Suspense fallback={<h1>LOADING...</h1>}>
          <Routes>
            <Route
              path="cast"
              element={<Cast credits={detailsFilm.credits} />}
            />
            <Route
              path="reviews"
              element={<Reviews reviews={detailsFilm.reviews} />}
            />
          </Routes>
        </Suspense>
        <p>...</p>
      </div>
    </>
  );
}
