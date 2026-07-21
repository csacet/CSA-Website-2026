import { useState } from "react";
import { Link } from "react-router-dom";
import alumniStories from "./alumini.json";
import "./AlumniInsights.css";

function AlumniInsights() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("next");
  const activeStory = alumniStories[activeIndex];

  const showPreviousStory = () => {
    setSlideDirection("previous");
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? alumniStories.length - 1 : currentIndex - 1,
    );
  };

  const showNextStory = () => {
    setSlideDirection("next");
    setActiveIndex((currentIndex) => (currentIndex + 1) % alumniStories.length);
  };

  const showStory = (storyIndex) => {
    if (storyIndex === activeIndex) {
      return;
    }

    setSlideDirection(storyIndex > activeIndex ? "next" : "previous");
    setActiveIndex(storyIndex);
  };

  return (
    <main className="alumni-section csa-earth-section" id="alumni">
      <div className="alumni-content">
        <div className="csa-section-heading alumni-heading">
          <svg
            className="csa-heading-dino"
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M30.8 0V2.8H28V19.6H25.2V22.4H19.6V25.2H16.8V28H14V30.8H8.4V28H5.6V25.2H2.8V19.6H0V36.4H2.8V39.2H5.6V42H8.4V44.8H11.2V56H16.8V53.2H14V50.4H16.8V47.6H19.6V44.8H22.4V47.6H25.2V56H30.8V53.2H28V42H30.8V39.2H33.6V36.4H36.4V28H39.2V30.8H42V25.2H36.4V19.6H50.4V16.8H42V14H56V2.8H53.2V0M33.6 2.8H36.4V5.6H33.6V2.8Z" fill="#202020" />
          </svg>
          <svg
            className="csa-heading-disk"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle cx="25" cy="25" r="10.9375" stroke="#202020" strokeWidth="3.125" />
            <circle cx="25" cy="25" r="17.1875" stroke="#202020" strokeWidth="3.125" />
            <circle cx="25" cy="25" r="23.4375" stroke="#202020" strokeWidth="3.125" />
            <circle cx="25" cy="25.4434" r="6" fill="#202020" />
          </svg>
          <div className="csa-section-heading-frame">
            <span className="csa-section-heading-line" />
            <h1 className="csa-section-heading-title">Alumni Insights</h1>
            <span className="csa-section-heading-line" />
          </div>
        </div>

        <div
          className={`alumni-carousel is-${slideDirection}`}
          aria-live="polite"
        >
          <button
            className="alumni-nav alumni-nav-prev"
            type="button"
            onClick={showPreviousStory}
            aria-label="Show previous alumni story"
          >
            <svg
              viewBox="0 0 66 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle
                cx="33"
                cy="33"
                r="31.7308"
                transform="matrix(-1 0 0 1 66 0)"
                stroke="currentColor"
                strokeWidth="2.53846"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.5525 34.5507L35.6591 45.5574C36.5346 46.3534 37.8717 46.3534 38.7472 45.5574C39.7489 44.6467 39.7489 43.0714 38.7472 42.1608L34.6429 38.4294C31.4405 35.5178 31.4405 30.4814 34.6429 27.5699L38.7472 23.8385C39.7489 22.9278 39.7489 21.3525 38.7472 20.4418C37.8717 19.6459 36.5346 19.6459 35.6591 20.4418L23.5525 31.4486C23.1001 31.86 22.846 32.4179 22.846 32.9996C22.846 33.5813 23.1001 34.1393 23.5525 34.5507Z"
                fill="currentColor"
              />
            </svg>
          </button>

          <article
            className="alumni-story alumni-slide-item"
            key={`story-${activeStory.name}`}
          >
            <div className="alumni-story-header">
              <h2>{activeStory.name}</h2>
              {activeStory.year && (
                <p className="alumni-batch">Batch of {activeStory.year}</p>
              )}
              <p className="alumni-role">{activeStory.company}</p>
            </div>
            <p className="alumni-preview">{activeStory.preview}</p>
            <Link
              className="alumni-read-more"
              to={`/alumni-insights/${activeStory.slug}`}
            >
              Read more
            </Link>

            <div className="alumni-indicators" aria-label="Alumni story slides">
              {alumniStories.map((story, index) => (
                <button
                  className={`alumni-indicator${
                    index === activeIndex ? " is-active" : ""
                  }`}
                  type="button"
                  key={story.slug}
                  onClick={() => showStory(index)}
                  aria-label={`Show ${story.name}'s alumni insight`}
                  aria-current={index === activeIndex ? "true" : undefined}
                />
              ))}
            </div>
          </article>

          <button
            className="alumni-nav alumni-nav-next"
            type="button"
            onClick={showNextStory}
            aria-label="Show next alumni story"
          >
            <svg
              viewBox="0 0 66 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle
                cx="33"
                cy="33"
                r="31.7308"
                transform="matrix(-1 0 0 1 66 0)"
                stroke="currentColor"
                strokeWidth="2.53846"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.5525 34.5507L35.6591 45.5574C36.5346 46.3534 37.8717 46.3534 38.7472 45.5574C39.7489 44.6467 39.7489 43.0714 38.7472 42.1608L34.6429 38.4294C31.4405 35.5178 31.4405 30.4814 34.6429 27.5699L38.7472 23.8385C39.7489 22.9278 39.7489 21.3525 38.7472 20.4418C37.8717 19.6459 36.5346 19.6459 35.6591 20.4418L23.5525 31.4486C23.1001 31.86 22.846 32.4179 22.846 32.9996C22.846 33.5813 23.1001 34.1393 23.5525 34.5507Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
}

export default AlumniInsights;
