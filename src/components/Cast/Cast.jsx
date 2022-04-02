import { useParams } from 'react-router-dom';
import DefaultPhoto from 'img/instagram-g6f508c30b_640.png';

export default function Cast({ credits }) {
  const { movieId } = useParams();
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
        {credits &&
          credits.cast.map(actor => {
            return (
              <li key={actor.id}>
                {console.log(actor)}
                {actor.profile_path ? (
                  <img src={actorPhoto + actor.profile_path} alt="" />
                ) : (
                  <img src={DefaultPhoto} alt="" width={200} height={300} />
                )}
                <p>{actor.name}</p>
              </li>
            );
          })}
      </ul>
    </>
  );
}
