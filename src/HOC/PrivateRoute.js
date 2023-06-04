import { selectIsOnline } from 'Redux/Contacts/selectors.js';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom'

export const PrivateRoute = ({ children }) => {
	const location = useLocation();
    const isOnline = useSelector(selectIsOnline)

	if (!isOnline) {
		return <Navigate to='/login' state={{ from: location }} />
	}

	return children
}