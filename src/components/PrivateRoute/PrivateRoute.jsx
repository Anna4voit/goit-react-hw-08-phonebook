import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

import { selectIsLogin, selectToken } from '../../redux/auth/auth-selectors';

const PrivateRoute = () => {
  const isLogin = useSelector(selectIsLogin);
  const token = useSelector(selectToken);

  if (!isLogin && token) {
    return <Loader />;
  }

  if (!isLogin && !token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
