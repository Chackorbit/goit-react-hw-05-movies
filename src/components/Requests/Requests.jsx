export async function fetchDetailsMovie(movieId) {
  const BASE_URL = 'https://api.themoviedb.org/3/';
  const key = '39268a7cf0f5a62bddedb30e59a8c087';

  const meta = new URLSearchParams({
    api_key: key,
  });

  const url = `${BASE_URL}movie/${movieId}?${meta}&append_to_response=credits,reviews`;

  const fetchMovie = await fetch(url);
  const r = await fetchMovie.json();

  return r;
}

export async function searchQueryMovie(searchQuery, search) {
  const BASE_URL = 'https://api.themoviedb.org/3/';
  const key = '39268a7cf0f5a62bddedb30e59a8c087';
  //   console.log(searchQuery);
  //   console.log(search);

  //   const searchQuery = searchParams.get('query');
  if (!searchQuery) return;

  const query = new URLSearchParams(search).get('query') ?? '';

  const meta = new URLSearchParams({
    api_key: key,
    query,
    page: 1,
    include_adult: false,
  });

  const url = `${BASE_URL}search/movie?${meta}`;

  const fetchQueryMovie = await fetch(url);
  const r = await fetchQueryMovie.json();

  return r;
}

export const getMovies = async () => {
  const BASE_URL = 'https://api.themoviedb.org/3/';
  const key = '39268a7cf0f5a62bddedb30e59a8c087';

  const meta = new URLSearchParams({
    api_key: key,
    page: 1,
  });
  const url = `${BASE_URL}trending/all/day?${meta}`;

  const fetchPopularMovie = await fetch(url);
  const r = await fetchPopularMovie.json();
  // console.log(r.results);

  return r.results;
};

// export default (fetchDetailsMovie, searchQueryMovie);
