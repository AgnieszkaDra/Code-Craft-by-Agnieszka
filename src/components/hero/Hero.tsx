import React from "react";
import heroImage from "../../assets/images/hero.jpg";

const Hero: React.FC = () => {
  return (
    <header className="header-hero flex-standard">
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
      </div>
    </header>
  );
};

export default Hero;