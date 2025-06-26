import { Header, Panel } from './components';
import { Main } from './components';
import '../src/styles/index.scss';
import ProjectsList from './components/ProjectsList';
import ProjectsMain from './components/ProjectsMain';

function App() {

  return (
    <>
    <Header />
    <div className="container">
      <Main>
        <ProjectsList/>
        <ProjectsMain/>
        <Panel className="main__panel" />
        {/* <Outlet /> */}
      </Main>
    </div>
    </>
    
  )
}

export default App
