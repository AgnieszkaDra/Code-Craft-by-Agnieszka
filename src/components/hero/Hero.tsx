import React from "react";
import heroImage from "../../assets/images/hero.jpg";

const Hero: React.FC = () => {
  return (
    <header className="header-hero flex-standard section">
      <div className="header-hero__media">
        <div className="header-hero__image-wrapper">
          <img
            className="header-hero__image"
            src={heroImage}
            alt="Agnieszka – frontend developer"
          />
        </div>
      </div>
      <div className="header-hero__content">
        <h1 className="h1-header">
          Jestem Agnieszka, początkujący frontend developer z Polski.
        </h1>
        <p className="header-hero__description text-description">
          Szukam możliwości dołączenia do pierwszego projektu programistycznego,
          w którym będę mogła rozwijać swoje umiejętności i zdobywać doświadczenie
          w pracy nad prawdziwym produktem.
        </p>
        <div className="header-hero__links">
          <a
            href="https://github.com/AgnieszkaDra"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.95.57.1.78-.25.78-.55v-2.02c-3.2.7-3.87-1.37-3.87-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.19-3.11-.12-.3-.52-1.52.11-3.17 0 0 .97-.31 3.18 1.19a11 11 0 0 1 5.8 0c2.2-1.5 3.17-1.19 3.17-1.19.64 1.65.24 2.87.12 3.17.74.81 1.18 1.85 1.18 3.11 0 4.43-2.69 5.4-5.25 5.68.41.35.78 1.04.78 2.1v3.12c0 .3.2.66.79.55a11.52 11.52 0 0 0 7.85-10.95C23.5 5.74 18.27.5 12 .5z"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/agnieszka-draganczyk/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="is-linkedin"
          >
            <svg
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
          >
            <path
              fill="currentColor"
              d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
            />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;