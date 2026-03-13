import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../../styles/components/navigation.css";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='nav'>
      <div className='nav__inner'>
        {/* Logo */}
        <NavLink to='/' className='nav__logo'>
          JW
        </NavLink>

        {/* Desktop Nav Links */}
        <div className='nav__links'>
          <NavLink
            to='/work'
            className={({ isActive }) =>
              isActive ? "nav__link nav__link--active" : "nav__link"
            }
          >
            Work
          </NavLink>
          <NavLink
            to='/about'
            className={({ isActive }) =>
              isActive ? "nav__link nav__link--active" : "nav__link"
            }
          >
            About
          </NavLink>
          <NavLink
            to='/contact'
            className={({ isActive }) =>
              isActive ? "nav__link nav__link--active" : "nav__link"
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Mobile Hamburger */}
        <button
          className='nav__hamburger'
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label='Toggle menu'
        >
          <span
            className={`nav__hamburger-line ${menuOpen ? "nav__hamburger-line--open" : ""}`}
          ></span>
          <span
            className={`nav__hamburger-line ${menuOpen ? "nav__hamburger-line--open" : ""}`}
          ></span>
          <span
            className={`nav__hamburger-line ${menuOpen ? "nav__hamburger-line--open" : ""}`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`nav__mobile ${menuOpen ? "nav__mobile--open" : ""}`}>
        <NavLink
          to='/work'
          onClick={() => setMenuOpen(false)}
          className='nav__link'
        >
          Work
        </NavLink>
        <NavLink
          to='/about'
          onClick={() => setMenuOpen(false)}
          className='nav__link'
        >
          About
        </NavLink>
        <NavLink
          to='/contact'
          onClick={() => setMenuOpen(false)}
          className='nav__link'
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
