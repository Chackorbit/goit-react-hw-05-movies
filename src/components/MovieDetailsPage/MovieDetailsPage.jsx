import { useParams } from 'react-router-dom';

export default function MovieDetailsPage() {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <p>Что-то</p>
    </div>
  );
}