import { Header, Panel } from './components';
import { Main } from './components';
import '../src/styles/index.scss';
import Projects from './components/Projects';
import ProjectsCarousel from './components/ProjectsCarousel';

function App() {

  return (
    <>
    <Header />
    <div className="container">
      <Main>
        <Projects/>
        <ProjectsCarousel className={'projects-carousel'}/>
        <Panel className="main__panel" />
        {/* <Outlet /> */}
      </Main>
    </div>
    </>
    
  )
}

export default App
