import './Execom.css';
import { useState, useRef } from 'react';

const teamMembers = [
  { name: 'Name', position: 'Position', phone: '91892019201' },
  { name: 'Name', position: 'Position', phone: '91892019201' },
  { name: 'Name', position: 'Position', phone: '91892019201' },
  { name: 'Name', position: 'Position', phone: '91892019201' },
  { name: 'Name', position: 'Position', phone: '91892019201' },
  { name: 'Name', position: 'Position', phone: '91892019201' },
  { name: 'Name', position: 'Position', phone: '91892019201' },
  { name: 'Name', position: 'Position', phone: '91892019201' },
];

export default function Execom() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const cardWidth = 280 + 24;
  const visibleCards = 4;
  const maxIndex = teamMembers.length - visibleCards;

  const scrollLeft = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const scrollRight = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

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

      <div className="execom-carousel-wrapper">
        <button 
          className="execom-nav-btn execom-nav-left" 
          onClick={scrollLeft}
          disabled={currentIndex === 0}
          aria-label="Scroll left"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div className="execom-carousel-viewport">
          <div 
            className="execom-carousel-track"
            ref={carouselRef}
            style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}
          >
            {teamMembers.map((member, index) => (
              <div className="execom-card" key={index}>
                <div className="execom-avatar">
                  <div className="avatar-placeholder">
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id={`avatar-grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#4a3a42" />
                          <stop offset="100%" stopColor="#3a2a32" />
                        </linearGradient>
                        <linearGradient id={`skin-grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#f0d5b8" />
                          <stop offset="100%" stopColor="#e0c5a8" />
                        </linearGradient>
                      </defs>
                      <circle cx="50" cy="50" r="50" fill={`url(#avatar-grad-${index})`}/>
                      <circle cx="50" cy="35" r="20" fill={`url(#skin-grad-${index})`}/>
                      <ellipse cx="50" cy="85" rx="30" ry="28" fill={index % 2 === 0 ? '#e94e7a' : '#4a5568'}/>
                      <circle cx="42" cy="33" r="2" fill="#2d3748"/>
                      <circle cx="58" cy="33" r="2" fill="#2d3748"/>
                      <path d="M45 40 Q50 44 55 40" stroke="#2d3748" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
                <h3 className="execom-name">{member.name}</h3>
                <p className="execom-position">{member.position}</p>
                <div className="execom-phone">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="#f8f6f4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{member.phone}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button 
          className="execom-nav-btn execom-nav-right" 
          onClick={scrollRight}
          disabled={currentIndex >= maxIndex}
          aria-label="Scroll right"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </section>
  );
}
