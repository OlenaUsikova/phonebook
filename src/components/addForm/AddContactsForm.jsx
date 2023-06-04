// import PropTypes from 'prop-types'
import {Button, StyledForm, StyledInput, StyledTitle} from '../addForm/AddForm.styled'
import {useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'Redux/Contacts/operations';
import { selectContacts } from 'Redux/Contacts/selectors';


export const AddContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
   const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ( ev ) => {
    const{name, value} = ev.target;
    if(name === "name"){setName(value)}
    if(name === "number"){setNumber(value)}
       };
  const handleSubmit = ev => {
    ev.preventDefault();
    if (contacts.find(item => item.name === name)) {
      return alert(`Name ${name} is already in contacts!`);
    }
    dispatch(addContact({name, number}));
    setName('');
    setNumber('');
  };
      return (
      <StyledForm onSubmit={handleSubmit}>
        <StyledTitle>Add new contact</StyledTitle>
        <label>
          Name<br/>
          <StyledInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}/>
        </label>
        <label>
          Number<br/>
          <StyledInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </label>
        <Button> Add contact</Button>
      </StyledForm>
    );
  };

// AddContactForm.propTypes = {
//   addContact: PropTypes.func
//     }


