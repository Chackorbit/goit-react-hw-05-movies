import { NavLink } from 'react-router-dom';
import { Nav } from './Navigation.styled';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <Nav>
      <NavLink
        className={navData => (navData.isActive ? s.linkActiv : s.link)}
        to="/"
      >
        Главная
      </NavLink>

      <NavLink
        className={navData => (navData.isActive ? s.linkActiv : s.link)}
        to="/movies"
      >
        Search Films
      </NavLink>

      {/* <NavLink to="/movies/:movieId"></NavLink> */}

      {/* <NavLink to="/movies/:movieId/cast"></NavLink> */}

      {/* <NavLink to="/movies/:movieId/reviews"></NavLink> */}
    </Nav>
  );
};

export default Navigation;
