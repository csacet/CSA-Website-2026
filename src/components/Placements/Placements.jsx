import { useEffect, useRef, useState } from "react";
import "./Placements.css";

const recruiters = [
  "IBM",
  "Oracle",
  "EY",
  "Accenture",
  "KPMG",
  "UST",
  "LTIMindtree",
  "SOTI",
  "Schneider Electric",
  "ARMADA",
  "CareStack",
  "South Indian Bank",
];

const placementStats = [
  {
    value: "166+",
    target: 166,
    label: "Offers",
  },
  {
    value: "14 LPA",
    label: "Highest Package",
    animate: false,
  },
  {
    value: "120+",
    target: 120,
    label: "Placed",
  },
];

function PlacementCounter({ value, target, shouldCount }) {
  const [count, setCount] = useState(() => (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ? target : 0
  ));
  const suffix = value.replace(/^\d+/, "");

  useEffect(() => {
    if (!shouldCount) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const duration = 4000;
    const startTime = performance.now();
    let animationFrame;

    const updateCount = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - (1 - progress) ** 3;
      setCount(Math.round(target * easedProgress));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(updateCount);
      }
    };

    animationFrame = window.requestAnimationFrame(updateCount);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [shouldCount, target]);

  return <>{count}{suffix}</>;
}

function RecruiterTrack() {
  return (
    <div className="recruiter-track" aria-hidden="true">
      {[0, 1].map((group) => (
        <div className="recruiter-group" key={group}>
          {recruiters.map((recruiter) => (
            <span className="recruiter-logo" key={`${recruiter}-${group}`}>
              {recruiter}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

function Placements() {
  const sectionRef = useRef(null);
  const [hasEnteredViewport, setHasEnteredViewport] = useState(() => (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ));

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setHasEnteredViewport(true);
        observer.unobserve(entry.target);
      },
      { threshold: 0.2 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="placements-section csa-earth-section" ref={sectionRef}>
      <div className="placements-content">
        <div className="csa-section-heading placements-heading">
          <svg
            className="csa-heading-dino"
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M30.8 0V2.8H28V19.6H25.2V22.4H19.6V25.2H16.8V28H14V30.8H8.4V28H5.6V25.2H2.8V19.6H0V36.4H2.8V39.2H5.6V42H8.4V44.8H11.2V56H16.8V53.2H14V50.4H16.8V47.6H19.6V44.8H22.4V47.6H25.2V56H30.8V53.2H28V42H30.8V39.2H33.6V36.4H36.4V28H39.2V30.8H42V25.2H36.4V19.6H50.4V16.8H42V14H56V2.8H53.2V0M33.6 2.8H36.4V5.6H33.6V2.8Z" fill="#202020" />
          </svg>
          <svg
            className="csa-heading-disk"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle cx="25" cy="25" r="10.9375" stroke="#202020" strokeWidth="3.125" />
            <circle cx="25" cy="25" r="17.1875" stroke="#202020" strokeWidth="3.125" />
            <circle cx="25" cy="25" r="23.4375" stroke="#202020" strokeWidth="3.125" />
            <circle cx="25" cy="25.4434" r="6" fill="#202020" />
          </svg>
          <div className="csa-section-heading-frame">
            <span className="csa-section-heading-line" />
            <h1 className="csa-section-heading-title">Placements</h1>
            <span className="csa-section-heading-line" />
          </div>
        </div>

        <div className="recruiters-wrap" aria-label="Top recruiters">
          <p>Our Top Recruiters</p>
          <div className="recruiter-marquee">
            <RecruiterTrack />
          </div>
        </div>

        <div className="placement-stats">
          {placementStats.map((stat) => (
            <article className="placement-stat" key={stat.label}>
              <strong>
                {stat.animate === false ? stat.value : (
                  <PlacementCounter
                    shouldCount={hasEnteredViewport}
                    target={stat.target}
                    value={stat.value}
                  />
                )}
              </strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Placements;
