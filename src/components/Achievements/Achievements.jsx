import { useState } from "react";
import achievementsData from "./achievements.json";
import "./Achievements.css";

const achievementImages = {
  "achievements1.png": new URL("./assets/achievements1.png", import.meta.url).href,
  "achievements2.jpeg": new URL("./assets/achievements2.jpeg", import.meta.url).href,
  "achievements3.jpeg": new URL("./assets/achievements3.jpeg", import.meta.url).href,
};

const achievements = achievementsData.map((achievement) => ({
  ...achievement,
  image: achievementImages[achievement.image],
  imageClass: `achievement-image--${achievement.image
    .replace(/\.[^/.]+$/, "")
    .replace(/[^a-z0-9]/gi, "-")
    .toLowerCase()}`,
}));

function getStackImages(activeIndex, startOffset) {
  return Array.from({ length: 3 }, (_, stackIndex) => {
    const achievementIndex =
      (activeIndex + startOffset + stackIndex) % achievements.length;

    return achievements[achievementIndex];
  });
}

function Achievements(){
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  const goRight = () => {
    setDirection("next");
    setIndex((index + 1) % achievements.length);
  };

  const goLeft = () => {
    setDirection("prev");
    setIndex((index - 1 + achievements.length) % achievements.length);
  };

  const current = achievements[index];
  const leftStackImages = getStackImages(index, 1);
  const rightStackImages = getStackImages(index, 4);

    return (
        <main className ="achievements-page csa-earth-section">
        <div className="csa-section-heading achievement-heading">
        <svg className="csa-heading-dino" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M30.8 0V2.8H28V19.6H25.2V22.4H19.6V25.2H16.8V28H14V30.8H8.4V28H5.6V25.2H2.8V19.6H0V36.4H2.8V39.2H5.6V42H8.4V44.8H11.2V56H16.8V53.2H14V50.4H16.8V47.6H19.6V44.8H22.4V47.6H25.2V56H30.8V53.2H28V42H30.8V39.2H33.6V36.4H36.4V28H39.2V30.8H42V25.2H36.4V19.6H50.4V16.8H42V14H56V2.8H53.2V0M33.6 2.8H36.4V5.6H33.6V2.8Z" fill="#202020" />
        </svg>
        <svg className="csa-heading-disk" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="25" cy="25" r="10.9375" stroke="#202020" strokeWidth="3.125" />
            <circle cx="25" cy="25" r="17.1875" stroke="#202020" strokeWidth="3.125" />
            <circle cx="25" cy="25" r="23.4375" stroke="#202020" strokeWidth="3.125" />
            <circle cx="25" cy="25.4434" r="6" fill="#202020" />
        </svg>
        <div className="csa-section-heading-frame">
            <span className="csa-section-heading-line" />                                                                              
            <h1 className="csa-section-heading-title">Achievements</h1>
            <span className="csa-section-heading-line" />
        </div>
        </div>
      <section className="carousel">
          {/* decorative cards */}
        <div className="edge-stack edge-stack--left" aria-hidden="true">
          {leftStackImages.map((achievement, stackIndex) => (
            <div
              className={`edge-card edge-card--${stackIndex + 1} ${achievement.imageClass}`}
              key={`left-${achievement.id}-${stackIndex}`}
            >
              <img className="edge-card-img" src={achievement.image} alt="" />
            </div>
          ))}
        </div>

        <div className="edge-stack edge-stack--right" aria-hidden="true">
          {rightStackImages.map((achievement, stackIndex) => (
            <div
              className={`edge-card edge-card--${stackIndex + 1} ${achievement.imageClass}`}
              key={`right-${achievement.id}-${stackIndex}`}
            >
              <img className="edge-card-img" src={achievement.image} alt="" />
            </div>
          ))}
        </div>

        
        <button className="arrow-btn arrow-btn--left" onClick={goLeft} aria-label="Previous">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div
          className={`carousel-inner carousel-inner--${direction}`}
          key={current.id}
        >
            <div className="poster-card">
              <img
                src={current.image}
                alt={current.name}
                className={`poster-img ${current.imageClass}`}
              />
            </div>

          <div className="detail-panel">
            <h2 className="detail-name">{current.name}</h2>
            <p className="detail-category">{current.category}</p>
            <p className="detail-desc">{current.description}</p>
          </div>
        </div>

        <button className="arrow-btn arrow-btn--right" onClick={goRight} aria-label="Next">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
    </section>
    </main>
  );
}

export default Achievements;
