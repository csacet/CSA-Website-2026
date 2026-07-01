import React, { useState } from "react";
import "./achievements.css";

const achievements = [
     {
    id: 1,
    name: "Johan Varghese K",
    category: "Research Paper Publication",
    description:
      "We are incredibly proud of our 2nd-year CS student for co-authoring a research paper in the prestigious Journal of Systems Architecture (JSA). The paper explores metaheuristic approaches for co-scheduling tasks on shared bus-based heterogeneous platforms.",
    image: "/src/assets/achievements1.png",
  },
   {
    id: 2,
    name: "Jane Doe",
    category: "Hackathon Winner",
    description:
      "We are incredibly proud of our 2nd-year CS student for co-authoring a research paper in the prestigious Journal of Systems Architecture (JSA). The paper explores metaheuristic approaches for co-scheduling tasks on shared bus-based heterogeneous platforms.",
    image: "/src/assets/achievements1.png",
  },
   {
    id: 3,
    name: "John Doe",
    category: "Hackathon Winner",
    description:
      "We are incredibly proud of our 2nd-year CS student for co-authoring a research paper in the prestigious Journal of Systems Architecture (JSA). The paper explores metaheuristic approaches for co-scheduling tasks on shared bus-based heterogeneous platforms.",
    image: "/src/assets/achievements1.png",
  },
   {
    id: 4,
    name: "Someone",
    category: "Coding Competition Winner",
    description:
      "We are incredibly proud of our 2nd-year CS student for co-authoring a research paper in the prestigious Journal of Systems Architecture (JSA). The paper explores metaheuristic approaches for co-scheduling tasks on shared bus-based heterogeneous platforms.",
    image: "/src/assets/achievements1.png",
  },

];

function Achievements(){
  const [index, setIndex] = useState(0);

  const goRight = () => setIndex((index + 1) % achievements.length);
  const goLeft = () => setIndex((index - 1 + achievements.length) % achievements.length);

  const current = achievements[index];

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
          <img className="edge-card edge-card--1" src="/src/assets/achievements1.png" />
          <div className="edge-card edge-card--2" src="/src/assets/achievements1.png"/>
          <div className="edge-card edge-card--3" src="/src/assets/achievements1.png"/>
        </div>

        <div className="edge-stack edge-stack--right" aria-hidden="true">
          <div className="edge-card edge-card--1" src="/src/assets/achievements1.png"/>
          <div className="edge-card edge-card--2" src="/src/assets/achievements1.png"/>
          <div className="edge-card edge-card--3" src="/src/assets/achievements1.png"/>
        </div>

        
        <button className="arrow-btn arrow-btn--left" onClick={goLeft} aria-label="Previous">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div className="carousel-inner">
            <div className="poster-card">
              <img src={current.image} alt={current.name} className="poster-img" />
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
