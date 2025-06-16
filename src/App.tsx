import { Header, Panel } from './components';
import { Main } from './components';
import '../src/styles/index.scss';
import Projects from './components/Projects';

function App() {

  return (
    <div className="container">
      <Header />
      <Main>
        <Projects/>
        <h2>Ola</h2>
        <Panel className="main__panel" />
        
        {/* <Outlet /> */}
      </Main>
    </div>
  )
}

export default App
