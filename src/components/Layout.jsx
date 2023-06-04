import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavigationBar } from './NavBar/NavigationBar';

const Layout = () => {
  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <main
        style={{
          backgroundImage:
            'url("https://cdn.pixabay.com/photo/2018/01/03/09/09/book-3057904_960_720.png")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: '100%',
          height: '100vh',
          // backgroundSize: '960px 720px',
          marginTop: -10,
        }}
      >
        <Suspense fallback={<h2>Loading.....</h2>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
export default Layout;
