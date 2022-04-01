import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">Главная</NavLink>

      <NavLink to="/movies">Search Films</NavLink>

      <NavLink to="/movies/:movieId"></NavLink>

      {/* <NavLink to="/movies/:movieId/cast"></NavLink> */}

      {/* <NavLink to="/movies/:movieId/reviews"></NavLink> */}
    </nav>
  );
};

export default Navigation;
