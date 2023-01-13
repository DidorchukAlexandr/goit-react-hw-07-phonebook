import { useSelector } from "react-redux";
import { selectContacts } from "redux/selectors";
import ContactList from "./ContactList/ContactList";
import FilterContacts from "./FilterContacts/FilterContacts";
import FormContacts from "./FormContacts/FormContacts";
import { GlobalBox } from './App.styled';

export default function App() {
const { contacts } = useSelector(selectContacts)

  return (
      <GlobalBox>
      <h1>Phoneboock</h1>
      <FormContacts />
      <h2>Contacts</h2>
      {contacts.length > 0 && <FilterContacts />}
      <ContactList />
    </GlobalBox>
  );
};
