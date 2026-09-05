import { useState, useEffect, useRef } from "react";
import dinoSvg from "../../assets/dino.svg";
import Help from "../../components/Help/Help";
import "./AboutPage.css";

const sectionsData = [
  {
    id: "who-we-are",
    title: "Who we are",
    description:
      "The Computer Science Association (CSA) is the official student body of the Department of Computer Science and Engineering.",
    isCircleTop: true,
    icon: "team",
  },
  {
    id: "what-we-do",
    title: "What we do",
    description:
      "We organize workshops, coding competitions, hackathons, technical talks, and community events that encourage collaboration and learning beyond the classroom.",
    isCircleTop: false,
    icon: "gear",
  },
  {
    id: "our-vision",
    title: "Our vision",
    description:
      "To create a vibrant technical community where students can explore new technologies, develop practical skills, and grow into future innovators and leaders.",
    isCircleTop: true,
    icon: "vision",
  },
  {
    id: "our-mission",
    title: "Our mission",
    description:
      "To foster a culture of learning and innovation by creating opportunities that empower students to develop technical skills, explore new ideas, and grow beyond the classroom.",
    isCircleTop: false,
    icon: "mission",
  },
];

function SectionIcon({ type }) {
  if (type === "team") {
    return (
      <svg
        viewBox="0 0 64 64"
        className="section-svg-icon"
        fill="none"
        stroke="#443741"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="32" cy="20" r="7.5" />
        <path d="M19 46c0-6.5 5.8-11.5 13-11.5s13 5 13 11.5" />
        <circle cx="16" cy="24" r="5.5" />
        <path d="M7 46c0-4.5 4.2-8 9-8 1.6 0 3.1.4 4.3 1" />
        <circle cx="48" cy="24" r="5.5" />
        <path d="M43.7 39c1.2-.6 2.7-1 4.3-1 4.8 0 9 3.5 9 8" />
      </svg>
    );
  }

  if (type === "gear") {
    return (
      <svg
        viewBox="0 0 64 64"
        className="section-svg-icon"
        fill="none"
        stroke="#443741"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M28.4 11.2a2 2 0 0 1 3.2-1.2h.8a2 2 0 0 1 3.2 1.2l.6 2.8a17.2 17.2 0 0 1 4.5 1.9l2.7-1.1a2 2 0 0 1 2.8 1.7l.4.8a2 2 0 0 1-.9 3.3l-2.4 1.6a17.2 17.2 0 0 1 1.8 4.6l2.8.6a2 2 0 0 1 1.6 2.3v.8a2 2 0 0 1-1.6 2.3l-2.8.6a17.2 17.2 0 0 1-1.8 4.6l2.4 1.6a2 2 0 0 1 .9 3.3l-.4.8a2 2 0 0 1-2.8 1.7l-2.7-1.1a17.2 17.2 0 0 1-4.5 1.9l-.6 2.8a2 2 0 0 1-3.2 1.2h-.8a2 2 0 0 1-3.2-1.2l-.6-2.8a17.2 17.2 0 0 1-4.5-1.9l-2.7 1.1a2 2 0 0 1-2.8-1.7l-.4-.8a2 2 0 0 1 .9-3.3l2.4-1.6a17.2 17.2 0 0 1-1.8-4.6l-2.8-.6a2 2 0 0 1-1.6-2.3v-.8a2 2 0 0 1 1.6-2.3l-2.8-.6a17.2 17.2 0 0 1 1.8-4.6l-2.4-1.6a2 2 0 0 1-.9-3.3l.4-.8a2 2 0 0 1 2.8-1.7l2.7 1.1a17.2 17.2 0 0 1 4.5-1.9l.6-2.8z" />
        <circle cx="32" cy="32" r="7.5" />
      </svg>
    );
  }

  if (type === "vision") {
    return (
      <svg
        viewBox="0 0 64 64"
        className="section-svg-icon"
        fill="none"
        stroke="#443741"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M8 32s9-16 24-16 24 16 24 16-9 16-24 16S8 32 8 32z" />
        <circle cx="32" cy="32" r="8.5" />
        <circle cx="34" cy="30" r="2.5" fill="#443741" />
        <path d="M47 16l4-4M51 16h-4v-4" strokeWidth="2" />
      </svg>
    );
  }

  // default type === 'mission'
  return (
    <svg
      viewBox="0 0 64 64"
      className="section-svg-icon"
      fill="none"
      stroke="#443741"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="22" />
      <circle cx="32" cy="32" r="14" />
      <circle cx="32" cy="32" r="6" />
      <path d="M32 10v4M32 50v4M10 32h4M50 32h4" strokeWidth="2" />
    </svg>
  );
}

