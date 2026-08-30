import './Gallery.css';
import { useState, useEffect, useCallback } from 'react';

const galleryImages = [
  { id: 1, alt: 'CSA Event 1', src: '/gallery/WhatsApp Image 2026-08-16 at 11.11.44 AM (1).jpeg' },
  { id: 2, alt: 'CSA Event 2', src: '/gallery/WhatsApp Image 2026-08-16 at 11.11.44 AM.jpeg' },
  { id: 3, alt: 'CSA Event 3', src: '/gallery/WhatsApp Image 2026-08-16 at 11.11.45 AM (1).jpeg' },
  { id: 4, alt: 'CSA Event 4', src: '/gallery/WhatsApp Image 2026-08-16 at 11.11.45 AM (2).jpeg' },
  { id: 5, alt: 'CSA Event 5', src: '/gallery/WhatsApp Image 2026-08-16 at 11.11.45 AM.jpeg' },
  { id: 6, alt: 'CSA Event 6', src: '/gallery/WhatsApp Image 2026-08-16 at 11.11.46 AM (1).jpeg' },
  { id: 7, alt: 'CSA Event 7', src: '/gallery/WhatsApp Image 2026-08-16 at 11.11.46 AM.jpeg' },
  { id: 8, alt: 'CSA Event 8', src: '/gallery/WhatsApp Image 2026-08-16 at 11.11.55 AM.jpeg' },
  { id: 9, alt: 'CSA Event 9', src: '/gallery/WhatsApp Image 2026-08-16 at 11.11.56 AM (1).jpeg' },
  { id: 10, alt: 'CSA Event 10', src: '/gallery/WhatsApp Image 2026-08-16 at 11.11.56 AM (2).jpeg' },
  { id: 11, alt: 'CSA Event 11', src: '/gallery/WhatsApp Image 2026-08-16 at 11.11.56 AM.jpeg' },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const duplicatedImages = [...galleryImages, ...galleryImages];

  const openLightbox = (index) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const goToPrev = useCallback(() => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1));
  }, []);

  const goToNext = useCallback(() => {
    setSelectedIndex((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, goToPrev, goToNext]);

  const currentImage = selectedIndex !== null ? galleryImages[selectedIndex] : null;

  return (
    <section className="gallery-section">
      <div className="csa-section-heading gallery-heading">
        <svg className="csa-heading-dino" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M30.8 0V2.8H28V19.6H25.2V22.4H19.6V25.2H16.8V28H14V30.8H8.4V28H5.6V25.2H2.8V19.6H0V36.4H2.8V39.2H5.6V42H8.4V44.8H11.2V56H16.8V53.2H14V50.4H16.8V47.6H19.6V44.8H22.4V47.6H25.2V56H30.8V53.2H28V42H30.8V39.2H33.6V36.4H36.4V28H39.2V30.8H42V25.2H36.4V19.6H50.4V16.8H42V14H56V2.8H53.2V0M33.6 2.8H36.4V5.6H33.6V2.8Z" fill="currentColor" />
        </svg>
        <div className="csa-section-heading-frame">
          <span className="csa-section-heading-line" />
          <h1 className="csa-section-heading-title">Gallery</h1>
          <span className="csa-section-heading-line" />
        </div>
      </div>

      <div className="gallery-carousel-wrapper">
        <div className="gallery-carousel">
          {duplicatedImages.map((img, index) => (
            <div 
              className="gallery-card" 
              key={`${img.id}-${index}`}
              onClick={() => openLightbox(img.id - 1)}
            >
              <div className="gallery-image-placeholder">
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {currentImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-header">
              <span className="lightbox-counter">
                {selectedIndex + 1} / {galleryImages.length}
              </span>
              <button className="lightbox-close" onClick={closeLightbox} aria-label="Close lightbox">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <div className="lightbox-body">
              <button className="lightbox-nav lightbox-nav-prev" onClick={goToPrev} aria-label="Previous image">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>

              <div className="lightbox-image-container">
                <img src={currentImage.src} alt={currentImage.alt} className="lightbox-image" />
              </div>

              <button className="lightbox-nav lightbox-nav-next" onClick={goToNext} aria-label="Next image">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>

            <div className="lightbox-footer">
              <h3 className="lightbox-title">{currentImage.alt}</h3>
              <p className="lightbox-subtitle">CSA Event</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
