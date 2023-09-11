import Button from '../Button';
import Logo from '../Logo';
// import { NavLink, useLocation } from 'react-router-dom';
import styles from './Header.module.scss';
import NavLinkWithPrev from '../NavLinkWithPrev';

function Header() {
  // const location = useLocation();
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <nav aria-labelledby="nav-label" className={styles.nav}>
          <span id="nav-label" hidden>
            Site
          </span>
          <ul className={styles.nav__list}>
            <li>
              <NavLinkWithPrev
                to="/stories"
                className={`${styles.nav__link} click-target-helper`}
              >
                Stories
              </NavLinkWithPrev>
            </li>
            <li>
              <NavLinkWithPrev
                to="/features"
                className={`${styles.nav__link} click-target-helper`}
              >
                Features
              </NavLinkWithPrev>
            </li>
            <li>
              <NavLinkWithPrev
                to="/pricing"
                className={`${styles.nav__link} click-target-helper`}
              >
                Pricing
              </NavLinkWithPrev>
            </li>
          </ul>
        </nav>
        <Button>Get an invite</Button>
      </div>
    </header>
  );
}

export default Header;
