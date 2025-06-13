interface PanelProps {
  className?: string;
}

const Panel = ({ className = '' }: PanelProps) => {
  return (
    <aside className={`panel ${className}`}>
      <h2 className="h2 heading header-font panel__title">
        Witaj w moim portfolio!
      </h2>
      <h5 className="h5 heading lead panel__description">
        Szukając pierwszej pracy w branży, balansuję między kończeniem rozpoczętych projektów (choć, jak wiadomo, zawsze można coś dodać lub poprawić) a nauką nowych funkcjonalności, lepszych praktyk w kodzie oraz frameworków. Stale się rozwijam i chcę wykorzystać wiedzę oraz praktykę, którą już zdobyłam.
        Moje projekty nie są jeszcze idealne ani komercyjne, ale traktuję je jako ważny krok w rozwoju. Obecnie pracuję w aptece, jednak aktywnie poszukuję możliwości rozwoju i pracy jako frontend developer.
      </h5>
    </aside>
  );
};

export default Panel;