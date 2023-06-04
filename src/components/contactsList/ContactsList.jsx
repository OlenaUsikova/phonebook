import { Contact } from '../contact/Contact';
import { useSelector } from 'react-redux';
import { selectFilterdData } from 'Redux/Contacts/selectors';
import { StyledBox } from './ContactList.styled';

export const ContactsList = () => {
  const contacts = useSelector(selectFilterdData);
  return   <StyledBox>
      {contacts && contacts.map(contact => {
        return (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </StyledBox>
};
