// import type { ReactElement } from "react";
// import { Outlet } from "react-router-dom";

// type ProjectsLayoutProps = {
//   className?: string;
// };

// const ProjectsLayout = ({ className }: ProjectsLayoutProps): ReactElement => {
//   return (
//     <main className={`projects-page ${className ?? ""}`}>
//       <Outlet />
//     </main>
//   );
// };

// export default ProjectsLayout;

import type { ReactElement } from 'react'
import type { ProjectItem } from '../../types/main'
import React from 'react'

interface ProjectsLayoutProps {
  projects: ProjectItem[]
  blockName?: string
  className?: string
  renderProject?: (props: {
    background?: string
    label?: string
    link?: { href: string; label: string; external?: boolean }
    description?: string
    index: number
  }) => ReactElement
}

const ProjectsLayout = ({
  projects,
  blockName,
  className,
  renderProject,
}: ProjectsLayoutProps): ReactElement => {
  const Wrapper: React.ElementType = className ? 'section' : React.Fragment

  return (
    <Wrapper
      {...(className
        ? { className: [blockName, className].filter(Boolean).join(' ') }
        : {})}
    >
      {projects.map((project, index) =>
        renderProject ? (
          renderProject({
            background: project.background,
            label: project.label,
            link: project.link,
            description: project.description,
            index,
          })
        ) : (
          <article
            key={project.id}
            className={`${blockName}__item ${blockName}__item--${index + 1}`}
          >
            {project.background && (
              <div className={`${blockName}__background`}>
                <img
                  src={project.background}
                  alt={`Background for ${project.label}`}
                  className={`${blockName}__background-image`}
                />
              </div>
            )}

            <footer className={`${blockName}__footer`}>
              <h4 className={`h4-subtitle ${blockName}__title`}>
                {project.label}
              </h4>

              {project.link && (
                <a
                  href={project.link.href}
                  target={project.link.external ? '_blank' : '_self'}
                  rel={project.link.external ? 'noreferrer' : undefined}
                  className={`${blockName}__link`}
                >
                  {project.link.label}
                </a>
              )}

              {project.description && (
                <p className={`${blockName}__description`}>
                  {project.description}
                </p>
              )}
            </footer>
          </article>
        )
      )}
    </Wrapper>
  )
}

export default ProjectsLayout