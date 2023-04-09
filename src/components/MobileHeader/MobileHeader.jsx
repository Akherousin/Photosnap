import Logo from '../Logo/Logo';
import close from '../../assets/shared/mobile/close.svg';
import menu from '../../assets/shared/mobile/menu.svg';
import styles from './MobileHeader.module.scss';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';

function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuBtn = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    if (isMenuOpen) {
      // move focus back to the button
      menuBtn.current.focus();
    } else {
      // move focus to the menu
      menuRef.current.focus();
    }
  };

  return (
    <>
      {isMenuOpen && (
        <div className={styles.overlay} onClick={toggleMenu}></div>
      )}
      <header className={styles.header}>
        <Logo />
        <button
          ref={menuBtn}
          className={`${styles.menu__button} click-target-helper`}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
        >
          <span className="visually-hidden">
            {isMenuOpen ? 'Close menu' : 'Open menu'}
          </span>
          <img alt="" src={isMenuOpen ? close : menu} aria-hidden="true" />
        </button>

        {isMenuOpen && (
          <div
            className={styles.menu}
            aria-labelledby="menu-button"
            role="dialog"
            tabIndex="-1"
            ref={menuRef}
          >
            <div className={styles.menu__content}>
              <h2 className="visually-hidden">Main menu</h2>
              <nav className={styles.nav}>
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
              <Button>Get an Invite</Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default MobileHeader;
