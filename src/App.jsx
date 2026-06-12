const navItems = [
  "About",
  "Gallery",
  "Achievements",
  "Placements",
  "Resources",
];

function LogoMark() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="brand-mark">
      <path
        d="M18 5v20l-6 3 12 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26 9v20l-6 3 12 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.95"
      />
      <path
        d="M34 13v20l-6 3"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="target-icon">
      <circle
        cx="24"
        cy="24"
        r="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />
      <circle
        cx="24"
        cy="24"
        r="12"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />
      <circle
        cx="24"
        cy="24"
        r="6"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />
    </svg>
  );
}

function HeroArtwork() {
  return (
    <div className="art-card" aria-hidden="true">
      <div className="art-glow art-glow-a" />
      <div className="art-glow art-glow-b" />
      <div className="floating-icon floating-code">{"</>"}</div>
      <div className="floating-icon floating-cap">🎓</div>
      <div className="floating-icon floating-bars">▮▮▮</div>
      <div className="floating-icon floating-cloud">☁</div>

      <div className="plant">
        <span className="pot" />
        <span className="leaf leaf-1" />
        <span className="leaf leaf-2" />
        <span className="leaf leaf-3" />
        <span className="leaf leaf-4" />
      </div>

      <div className="desk-shadow" />
      <div className="book-stack">
        <span />
        <span />
        <span />
      </div>

      <div className="screen">
        <div className="screen-topbar">
          <span />
          <span />
          <span />
        </div>
        <div className="screen-window">
          <div className="screen-side">
            <span className="screen-dot pink" />
            <span className="screen-dot amber" />
            <span className="screen-dot lavender" />
            <span className="screen-line short" />
            <span className="screen-line medium" />
            <span className="screen-line long" />
            <span className="screen-line short" />
          </div>
          <div className="screen-main">
            <div className="screen-panel">
              <span className="mini-cap">🎓</span>
              <span className="mini-line wide" />
              <span className="mini-line" />
              <span className="mini-line short" />
              <span className="mini-pill" />
            </div>
          </div>
        </div>
      </div>

      <div className="figure figure-left">
        <div className="head" />
        <div className="hair hair-left" />
        <div className="body body-left" />
        <div className="arm arm-left" />
        <div className="arm arm-left arm-secondary" />
      </div>

      <div className="figure figure-right">
        <div className="head" />
        <div className="hair hair-right" />
        <div className="body body-right" />
        <div className="arm arm-right" />
      </div>

      <div className="laptop">
        <div className="laptop-screen" />
        <div className="laptop-base" />
      </div>

      <div className="notebook" />
    </div>
  );
}

function App() {
  return (
    <main className="page-shell">
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />

      <header className="topbar" aria-label="Primary">
        <a
          className="brand"
          href="#home"
          aria-label="Computer Science Association CET home"
        >
          <LogoMark />
        </a>

        <nav className="nav-pills" aria-label="Section navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-pill">
              {item}
            </a>
          ))}
        </nav>

        <a
          className="target-link"
          href="#resources"
          aria-label="Jump to resources"
        >
          <TargetIcon />
        </a>
      </header>

      <section id="home" className="hero">
        <div className="hero-copy">
          <h1>
            COMPUTER
            <br />
            SCIENCE &amp;
            <br />
            ENGINEERING
          </h1>

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
