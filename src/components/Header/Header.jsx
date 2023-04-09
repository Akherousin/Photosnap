import Button from '../Button';
import Logo from '../Logo';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

function Header() {
  return (
    <header role="banner" aria-label="Site header" className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <nav
          role="navigation"
          aria-label="Main navigation"
          className={styles.nav}
        >
          <ul className={styles.nav__list}>
            <li>
              <Link to="/stories" className={styles.nav__link}>
                Stories
              </Link>
            </li>
            <li>
              <Link to="/features" className={styles.nav__link}>
                Features
              </Link>
            </li>
            <li>
              <Link to="/pricing" className={styles.nav__link}>
                Pricing
              </Link>
            </li>
          </ul>
        </nav>
        <Button>Get an invite</Button>
      </div>
    </header>
  );
}

export default Header;
