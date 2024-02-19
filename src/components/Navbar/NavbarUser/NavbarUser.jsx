import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../../redux/auth/auth-selectors';
import { logout } from '../../../redux/auth/auth-operations';
import css from './NavbarUser.module.css';

const NavbarUser = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const onLogout = () => dispatch(logout());
  return (
    <div className={css.navbarUser}>
      <p className={css.text}>Welcome, {user.name}</p>
      <button className={css.btn} onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};
export default NavbarUser;
