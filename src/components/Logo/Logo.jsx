import logo from '../../assets/shared/desktop/logo.svg';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/" aria-label="Photosnap">
      <img src={logo} alt="photosnap logo" />
    </Link>
  );
}

export default Logo;
