import type { JSX } from "react";
import heroImage from "../../assets/images/hero.jpg";
import { GitHubIcon, LinkedInIcon} from "../../ui";


const socialLinks = [
  {
    href: "https://github.com/AgnieszkaDra",
    label: "GitHub",
    icon: <GitHubIcon />,
  },
  {
    href: "https://www.linkedin.com/in/agnieszka-draganczyk/",
    label: "LinkedIn",
    icon: <LinkedInIcon />,
    className: "is-linkedin",
  },
];


const Hero = (): JSX.Element => {
  return (
    <section className="section">
      <header className="header-hero flex-standard">
      <div className="header-hero__media">
        <div className="header-hero__image-wrapper">
          <img
            src={heroImage}
            alt="Agnieszka – frontend developer"
            loading="eager"
            decoding="async"
            className="header-hero__image"
          />
        </div>
      </div>

      <div className="header-hero__content">
        <h1 className="h1-header">
          Jestem Agnieszka, frontend developer z Polski.
        </h1>

        <p className="header-hero__description text-description">
          Szukam pierwszego projektu komercyjnego, w którym będę mogła rozwijać się jako frontend developer i mieć realny wpływ na tworzone funkcjonalności.
        </p>

        <div className="header-hero__links">
          {socialLinks.map(({ href, label, icon, className }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={className}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
      </header>
    </section>
    
  );
};

export default Hero;