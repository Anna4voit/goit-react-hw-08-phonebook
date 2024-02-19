import { useState, useId } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { signup } from '../../redux/auth/auth-operations';
import css from './RegisterForm.module.css';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
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

    const data = { name, email, password };

    dispatch(signup({ ...data }));

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form className={css.regForm} onSubmit={handleSubmit}>
      <div className={css.label}>
        <label htmlFor={nameId}>Name</label>
        <input
          type="text"
          value={name}
          name="name"
          onChange={handleChange}
          required
          placeholder="Name"
          id={nameId}
          minLength={3}
          autoFocus
        ></input>
      </div>
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
      <button type="submit">Register</button>
      <p className={css.text}>
        Already registered? Sign in{' '}
        <NavLink className={css.link} to="/login">
          Login
        </NavLink>
      </p>
    </form>
  );
};

export default RegisterForm;
