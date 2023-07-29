import Logo from '../Logo/Logo';

import styles from './MobileHeader.module.scss';
import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
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
  }, []);

  return (
    <>
      {isMenuOpen && (
        <div className={styles.overlay} onClick={toggleMenu}></div>
      )}
      <header className={styles.header} ref={headerRef}>
        <Logo />

        <nav className={styles.nav} aria-labelledby="nav-label">
          <button
            ref={menuBtn}
            className={`click-target-helper`}
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="nav__list--mobile"
          >
            <span className="visually-hidden">Navigation</span>

            {isMenuOpen ? (
              <CloseSVG aria-hidden="true" focusable="false" />
            ) : (
              <MenuSVG aria-hidden="true" focusable="false" />
            )}
          </button>
          {isMenuOpen ? (
            <>
              <ul className={styles.nav__list} id="nav__list--mobile">
                <li>
                  <NavLink
                    to="/stories"
                    className={`${styles.nav__link} click-target-helper`}
                    onClick={() => {
                      setIsMenuOpen(!isMenuOpen);
                    }}
                  >
                    Stories
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/features"
                    className={`${styles.nav__link} click-target-helper`}
                    onClick={() => {
                      setIsMenuOpen(!isMenuOpen);
                    }}
                  >
                    Features
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/pricing"
                    className={`${styles.nav__link} click-target-helper`}
                    onClick={() => {
                      setIsMenuOpen(!isMenuOpen);
                    }}
                  >
                    Pricing
                  </NavLink>
                </li>
                <li>
                  <Button ref={ctaBtn}>Get an Invite</Button>
                </li>
              </ul>
            </>
          ) : null}
        </nav>
      </header>
    </>
  );
}

function CloseSVG({ ...rest }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" {...rest}>
      <path
        fillRule="evenodd"
        d="M14.718.075l.707.707L8.707 7.5l6.718 6.718-.707.707L8 8.207l-6.718 6.718-.707-.707L7.293 7.5.575.782l.707-.707L8 6.793 14.718.075z"
      />
    </svg>
  );
}

function MenuSVG({ ...rest }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="6" {...rest}>
      <g fillRule="evenodd">
        <path d="M0 0h20v1H0zM0 5h20v1H0z" />
      </g>
    </svg>
  );
}
export default MobileHeader;
