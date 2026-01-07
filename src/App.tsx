import { Header } from './components';
import { ProjectsList, ProjectsMain, Panel, About, Contact } from './components';
import '../src/styles/index.scss';
import Hero from './components/hero/Hero';

function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <main>
         <section className="projects section">
   
        <ProjectsList />
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