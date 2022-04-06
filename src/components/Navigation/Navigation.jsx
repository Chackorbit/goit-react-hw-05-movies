import { NavLink } from 'react-router-dom';
import { Nav } from './Navigation.styled';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <Nav>
      <NavLink
        className={navData => (navData.isActive ? s.linkActiv : s.link)}
        to="/goit-react-hw-05-movies"
      >
        Главная
      </NavLink>

      <NavLink
        className={navData => (navData.isActive ? s.linkActiv : s.link)}
        to="/movies"
      >
        Search Films
      </NavLink>
    </Nav>
  );
};

export default Navigation;
