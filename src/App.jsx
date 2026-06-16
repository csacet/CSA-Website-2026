import React from "react";

import HeroArtwork from "./components/HeroArtwork";
import Navbar from "./components/Navbar/Navbar";
import "./styles.css";

function App() {
  return (
    <main className="page-shell">
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />

      <Navbar />

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
    </main>
  );
}

export default App;
