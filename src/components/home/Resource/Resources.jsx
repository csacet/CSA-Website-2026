import './Resources.css';
import { useState } from "react";



const resources = [
  { name: 'Academics', subResources: [{ name: 'Syllabus', link: '#' }, { name: 'Notes', link: '#' }, { name: 'PYQs', link: '#' }] },
  { name: 'Skill Development', subResources: [{ name: 'Coding', link: '#' }, { name: 'Designing', link: '#' }, { name: 'Public Speaking', link: '#' }] },
]



export default function Resources() {
  const [openResources, setOpenResources] = useState({});

  const toggleResource = (index) => {
    setOpenResources(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <main className='container'>
      <section className='title-container'>
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="dinosaur-logo">
          <path d="M30.8 0V2.8H28V19.6H25.2V22.4H19.6V25.2H16.8V28H14V30.8H8.4V28H5.6V25.2H2.8V19.6H0V36.4H2.8V39.2H5.6V42H8.4V44.8H11.2V56H16.8V53.2H14V50.4H16.8V47.6H19.6V44.8H22.4V47.6H25.2V56H30.8V53.2H28V42H30.8V39.2H33.6V36.4H36.4V28H39.2V30.8H42V25.2H36.4V19.6H50.4V16.8H42V14H56V2.8H53.2V0M33.6 2.8H36.4V5.6H33.6V2.8Z" fill="#202020" />
        </svg>
        <div className="title-section">
          <div className="title-frame">
            <div className='line left'></div>
            <h1 className="title">Resources</h1>
            <div className='line right'></div>
          </div>
          <div className="border-frame">
            <div className='top'></div>
            <div className='bottom'></div>
          </div>
        </div>
      </section>


      <section className="resources-section">
        {resources.map((resource, index) => (
          <div className="resource-card" key={index}>

            <div
              className="resource-header"
              onClick={() => toggleResource(index)}
            >
              <h2 className="resource-name">
                {index + 1}. {resource.name}
              </h2>

              <div className="arrow-container">
                {openResources[index] ? <svg width="40" height="40" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M31.4493 42.4475L20.4426 30.3409C19.6466 29.4654 19.6466 28.1283 20.4426 27.2528C21.3533 26.2511 22.9286 26.2511 23.8392 27.2528L27.5706 31.3571C30.4822 34.5595 35.5186 34.5595 38.4301 31.3571L42.1615 27.2528C43.0722 26.2511 44.6475 26.2511 45.5582 27.2528C46.3541 28.1283 46.3541 29.4654 45.5582 30.3409L34.5514 42.4475C34.14 42.8999 33.5821 43.154 33.0004 43.154C32.4187 43.154 31.8607 42.8999 31.4493 42.4475Z" fill="#836C5A" />
                  <circle cx="33" cy="33" r="31.7308" transform="rotate(90 33 33)" stroke="#836C5A" stroke-width="2.53846" />
                </svg>
                  : <svg width="40" height="40" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M42.4475 34.5507L30.3409 45.5574C29.4654 46.3534 28.1283 46.3534 27.2528 45.5574C26.2511 44.6467 26.2511 43.0714 27.2528 42.1608L31.3571 38.4294C34.5595 35.5178 34.5595 30.4814 31.3571 27.5699L27.2528 23.8385C26.2511 22.9278 26.2511 21.3525 27.2528 20.4418C28.1283 19.6459 29.4654 19.6459 30.3409 20.4418L42.4475 31.4486C42.8999 31.86 43.154 32.4179 43.154 32.9996C43.154 33.5813 42.8999 34.1393 42.4475 34.5507Z" fill="#836C5A" />
                    <circle cx="33" cy="33" r="31.7308" stroke="#836C5A" stroke-width="2.53846" />
                  </svg>
                }
              </div>
            </div>

            {openResources[index] && (
              <div className="sub-resources">
                {resource.subResources.map((subResource, subIndex) => (
                  <div
                    className="sub-resource-item"
                    key={subIndex}
                  >
                    <span className="dot"></span>

                    <a
                      href={subResource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sub-resource-name"
                    >
                      {subResource.name}
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>
    </main>
  )
}

