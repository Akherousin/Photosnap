import Button from '../Button';
import Logo from '../Logo';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <header role="banner" aria-label="Site header" className="header">
      <div className="container">
        <Logo />
        <nav role="navigation" aria-label="Main navigation">
          <ul>
            <li>
              <Link to="/stories">Stories</Link>
            </li>
            <li>
              <Link to="/features">Features</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
          </ul>
        </nav>
        <Button>Get an invite</Button>
      </div>
    </header>
  );
}

export default Header;
