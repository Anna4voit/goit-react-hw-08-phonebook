import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLogin } from '../../../redux/auth/auth-selectors';
// import itemsMenu from './itemsMenu';
import css from './NavbarMenu.module.css';

const NavbarMenu = () => {
  const isLogin = useSelector(selectIsLogin);
  // const filteredMenuItems = !isLogin
  //   ? itemsMenu.filter(item => !item.private)
  //   : itemsMenu;
  // const element = filteredMenuItems.map(({ id, to, text }) => (
  //   <li key={id}>
  //     <NavLink className={css.link} to={to}>
  //       {text}
  //     </NavLink>
  //   </li>
  // ));
  return (
    // <ul className={css.memu}>{element}</ul>
    <div className={css.memu}>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>

      {isLogin && (
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </div>
  );
};

export default NavbarMenu;
