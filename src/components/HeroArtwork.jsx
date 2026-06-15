import React from "react";
import heroIcon from "../assets/hero_icon.webp";

function HeroArtwork() {
  return (
    <div className="art-card" aria-hidden="true">
      <img
        src={heroIcon}
        fetchpriority="high"
        loading="eager"
        decoding="async"
        alt="logo"
      />
    </div>
  );
}

export default HeroArtwork;
