import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '../Common/Footer/Footer';
import { Header } from '../Common/Header/Header';

const Layout: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
