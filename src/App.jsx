import { useEffect } from "react";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import HeroArtwork from "./components/home/HeroArtwork/HeroArtwork";
import Navbar from "./components/home/Navbar/Navbar";
import Gallery from "./components/home/Gallery/Gallery";
import Execom from "./components/home/Execom/Execom";
import Resources from "./components/Resource/Resources";
import AlumniInsightPost from "./components/AlumniInsights/AlumniInsightPost";
import AlumniInsights from "./components/AlumniInsights/AlumniInsights";
import Placements from "./components/Placements/Placements";
import Help from "./components/Help/help";
import Achievements from "./components/Achievements/achievements";
import "./styles.css";

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    const target = document.getElementById(hash.slice(1));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hash, pathname]);

  return null;
}

function HomePage() {
  return (
    <>
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />

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
      <section id="gallery">
        <Gallery />
      </section>

      <section id="execom">
        <Execom />
      </section>

      <section id="achievements">
        <Achievements />
      </section>

      <section id="placements">
        <Placements />
        <AlumniInsights />
      </section>

      <section id="resources">
        <Resources />
      </section>

      <section>
        <Help />
      </section>
    </>
  );
}

function AlumniPostRoute() {
  const { slug } = useParams();

  return <AlumniInsightPost slug={slug} />;
}

function App() {
  return (
    <main className="page-shell">
      <ScrollToHash />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/alumni-insights/:slug" element={<AlumniPostRoute />} />
      </Routes>
    </main>
  );
}

export default App;
