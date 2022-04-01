import { useState, useEffect } from 'react';
import { Route, Routes, Switch } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import HomePage from './HomePage/HomePage';
import MoviePage from './MoviesPage/MoviePage';
import MovieDetailsPage from './MovieDetailsPage/MovieDetailsPage';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import '../index.css';

// const useLocalStorage = (key, defaultValue) => {
//   const [state, setState] = useState(() => {
//     return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
//   });

//   useEffect(() => {
//     window.localStorage.setItem(key, JSON.stringify(state));
//   }, [key, state]);

//   return [state, setState];
// };

// /trending/get-trending
// /search/search-movies
// /movies/get-movie-details
// /movies/get-movie-credits
// /movies/get-movie-reviews

export default function App() {
  return (
    <div>
      <AppBar />

      {/* <Switch> */}
      <Routes>
        <Route exact path="/" element={<HomePage />} />

        <Route exact path="/movies" element={<MoviePage />} />

        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />

        {/* <Route path="/movies/:movieId/cast" exact>
          <Cast />
        </Route> */}

        {/* <Route path="/movies/:movieId/reviews" exact>
          <Reviews />
        </Route> */}
      </Routes>
      {/* </Switch> */}
    </div>
  );
}
