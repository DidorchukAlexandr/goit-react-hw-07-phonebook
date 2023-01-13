import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import { Form, Label, InputContact, Button } from './FormContacts.styled';

export default function FormContacts() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const { contacts } = useSelector(selectContacts);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        return;
    }
  };

  const resetForm = () => {
    setName('');
    setPhone('');
  };

  const handleAddContact = e => {
    e.preventDefault();
    let test = true;
    contacts.forEach(elm => {
      if (elm.name === name) {
        alert('This name is taken!');
        test = false;
      }
    });
    if (test) {
      dispatch(addContact({ name, phone }));
      resetForm();
    }
  };

  return (
    <Form onSubmit={handleAddContact}>
      <Label htmlFor="name">
        Name
        <InputContact
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          autoComplete="off"
          placeholder="Enter contact name"
        />
      </Label>
      <Label htmlFor="number">
        Number
        <InputContact
          value={phone}
          onChange={handleChange}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          autoComplete="off"
          placeholder="000-000-000"
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
}
