import { useSelector } from 'react-redux';
import { selectIsLogin } from '../../redux/auth/auth-selectors';
import NavbarMenu from './NavbarMenu/NavbarMenu';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';
import css from './Navbar.module.css';

const Navbar = () => {
  const isLogin = useSelector(selectIsLogin);

  return (
    <div>
      <div className={css.navbar}>
        <NavbarMenu />
        {!isLogin ? <NavbarAuth /> : <NavbarUser />}
      </div>
      {/* <div className={css.navbarUser}> {isLogin && <NavbarUser />}</div> */}
    </div>
  );
};

export default Navbar;
