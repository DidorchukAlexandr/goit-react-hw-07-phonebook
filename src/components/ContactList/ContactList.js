import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/selectors';
import { fetchContacts, deleteContact } from 'redux/operations';
import { useEffect } from 'react';
import { Oval } from 'react-loader-spinner';
import { ContactsList, ListItem, Button } from './ContactList.styled';

export default function ContactList() {
  const filter = useSelector(selectFilter);
  const { contacts, isLoading, error } = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ContactsList>
      {isLoading && (
        <Oval
          height={80}
          width={80}
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      )}
      {error && <p>{error}</p>}
      {contacts.length > 0 &&
        filteredContacts.map(({ id, name, phone }) => (
          <ListItem key={id}>
            <p>
              {name}: {phone}
            </p>
            <Button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </Button>
          </ListItem>
        ))}
    </ContactsList>
  );
}
