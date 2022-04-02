import { useState, useEffect } from 'react';
import { Route, Routes, Switch } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import HomePage from './HomePage/HomePage';
import MoviePage from './MoviesPage/MoviePage';
import MovieDetailsPage from './MovieDetailsPage/MovieDetailsPage';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import '../index.css';

// /trending/get-trending
// /search/search-movies
// /movies/get-movie-details
// /movies/get-movie-credits
// /movies/get-movie-reviews

const App = () => {
  return (
    <div>
      <AppBar />

      {/* <Switch> */}
      <Routes>
        <Route exact path="/" element={<HomePage />} />

        <Route exact path="/movies" element={<MoviePage />}></Route>

        <Route exact path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        {/* <Route path="/movies/:movieId/cast" element={<Cast />} /> */}

        {/* <Route exact path="/movies/:movieId/reviews" >
          <Reviews />
        </Route> */}
      </Routes>
      {/* </Switch> */}
    </div>
  );
};
export default App;
