import { Header, Panel } from './components';
import { Main } from './components';
import '../src/styles/index.scss';

function App() {

  return (
    <div className="container">
      <Header />
      <Main>
        <Panel className="main__panel" />
        {/* <Outlet /> */}
      </Main>
    </div>
  )
}

export default App
