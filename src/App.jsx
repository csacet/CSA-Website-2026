import React, { useState } from "react";

import HeroArtwork from "./components/HeroArtwork";
import csaLogo from "./assets/csa_logo.svg";
import "./styles.css";

// Resources section
import Resources from "./components/Resources";

const navItems = [
  "About",
  "Gallery",
  "Achievements",
  "Placements",
  "Resources",
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <main className="page-shell">
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />

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

      <section id="home" className="hero">
        <div className="hero-copy">
          <div className="hero-text">
            <h1 className="home-h1">
              COMPUTER
              <br />
              SCIENCE &amp;
              <br />
              ENGINEERING
            </h1>
          </div>

          <p>
            A central space for students, faculty and alumni to stay connected
            with the department, access resources, opportunities and updates.
          </p>

          <a className="cta" href="#about">
            Explore <span aria-hidden="true">→</span>
          </a>
        </div>

        <HeroArtwork />
      </section>

      <section id="resources">
        <Resources />
      </section>
    </main>
  );
}

export default App;
