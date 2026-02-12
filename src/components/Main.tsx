import React from 'react';
import { Panel, About, Contact } from '../components';

interface MainProps {
  children?: React.ReactNode;
}

export const Main = ({ children }: MainProps) => {
  return (
    <main className="main">
      <section className="projects section">
   
       
        {/* <ProjectsHero /> */}
      </section>


      

      


      <section id="panel">
        <Panel className="main__panel" />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="contact">
        <Contact />
      </section>

      {children && <>{children}</>}
    </main>
  );
};

export default Main;