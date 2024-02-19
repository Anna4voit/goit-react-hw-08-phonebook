import { NavLink } from 'react-router-dom';
import css from './NavbarAuth.module.css';

const NavbarAuth = () => {
  return (
    <div className={css.navbarAuth}>
      <NavLink className={css.link} to="/register">
        Register
      </NavLink>
      |
      <NavLink className={css.link} to="/login">
        Login
      </NavLink>
    </div>
  );
};

export default NavbarAuth;
