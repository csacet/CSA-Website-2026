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

function App() {
  const alumniPostMatch = window.location.pathname.match(
    /^\/alumni-insights\/([^/]+)\/?$/,
  ); // If pages increase react-router could be used instead

  if (alumniPostMatch) {
    return (
      <main className="page-shell">
        <Navbar />
        <AlumniInsightPost slug={decodeURIComponent(alumniPostMatch[1])} />
      </main>
    );
  }

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
    </main>
  );
}

export default App;
