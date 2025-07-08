import { Header, Panel } from './components';
import { Main } from './components';
import '../src/styles/index.scss';
import ProjectsList from './components/ProjectsList';
import ProjectsMain from './components/ProjectsMain';
import { Outlet } from 'react-router-dom';

function App() {
 
  return (
    <div className="container">
      <Header />
        <Main>
          <ProjectsList />
          <ProjectsMain />
          <Panel className="main__panel" />
          <Outlet />
        </Main>
    </div>
  );
}

export default App;