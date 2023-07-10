import SuperHeader from '../SuperHeader';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <SuperHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
