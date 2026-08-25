import styles from './Resources.module.css';
import { useState } from "react";

const resources = [
  { name: 'Academics', subResources: [{ name: 'Notes', children: [{ name: 'Year 1', link: 'https://drive.google.com/drive/folders/1upBa26qyFiXwrJ8fSnwcl5NPlDFmzZc6?usp=drive_link' }, { name: 'Year 2', link: 'https://drive.google.com/drive/folders/1PA63qS4y6VP_1Hj7_jf1t0ze2O2XCrjR?usp=drive_link' }, { name: 'Year 3', link: 'https://drive.google.com/drive/folders/1WyXtpGWIneR3RyiEBZ3SOydcvSlUpv4o?usp=drive_link' }] }, { name: 'Gate Prep', link: 'https://drive.google.com/drive/folders/1rj0kTkSZ8j_g1oGFlKQqR7J_i-bbdhvS' }, { name: 'Study Help Guide', link: 'https://docs.google.com/document/d/1TAe7Kq8E2Xv7J4ITHQ0IVUfYA5fHqekZ/edit?usp=drive_link&ouid=103309018449688798459&rtpof=true&sd=true' }] },
  { name: 'Skill Development', subResources: [{ name: 'Coding', link: '#' }, { name: 'Designing', link: '#' }, { name: 'Public Speaking', link: '#' }] },
]

export default function Resources() {
  const [openNotes, setOpenNotes] = useState(false);

  const toggleNotes = () => {
    setOpenNotes((currentValue) => !currentValue);
  };

  return (
    <main className='container csa-earth-section'>
      <section className='title-container'>
        <div className="csa-section-heading resources-heading">
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
            <span className='csa-section-heading-line'></span>
            <h1 className="csa-section-heading-title">Resources</h1>
            <span className='csa-section-heading-line'></span>
          </div>
        </div>
      </section>


      <section className={styles['resources-section']}>
        {resources.map((resource, index) => (
          <div key={index}>

            <div className={styles['resource-header']}>
              <h2 className={styles['resource-name']}>
                {index + 1}. {resource.name}
              </h2>
            </div>

              <div className={styles['sub-resources']}>
                {resource.subResources.map((subResource, subIndex) => (
                  <div className={styles['sub-resource-group']} key={subIndex}>
                    {subResource.children ? (
                      <>
                        <button
                          type="button"
                          className={styles['sub-resource-toggle']}
                          onClick={toggleNotes}
                          aria-expanded={openNotes}
                        >
                          {/* <span className={styles.dot}></span> */}
                           <span className={styles['toggle-icon']} aria-hidden="true">
                            {openNotes ? '▾' : '▸'}
                          </span>
                          <span className={styles['sub-resource-name']}>
                            {subResource.name}
                          </span>
                        
                        </button>

                        {openNotes && (
                          <div className={styles['nested-resources']}>
                            {subResource.children.map((yearResource, yearIndex) => (
                              <div className={styles['nested-resource-item']} key={yearIndex}>
                                <span className={styles['nested-dot']}></span>
                                <a
                                  href={yearResource.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={styles['nested-resource-name']}
                                >
                                  {yearResource.name}
                                </a>
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <div className={styles['sub-resource-item']}>
                        <span className={styles.dot}></span>

                        <a
                          href={subResource.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles['sub-resource-name']}
                        >
                          {subResource.name}
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
          </div>
        ))}
      </section>
    </main>
  )
}
