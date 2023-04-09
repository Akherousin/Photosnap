import Logo from '../Logo/Logo';
import close from '../../assets/shared/mobile/close.svg';
import menu from '../../assets/shared/mobile/menu.svg';
import './MobileHeader.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';

function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <Logo />
      <button
        className="menu__button click-target-helper"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-expanded={isMenuOpen}
      >
        <span className="visually-hidden ">
          {isMenuOpen ? 'Close menu' : 'Open menu'}
        </span>
        <img alt="" src={isMenuOpen ? close : menu} />
      </button>

      {isMenuOpen && (
        <div className="menu" aria-labelledby="menu-button">
          <div className="menu__content">
            <nav className="nav">
              <ul className="nav__list">
                <li>
                  <Link to="/stories" className="nav__link">
                    Stories
                  </Link>
                </li>
                <li>
                  <Link to="/features" className="nav__link">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="nav__link">
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
  );
}

export default MobileHeader;
