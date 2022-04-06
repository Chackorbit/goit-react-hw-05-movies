import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppBar from './AppBar/AppBar';

import '../index.css';
import { Suspense } from 'react-is';

const HomePage = lazy(() => import('./HomePage/HomePage'));
const MoviePage = lazy(() => import('./MoviesPage/MoviePage'));
const MovieDetailsPage = lazy(() =>
  import('./MovieDetailsPage/MovieDetailsPage')
);
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

const App = () => {
  return (
    <div>
      <AppBar />

      <Suspense fallback={<h1>LOADING...</h1>}>
        <Routes>
          <Route exact path="/goit-react-hw-05-movies" element={<HomePage />} />

          <Route exact path="/movies" element={<MoviePage />}></Route>

          <Route exact path="/movies/:movieId/*" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
