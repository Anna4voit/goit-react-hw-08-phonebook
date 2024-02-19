import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { selectError, selectIsLoading } from '../../redux/selectors';
import { fetchContacts } from '../../redux/contacts-operations';
import Loader from 'components/Loader/Loader';

import css from './Contacts.module.css';

const Contacts = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.box}>
      <div>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
      </div>
      <div className={css.boxContacts}>
        <h2 className={css.subtitle}>Contacts</h2>
        <Filter />
        {loading && <Loader />}
        {error && <p>{error}</p>}
        <ContactList />
      </div>
    </div>
  );
};

export default Contacts;
