import { useNavigate } from 'react-router-dom';

const GoBackBtn = ({ location }) => {
  let navigate = useNavigate();

  // console.log(location);
  return (
    <>
      <button
        type="button"
        onClick={() => {
          navigate(location?.state?.from ?? '/');
        }}
      >
        Go back
      </button>
    </>
  );
};
export default GoBackBtn;
