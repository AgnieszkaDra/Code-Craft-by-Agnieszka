import { Header } from './components';
import { ProjectsMain, Panel, About, Contact } from './components';
import { Routes, Route } from 'react-router-dom';
import Hero from './components/hero/Hero';
import '../src/styles/index.scss';
import { BaseLink } from './ui';

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
                <section className='navigate-gitHub section'>
                  <div className='navigate-gitHub__content'>
                    <p className="text-description">
                      <span className='font-large'>Szukasz projektu portfolio? &nbsp;</span>
                      Kod źródłowy tej strony jest dostępny jako open source.
                      &nbsp;
                      <BaseLink
                        href="https://github.com/AgnieszkaDra/Code-Craft-by-Agnieszka"
                        external={true}
                        className="link--external link--github"
                        ariaLabel="Zobacz na GitHub"
                      >
                        Zobacz na GitHub
                      </BaseLink>
                    </p>
                  </div>
                </section>
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

        {/* Subpage Projects */}
        <Route
          path="/projects"
          element={
            <main className="section">
              <ProjectsMain className="projects__list section" />
            </main>
          }
        />

        {/* Tu możesz dodać inne subpage, np. /about itp */}
      </Routes>
    </div>
  );
}

export default App;