import SuperHeader from '../SuperHeader';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';
import SkipLink from '../SkipLink';

function Layout() {
  return (
    <>
      <SkipLink href="#main">Skip to Main Content</SkipLink>

      <SuperHeader />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
