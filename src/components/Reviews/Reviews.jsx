// import { useParams } from 'react-router-dom';
import DefaultPhoto from 'img/instagram-g6f508c30b_640.png';

export default function Cast({ reviews }) {
  //   const { movieId } = useParams();
  const actorPhoto = 'https://image.tmdb.org/t/p/w200';

  return (
    <>
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '1200px',
          gap: '25px',
        }}
      >
        {reviews.results.length > 0 ? (
          reviews.results.map(review => {
            return (
              <li key={review.id}>
                <p>{review.author}</p>
                <p>{review.content}</p>
              </li>
            );
          })
        ) : (
          <p>There is not reviews</p>
        )}
      </ul>
    </>
  );
}
