import { ContactsList } from 'components/contactsList/ContactsList';
import { FindContactForm } from 'components/findContact/FindContactForm';
import { AddContactForm } from 'components/addForm/AddContactsForm';
import { useEffect } from 'react';
import { StyledSection } from './UserPage.styled';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'Redux/Contacts/operations';

export const ContactsPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = `phonebook  ${
      location.pathname.slice(1).toUpperCase() || 'home'.toUpperCase()
    }`;
  }, [location]);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <StyledSection>
      <div>
        <FindContactForm />
        <AddContactForm />
      </div>
      <ContactsList />
    </StyledSection>
  );
};
