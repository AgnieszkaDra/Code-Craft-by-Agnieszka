import { Header, Panel } from './components';
import { Main } from './components';
import '../src/styles/index.scss';
//import Projects from './components/Projects';

function App() {

  return (
    <div className="container">
      <Header />
      <Main>
        <Panel className="main__panel" />
        {/* <Projects/> */}
        {/* <Outlet /> */}
      </Main>
    </div>
  )
}

export default App
