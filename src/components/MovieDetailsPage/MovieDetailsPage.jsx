import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function MovieDetailsPage() {
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
      console.log(movieId);

      const url = `${BASE_URL}movie/${movieId}?${meta}`;

      const fetchMovie = await fetch(url);
      const r = await fetchMovie.json();
      console.log(r);
      return setDetailsFilm(r);
    };
    fetchDetailsMovie();
  }, [movieId]);

  return (
    <div>
      <img src={imgBaseUrl + detailsFilm.poster_path} alt="" />
      <h1>{detailsFilm.title || detailsFilm.name}</h1>
      {detailsFilm.genres && (
        <p>Жанры: {detailsFilm.genres.map(genre => genre.name + ', ')} </p>
      )}

      <p>{detailsFilm.overview}</p>
      <p>Дата выхода: {detailsFilm.release_date}</p>
    </div>
  );
}
