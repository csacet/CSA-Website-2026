import './Execom.css';
import { useState, useEffect, useRef } from 'react';
import teamMembers from './execom.json';

export default function Execom() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const trackRef = useRef(null);
  const [cardStep, setCardStep] = useState(304);
  const [desktopVisible, setDesktopVisible] = useState(4);

  useEffect(() => {
    const update = () => {
      setIsMobile(window.innerWidth <= 640);
      if (trackRef.current) {
        const card = trackRef.current.querySelector('.execom-card');
        if (card) {
          const step = card.offsetWidth + 24;
          setCardStep(step);
          const viewport = trackRef.current.parentElement;
          if (viewport) {
            setDesktopVisible(Math.max(1, Math.floor((viewport.offsetWidth + 24) / step)));
          }
        }
      }
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const maxIndex = isMobile ? teamMembers.length - 1 : teamMembers.length - desktopVisible;

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  const member = teamMembers[currentIndex];

  return (
    <section className="execom-section">
      <div className="execom-title-container">
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="dinosaur-logo-execom">
          <path d="M30.8 0V2.8H28V19.6H25.2V22.4H19.6V25.2H16.8V28H14V30.8H8.4V28H5.6V25.2H2.8V19.6H0V36.4H2.8V39.2H5.6V42H8.4V44.8H11.2V56H16.8V53.2H14V50.4H16.8V47.6H19.6V44.8H22.4V47.6H25.2V56H30.8V53.2H28V42H30.8V39.2H33.6V36.4H36.4V28H39.2V30.8H42V25.2H36.4V19.6H50.4V16.8H42V14H56V2.8H53.2V0M33.6 2.8H36.4V5.6H33.6V2.8Z" fill="#f8f6f4" />
        </svg>
        <div className="execom-title-section">
          <div className="execom-title-frame">
            <div className='execom-line execom-line-left'></div>
            <h1 className="execom-title">Execom</h1>
            <div className='execom-line execom-line-right'></div>
          </div>
          <div className="execom-border-frame">
            <div className='execom-border-top'></div>
            <div className='execom-border-bottom'></div>
          </div>
        </div>
      </div>

      {isMobile ? (
        <div className="execom-mobile">
          <div className="execom-mobile-row">
            <button className="execom-nav-btn" onClick={prev} disabled={currentIndex === 0} aria-label="Previous">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <div className="execom-card">
              <div className="execom-avatar">
                <img src={member.image} alt={member.name} className="execom-img" />
              </div>
              <h3 className="execom-name">{member.name}</h3>
              <p className="execom-position">{member.position}</p>
            </div>

            <button className="execom-nav-btn" onClick={next} disabled={currentIndex === maxIndex} aria-label="Next">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          <div className="execom-dots">
            {teamMembers.map((_, index) => (
              <button key={index} className={`execom-dot ${index === currentIndex ? 'active' : ''}`} onClick={() => setCurrentIndex(index)} aria-label={`Card ${index + 1}`} />
            ))}
          </div>
        </div>
      ) : (
        <div className="execom-carousel-wrapper">
          <button className="execom-nav-btn" onClick={prev} disabled={currentIndex === 0} aria-label="Previous">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="execom-carousel-viewport">
            <div className="execom-carousel-track" ref={trackRef} style={{ transform: `translateX(-${currentIndex * cardStep}px)` }}>
              {teamMembers.map((m, i) => (
                <div className="execom-card" key={i}>
                  <div className="execom-avatar">
                    <img src={m.image} alt={m.name} className="execom-img" />
                  </div>
                  <h3 className="execom-name">{m.name}</h3>
                  <p className="execom-position">{m.position}</p>

                </div>
              ))}
            </div>
          </div>

          <button className="execom-nav-btn" onClick={next} disabled={currentIndex >= maxIndex} aria-label="Next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}