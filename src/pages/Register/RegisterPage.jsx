import { useSelector } from 'react-redux';
import css from './RegisterPage.module.css';

import 'react-toastify/dist/ReactToastify.css';

import RegisterForm from 'components/RegisterForm/RegisterForm';
import { selectAuthLoading } from '../../redux/auth/auth-selectors';
import Loader from 'components/Loader/Loader';

const RegisterPage = () => {
  const authLoading = useSelector(selectAuthLoading);

  return (
    <main>
      <div className={css.box_regForm}>
        <h1 className={css.title}>Registration</h1>
        {authLoading && <Loader />}
        <RegisterForm />
      </div>
    </main>
  );
};

export default RegisterPage;
