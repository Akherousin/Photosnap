import Button from '../Button';
import Logo from '../Logo';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <nav aria-label="Site" className={styles.nav}>
          <ul className={styles.nav__list}>
            <li>
              <NavLink to="/stories" className={styles.nav__link}>
                Stories
              </NavLink>
            </li>
            <li>
              <NavLink to="/features" className={styles.nav__link}>
                Features
              </NavLink>
            </li>
            <li>
              <NavLink to="/pricing" className={styles.nav__link}>
                Pricing
              </NavLink>
            </li>
          </ul>
        </nav>
        <Button>Get an invite</Button>
      </div>
    </header>
  );
}

export default Header;
