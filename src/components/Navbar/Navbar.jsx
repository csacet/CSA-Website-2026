import React, { useState } from "react";
import csaLogo from "../../assets/csa_logo.svg";
import "./Navbar.css";

const navItems = [
  "About",
  "Gallery",
  "Achievements",
  "Placements",
  "Resources",
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div
        className={`menu-overlay ${isMenuOpen ? "is-visible" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <header className="topbar" aria-label="Primary">
        <a
          className="brand"
          href="#"
          aria-label="Computer Science Association CET home"
        >
          <img src={csaLogo} alt="CSA Logo" className="brand-logo" />
        </a>

        <nav
          className={`nav-pills ${isMenuOpen ? "is-open" : ""}`}
          aria-label="Section navigation"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-pill"
              onClick={closeMenu}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="topbar-actions">
          <button
            className={`menu-toggle ${isMenuOpen ? "is-active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </header>
    </>
  );
}

export default Navbar;
