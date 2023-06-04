import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { HomePage } from 'pages/HomePage/HomePage';
import { RegisterPage } from 'pages/Registration/RegistrationPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { ContactsPage } from 'pages/UserPage/ContactsPage';
import { PrivateRoute } from 'HOC/PrivateRoute';
import { PublicRoute } from 'HOC/PublicRoure';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshThunk } from 'Redux/Auth/authOperations';

export const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
		dispatch(refreshThunk())
	}, [dispatch])
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="registration" element={<PublicRoute>
                <RegisterPage />
              </PublicRoute>} />
        <Route path="login" element={<PublicRoute>
                <LoginPage />
              </PublicRoute>} />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path="*"element={<Navigate to= "contacts"/>}/>
    </Routes>
  );
};
