import type { ReactElement } from "react";
import { Outlet } from "react-router-dom";

type ProjectsLayoutProps = {
  className?: string;
};

const ProjectsLayout = ({ className }: ProjectsLayoutProps): ReactElement => {
  return (
    <main className={`projects-page ${className ?? ""}`}>
      <Outlet />
    </main>
  );
};

export default ProjectsLayout;