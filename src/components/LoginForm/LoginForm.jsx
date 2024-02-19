import { useState, useId } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { login } from '../../redux/auth/auth-operations';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailId = useId();
  const passwordId = useId();

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const data = { email, password };

    dispatch(login({ ...data }));

    setEmail('');
    setPassword('');
  };

  return (
    <form className={css.logForm} onSubmit={handleSubmit}>
      <div className={css.label}>
        <label htmlFor={emailId}>Email</label>
        <input
          type="email"
          value={email}
          name="email"
          onChange={handleChange}
          required
          placeholder="Email"
          id={emailId}
          autoFocus
        ></input>
      </div>
      <div className={css.label}>
        <label htmlFor={passwordId}>Password</label>
        <input
          type="password"
          value={password}
          name="password"
          onChange={handleChange}
          required
          placeholder="Password"
          id={passwordId}
          minLength={7}
        ></input>
      </div>
      <button type="submit">Sign In</button>
      <p className={css.text}>
        Don't have an account?{' '}
        <NavLink className={css.link} to="/register">
          Register
        </NavLink>
      </p>
    </form>
  );
};

export default LoginForm;
