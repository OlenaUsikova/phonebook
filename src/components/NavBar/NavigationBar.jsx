import { logoutThunk } from 'Redux/Auth/authOperations';
import { selectIsOnline, selectUser } from 'Redux/Contacts/selectors';
import {
  Button,
  StyledNav,
  StyledNavLink,
  StyledProfile,
  StyledUserInfo,
} from 'components/NavBar/Navigation.styled';
import { useDispatch, useSelector } from 'react-redux';

export const NavigationBar = () => {
  const onLine = useSelector(selectIsOnline);
  const { email } = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <StyledNav>
      <div>
        <StyledNavLink to="/">Home</StyledNavLink>
        {onLine && <StyledNavLink to="contacts">Contacts</StyledNavLink>}
      </div>
      {!onLine ? (
        <div>
          <StyledNavLink to="login">Login</StyledNavLink>
          <StyledNavLink to="registration">Registration</StyledNavLink>
        </div>
      ) : (
        email && (
          <StyledUserInfo>
            <StyledProfile>My profile: {email}</StyledProfile>
            <Button onClick={() => dispatch(logoutThunk())}>Logout</Button>
          </StyledUserInfo>
        )
      )}
    </StyledNav>
  );
};
