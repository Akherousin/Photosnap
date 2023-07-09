import Logo from '../Logo/Logo';
import close from '../../assets/shared/mobile/close.svg';
import menu from '../../assets/shared/mobile/menu.svg';
import styles from './MobileHeader.module.scss';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';

function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();
  const menuBtn = useRef();
  const ctaBtn = useRef();
  const headerRef = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    if (isMenuOpen && menuBtn.current) {
      // move focus back to the button
      menuBtn.current.focus();
    } else if (!isMenuOpen && menuRef.current) {
      // move focus to the menu
      menuRef.current.focus();
    }
  };

  // Add tab trapping inside the menu when it is open

  useEffect(() => {
    const tabTrap = (e) => {
      if (e.key !== 'Tab' || e.keyCode !== 9) return;

      if (e.shiftKey) {
        if (document.activeElement === menuBtn.current) {
          ctaBtn.current.focus();
          e.preventDefault();
        }
      } else if (document.activeElement === ctaBtn.current) {
        menuBtn.current.focus();
        e.preventDefault();
      }
    };

    window.addEventListener('keydown', tabTrap);

    return () => {
      window.removeEventListener('keydown', tabTrap);
    };
  }, []);

  // Close menu on pressing Escape key

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        menuBtn.current.focus();
        setIsMenuOpen(false);
      }
    };

    headerRef.current.addEventListener('keydown', handleKeyDown);

    return () => {
      headerRef.current.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      {isMenuOpen && (
        <div className={styles.overlay} onClick={toggleMenu}></div>
      )}
      <header className={styles.header} ref={headerRef}>
        <Logo />
        <button
          ref={menuBtn}
          className={`${styles.menu__button} click-target-helper`}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
        >
          <span className="visually-hidden">
            {isMenuOpen ? 'Close Navigation' : 'Open Navigation'}
          </span>
          <img alt="" src={isMenuOpen ? close : menu} aria-hidden="true" />
        </button>

        {isMenuOpen && (
          <div className={styles.menu} ref={menuRef}>
            <div className={styles.menu__content}>
              <nav className={styles.nav} aria-label="Site">
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
              <Button ref={ctaBtn}>Get an Invite</Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default MobileHeader;
