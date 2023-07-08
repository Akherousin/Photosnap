import SuperHeader from '../SuperHeader';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <SuperHeader />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
