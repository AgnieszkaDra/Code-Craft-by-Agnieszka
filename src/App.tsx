import { Header } from './components';
import { ProjectsList, ProjectsMain, Panel, About, Contact } from './components';
import '../src/styles/index.scss';

function App() {
  return (
    <div className="container">
      <Header />
    
      <main>
        <section id="projects-list">
          <ProjectsList />
        </section>

        <section id="projects-main">
          <ProjectsMain />
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
    </div>
  );
}

export default App;