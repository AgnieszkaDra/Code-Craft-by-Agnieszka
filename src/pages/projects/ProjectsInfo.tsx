import type { ReactElement } from "react";

type ProjectsInfoProps = {
  className?: string;
};

const ProjectsInfo = ({ className }: ProjectsInfoProps): ReactElement => {
  return (
    <section className={`projects-info section ${className ?? ''}`}>
      <div className='projects-info__content'>
        <h2 className="projects-info__label text-label">
          Ostatnie projekty
        </h2>
        <h1 className="projects-info__text h1-header">
          Oto niektóre z projektów, nad którymi pracowałam.
        </h1>
        <p className="projects-info__text text-description">
          To miejsce, w którym zapisuję ostatnie projekty, którymi zajmowałam się
          na przestrzeni lat — niezależnie od tego, czy są to nowe inicjatywy,
          które rozwijałam, projekty do nauki czy po prostu eksperymenty.
        </p>
      </div>
    </section>
  );
};

export default ProjectsInfo;