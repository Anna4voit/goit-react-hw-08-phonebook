import { useSelector } from 'react-redux';
import css from './LoginPage.module.css';

import LoginForm from 'components/LoginForm/LoginForm';
import { selectAuthLoading } from '../../redux/auth/auth-selectors';
import Loader from 'components/Loader/Loader';

const LoginPage = () => {
  const authLoading = useSelector(selectAuthLoading);

  return (
    <main>
      <div className={css.box_logForm}>
        <h1 className={css.title}>Login</h1>
        {authLoading && <Loader />}
        <LoginForm />
      </div>
    </main>
  );
};

export default LoginPage;
