import { useState, useEffect } from "react";
import csaLogo from "../../../assets/csa_logo.svg";
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
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.toLowerCase());

    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -30% 0px",
      threshold: 0,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    const sectionsToObserve = ["home", ...sectionIds];
    sectionsToObserve.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    const handleScrollBounds = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollPosition < 50) {
        setActiveSection("");
        return;
      }

      if (scrollPosition + windowHeight >= documentHeight - 50) {
        const existingSections = sectionIds.filter((id) => document.getElementById(id));
        if (existingSections.length > 0) {
          setActiveSection(existingSections[existingSections.length - 1]);
        }
      }
    };

    window.addEventListener("scroll", handleScrollBounds);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScrollBounds);
    };
  }, []);

  return (
    <>
      <div
        className={`menu-overlay ${isMenuOpen ? "is-visible" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <header className={`topbar ${isScrolled ? "is-scrolled" : ""}`} aria-label="Primary">
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
              className={`nav-pill ${activeSection === item.toLowerCase() ? "active" : ""}`}
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
