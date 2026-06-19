import './Gallery.css';

const galleryImages = [
  { id: 1, alt: 'Group photo 1' },
  { id: 2, alt: 'Certificate presentation' },
  { id: 3, alt: 'Team gathering' },
  { id: 4, alt: 'Award ceremony' },
  { id: 5, alt: 'Outdoor event' },
  { id: 6, alt: 'Workshop session' },
  { id: 7, alt: 'Conference' },
  { id: 8, alt: 'Team celebration' },
];

export default function Gallery() {
  const duplicatedImages = [...galleryImages, ...galleryImages];

  return (
    <section className="gallery-section">
      <div className="gallery-title-container">
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="dinosaur-logo-gallery">
          <path d="M30.8 0V2.8H28V19.6H25.2V22.4H19.6V25.2H16.8V28H14V30.8H8.4V28H5.6V25.2H2.8V19.6H0V36.4H2.8V39.2H5.6V42H8.4V44.8H11.2V56H16.8V53.2H14V50.4H16.8V47.6H19.6V44.8H22.4V47.6H25.2V56H30.8V53.2H28V42H30.8V39.2H33.6V36.4H36.4V28H39.2V30.8H42V25.2H36.4V19.6H50.4V16.8H42V14H56V2.8H53.2V0M33.6 2.8H36.4V5.6H33.6V2.8Z" fill="#f8f6f4" />
        </svg>
        <div className="gallery-title-section">
          <div className="gallery-title-frame">
            <div className='gallery-line gallery-line-left'></div>
            <h1 className="gallery-title">Gallery</h1>
            <div className='gallery-line gallery-line-right'></div>
          </div>
          <div className="gallery-border-frame">
            <div className='gallery-border-top'></div>
            <div className='gallery-border-bottom'></div>
          </div>
        </div>
      </div>

      <div className="gallery-carousel-wrapper">
        <div className="gallery-carousel">
          {duplicatedImages.map((img, index) => (
            <div className="gallery-card" key={`${img.id}-${index}`}>
              <div className="gallery-image-placeholder">
                <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                  <rect width="400" height="300" fill="#5a4a52"/>
                  <rect x="20" y="20" width="360" height="260" rx="12" fill="#6b5c63" opacity="0.6"/>
                  <circle cx="120" cy="120" r="40" fill="#7a6b72"/>
                  <circle cx="200" cy="100" r="35" fill="#8a7b82"/>
                  <circle cx="280" cy="120" r="40" fill="#7a6b72"/>
                  <circle cx="150" cy="180" r="38" fill="#8a7b82"/>
                  <circle cx="250" cy="180" r="38" fill="#7a6b72"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
