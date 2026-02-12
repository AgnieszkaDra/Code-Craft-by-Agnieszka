import Hero from "../components/hero/Hero";
import ProjectsHero from "./projects/ProjectsHero";
import Panel from "../components/Panel";
import About from "../components/About";
import Contact from "../components/Contact";
import GitHubNotice from "../components/GithubNotice";

const HomePage = () => {
  return (
    <>
      <Hero />
      <main>
        <GitHubNotice className="section" />
        <ProjectsHero
          id="projects"
          blockName="projects-hero"
          className="section"
        />
        <section id="panel">
          <Panel />
        </section>
        <section id="O-mnie">
          <About />
        </section>
        <section id="Kontakt">
          <Contact />
        </section>
      </main>
    </>
  );
};

export default HomePage;