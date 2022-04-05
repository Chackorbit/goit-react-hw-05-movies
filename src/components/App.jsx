// import { useState, useEffect } from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
// import Loader from './Loader/Loader';
// import HomePage from './HomePage/HomePage';
// import MoviePage from './MoviesPage/MoviePage';
// import MovieDetailsPage from './MovieDetailsPage/MovieDetailsPage';
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';
import '../index.css';
import { Suspense } from 'react-is';

const HomePage = lazy(() => import('./HomePage/HomePage'));
const MoviePage = lazy(() => import('./MoviesPage/MoviePage'));
const MovieDetailsPage = lazy(() =>
  import('./MovieDetailsPage/MovieDetailsPage')
);
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

// /trending/get-trending
// /search/search-movies
// /movies/get-movie-details
// /movies/get-movie-credits
// /movies/get-movie-reviews

const App = () => {
  return (
    <div>
      <AppBar />

      <Suspense fallback={<h1>LOADING...</h1>}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />

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