export default function AboutPage() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const circleRefs = useRef([]);
  const [lines, setLines] = useState([]);
  const [isDinoJumping, setIsDinoJumping] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !trackRef.current) return;
      const container = containerRef.current;
      const track = trackRef.current;
      const rect = container.getBoundingClientRect();
      const scrollableDistance = container.offsetHeight - window.innerHeight;

      if (scrollableDistance <= 0) {
        track.style.transform = "translate3d(0, 0, 0)";
        return;
      }

      const progress = Math.min(Math.max(-rect.top / scrollableDistance, 0), 1);
      const trackWidth = track.scrollWidth;
      const viewportWidth = window.innerWidth;
      const maxTranslate = Math.max(0, trackWidth - viewportWidth + 140);
      const translate = progress * maxTranslate;
      track.style.transform = `translate3d(-${translate}px, 0, 0)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    const computeLines = () => {
      if (!trackRef.current) return;

      const newLines = [];
      const circles = circleRefs.current.map((el) => {
        if (!el) return null;
        return {
          x: el.offsetLeft + el.offsetWidth / 2,
          y: el.offsetTop + el.offsetHeight / 2,
          r: el.offsetWidth / 2,
        };
      });

      for (let i = 0; i < circles.length - 1; i++) {
        const c1 = circles[i];
        const c2 = circles[i + 1];
        if (c1 && c2) {
          const dx = c2.x - c1.x;
          const dy = c2.y - c1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > 0) {
            const x1 = c1.x + (dx / dist) * (c1.r + 6);
            const y1 = c1.y + (dy / dist) * (c1.r + 6);
            const x2 = c2.x - (dx / dist) * (c2.r + 6);
            const y2 = c2.y - (dy / dist) * (c2.r + 6);
            newLines.push({
              id: `line-${i}`,
              x1,
              y1,
              x2,
              y2,
            });
          }
        }
      }

      setLines(newLines);
    };

    computeLines();
    const timer = setTimeout(computeLines, 120);
    window.addEventListener("resize", computeLines);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", computeLines);
    };
  }, []);

  const handleDinoClick = () => {
    if (isDinoJumping) return;
    setIsDinoJumping(true);
    setTimeout(() => setIsDinoJumping(false), 650);
  };

  return (
    <div className="about-page-root">
      {/* Pinned Scroll Container */}
      <div ref={containerRef} className="about-scroll-container">
        <div className="about-sticky-viewport">
          {/* Header Section */}
          <div className="about-header-section">
            <div className="about-grid-line horizontal-top">
              <div
                className="about-dino-wrapper"
                title="Click me to jump!"
                onClick={handleDinoClick}
              >
                <img
                  src={dinoSvg}
                  alt="CSA 8-bit Dino"
                  className={`about-dino-sprite ${isDinoJumping ? "dino-jumping" : ""}`}
                />
              </div>
            </div>

            <div className="about-title-container">
              <div className="about-grid-line vertical-left" />
              <h1 className="about-main-title">AboutUs</h1>
              <div className="about-grid-line vertical-right" />
            </div>

            <div className="about-grid-line horizontal-bottom" />
          </div>

          {/* Horizontal Track Viewport */}
          <div className="about-track-viewport">
            <div ref={trackRef} className="about-track-content">
              {/* SVG for connecting dashed lines */}
              <svg className="about-dashed-svg" aria-hidden="true">
                {lines.map((l) => (
                  <line
                    key={l.id}
                    x1={l.x1}
                    y1={l.y1}
                    x2={l.x2}
                    y2={l.y2}
                    stroke="rgba(255, 255, 255, 0.52)"
                    strokeWidth="2.2"
                    strokeDasharray="9 9"
                  />
                ))}
              </svg>

              {/* Sections Cards */}
              {sectionsData.map((sec, idx) => (
                <div
                  key={sec.id}
                  className={`about-section-card ${
                    sec.isCircleTop ? "card-circle-top" : "card-circle-bottom"
                  }`}
                >
                  {sec.isCircleTop ? (
                    <>
                      <div
                        ref={(el) => {
                          circleRefs.current[idx] = el;
                        }}
                        className="about-circle-node"
                      >
                        <SectionIcon type={sec.icon} />
                      </div>
                      <div className="about-card-text">
                        <h2 className="about-card-heading">{sec.title}</h2>
                        <p className="about-card-desc">{sec.description}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="about-card-text">
                        <h2 className="about-card-heading">{sec.title}</h2>
                        <p className="about-card-desc">{sec.description}</p>
                      </div>
                      <div
                        ref={(el) => {
                          circleRefs.current[idx] = el;
                        }}
                        className="about-circle-node"
                      >
                        <SectionIcon type={sec.icon} />
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer / Help Section */}
      <footer className="about-page-footer">
        <Help />
      </footer>
    </div>
  );
}
