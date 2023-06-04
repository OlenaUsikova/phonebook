import { useDispatch, useSelector } from 'react-redux'
import { logoutThunk } from 'Redux/Auth/authOperations';
import { selectUser } from 'Redux/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { email } = useSelector(selectUser);
  return ( email && <div>
        <h3>My profile: {email}</h3>
        <button onClick={() => dispatch(logoutThunk())}>Logout</button>
      </div>
  );
};
