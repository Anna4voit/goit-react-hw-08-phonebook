import { useSelector } from 'react-redux';
import css from './RegisterPage.module.css';

import RegisterForm from 'components/RegisterForm/RegisterForm';
import {
  selectAuthLoading,
  selectAuthError,
} from '../../redux/auth/auth-selectors';
import Loader from 'components/Loader/Loader';

const RegisterPage = () => {
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);

  return (
    <main>
      <div className={css.box_regForm}>
        <h1 className={css.title}>Registration</h1>
        {authLoading && <Loader />}
        <RegisterForm />
        {authError === 500 && <p>500 Internal Server Error</p>}
        {authError === 400 && <p>Bad Request Authentication</p>}
      </div>
    </main>
  );
};

export default RegisterPage;
