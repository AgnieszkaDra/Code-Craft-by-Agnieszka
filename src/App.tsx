import { Header } from './components';
import { ProjectsMain, Panel, About, Contact } from './components';
import { Routes, Route } from 'react-router-dom';
import Hero from './components/hero/Hero';
import '../src/styles/index.scss';
import ProjectsInfo from './components/ProjectsInfo';
import GitHubNotice from './components/GithubNotice';

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <main>
                <GitHubNotice className="section" />
                <section id="projects" className="section projects">
                  <ProjectsMain className="projects__list" />
                </section>
                
                <section id="panel">
                  <Panel className="main__panel" />
                </section>

                <section id="O-mnie">
                  <About />
                </section>

                <section id="Kontakt">
                  <Contact />
                </section>
              </main>
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <main className="projects-page section">
              <ProjectsInfo className="section" />
              <ProjectsMain className="projects__list section" />
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;