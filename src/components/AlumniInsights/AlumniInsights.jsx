import { useState } from "react";
import "./AlumniInsights.css";

const alumniStories = [
  {
    name: "John Jacob",
    role: "Product Engineer, Texas Instruments",
    quote:
      "The placement process was challenging but rewarding. Consistent practice and guidance from seniors helped me improve my problem-solving and interview skills. The experience taught me the importance of preparation and perseverance.",
    initials: "JJ",
  },
  {
    name: "Ananya Menon",
    role: "Software Engineer, Uber",
    quote:
      "Working with peers on projects and mock interviews gave me the confidence to approach interviews with clarity. The department community made preparation feel focused and collaborative.",
    initials: "AM",
  },
  {
    name: "Rahul Nair",
    role: "Backend Developer, Nutanix",
    quote:
      "The strongest advantage was learning how to explain my thinking. Code, projects, and communication came together during the placement journey.",
    initials: "RN",
  },
];

function AlumniAvatar() {
  return (
    <svg
      className="alumni-avatar"
      viewBox="0 0 320 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="160" cy="160" r="160" fill="#D9D9D9" />
      <path
        d="M79 300C91 246 117 220 161 220C206 220 232 247 244 300H79Z"
        fill="#4B4E58"
      />
      <path
        d="M116 241C126 225 140 217 160 217C181 217 196 225 205 241L194 310H126L116 241Z"
        fill="#F7F7F7"
      />
      <path
        d="M109 246L129 218L154 237L126 291L109 246Z"
        fill="#565A66"
      />
      <path
        d="M211 246L192 218L166 237L194 291L211 246Z"
        fill="#565A66"
      />
      <path
        d="M119 132C116 166 121 202 160 205C199 202 204 166 201 132C199 101 181 82 160 82C139 82 121 101 119 132Z"
        fill="#FFD1A8"
      />
      <path
        d="M119 136C114 126 106 130 106 143C106 156 115 164 123 163L119 136Z"
        fill="#F2B98F"
      />
      <path
        d="M201 136C206 126 214 130 214 143C214 156 205 164 197 163L201 136Z"
        fill="#F2B98F"
      />
      <path
        d="M120 120C127 93 146 72 171 75C177 76 181 80 186 82C206 82 219 97 217 120C215 141 207 153 199 162C199 145 197 131 191 119C177 123 162 116 151 103C143 113 132 116 120 120Z"
        fill="#202020"
      />
      <path
        d="M134 148C142 144 150 144 157 149"
        stroke="#202020"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M177 149C185 144 193 144 200 148"
        stroke="#202020"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="146" cy="158" r="5" fill="#202020" />
      <circle cx="188" cy="158" r="5" fill="#202020" />
      <path
        d="M161 166C158 177 154 184 150 188C156 191 164 191 170 187"
        stroke="#D99365"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M142 197C153 204 170 204 181 197"
        stroke="#C87552"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

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

          <div
            className="alumni-portrait-wrap alumni-slide-item"
            key={`portrait-${activeStory.name}`}
          >
            <div className="alumni-portrait" aria-hidden="true">
              <AlumniAvatar />
            </div>
          </div>

          <article
            className="alumni-story alumni-slide-item"
            key={`story-${activeStory.name}`}
          >
            <div>
              <h2>{activeStory.name}</h2>
              <p className="alumni-role">{activeStory.role}</p>
            </div>
            <blockquote>“{activeStory.quote}”</blockquote>
            <a className="alumni-read-more" href="#alumni">
              Read more
            </a>
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
