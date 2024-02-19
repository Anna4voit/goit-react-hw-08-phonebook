import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from 'components/Navbar/Navbar';
import Loader from 'components/Loader/Loader';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <div className={css.box}>
      <div className={css.nav}>
        <Navbar />
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default Layout;
