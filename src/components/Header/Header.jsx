import Button from '../Button';
import logo from '../../assets/shared/desktop/logo.svg';

function Header() {
  return (
    <header aria-label="Site header">
      <a>
        <img src={logo} alt="photosnap logo" aria-hidden="true" />
      </a>
      <nav role="navigation" aria-label="Main navigation">
        <a>Stories</a>
        <a>Features</a>
        <a>Pricing</a>
      </nav>
      <Button>Get an invite</Button>
    </header>
  );
}

export default Header;
