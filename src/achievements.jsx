import React, { useState } from "react";
import csaLogo from "./assets/csa_logo.svg";

const achievements = [
     {
    id: 1,
    name: "Johan Varghese K",
    category: "Research Paper Publication",
    description:
      "We are incredibly proud of our 2nd-year CS student for co-authoring a research paper in the prestigious Journal of Systems Architecture (JSA). The paper explores metaheuristic approaches for co-scheduling tasks on shared bus-based heterogeneous platforms.",
    image: null,
  },
   {
    id: 2,
    name: "Johan Varghese K",
    category: "Research Paper Publication",
    description:
      "We are incredibly proud of our 2nd-year CS student for co-authoring a research paper in the prestigious Journal of Systems Architecture (JSA). The paper explores metaheuristic approaches for co-scheduling tasks on shared bus-based heterogeneous platforms.",
    image: null,
  },
   {
    id: 3,
    name: "Johan Varghese K",
    category: "Research Paper Publication",
    description:
      "We are incredibly proud of our 2nd-year CS student for co-authoring a research paper in the prestigious Journal of Systems Architecture (JSA). The paper explores metaheuristic approaches for co-scheduling tasks on shared bus-based heterogeneous platforms.",
    image: null,
  },
   {
    id: 4,
    name: "Johan Varghese K",
    category: "Research Paper Publication",
    description:
      "We are incredibly proud of our 2nd-year CS student for co-authoring a research paper in the prestigious Journal of Systems Architecture (JSA). The paper explores metaheuristic approaches for co-scheduling tasks on shared bus-based heterogeneous platforms.",
    image: null,
  },

];

function Achievements(){
    const [index, setIndex] = useState(0);
    
    const goRight = () => {
        if (index === achievements.length - 1){
            setIndex(0);
        }
        else{
            setIndex(index + 1);
        }
    };

    const goLeft = () => {
        if (index === 0){
            setIndex(achievements.length - 1);
        }
        else{
            setIndex(index - 1);
        }
    };

    const curr = achievements[index];

    return (
    <main className="achievements-page">

      <h1 className="achievements-heading">Achievements</h1>

      <div className="carousel">

        <button className="carousel-arrow left" onClick={goLeft}>
          ‹
        </button>

        <div className="carousel-poster">
          {current.image ? (
            <img src={current.image} alt={current.name} />
          ) : (
            <div className="poster-placeholder">
              <span>{current.name}</span>
            </div>
          )}
        </div>

        <div className="carousel-detail">
          <h2>{current.name}</h2>
          <p className="carousel-category">{current.category}</p>
          <p className="carousel-description">{current.description}</p>
        </div>

        <button className="carousel-arrow right" onClick={goRight}>
          ›
        </button>

      </div>

    </main>
  );
}

export default Achievements;
