import { useState } from 'react';
import { Header, Panel } from './components';
import { Main } from './components';
import '../src/styles/index.scss';
import ProjectsList from './components/ProjectsList';
import ProjectsMain from './components/ProjectsMain';

function App() {
  // State for controlling the CSS variable --menu-after-top
  const [menuAfterTop, setMenuAfterTop] = useState('80%');

  return (
    <>
     {/* Styles injected directly */}
      {/* <style>{`
        .menu {
          position: relative;
          background: #eee;
          padding: 40px;
          --menu-after-top: 80%;
        }

        .menu::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: var(--menu-after-top);
          height: 2px;
          background: red;
        }

        button {
          margin-right: 8px;
        }
      `}</style> */}
      <Header />
      <div className="container">
        <Main>
          <ProjectsList />
          <ProjectsMain />
          <Panel className="main__panel" />
          {/* <Outlet /> */}

          {/* Menu block with dynamic CSS variable */}
          <div
            className="menu"
            style={{ '--menu-after-top': menuAfterTop } as React.CSSProperties}
          >
            <p>This is the menu block.</p>
          </div>

          {/* Buttons to change the --menu-after-top CSS variable */}
          <div>
            <button onClick={() => setMenuAfterTop('20%')}>Top 20%</button>
            <button onClick={() => setMenuAfterTop('50%')}>Top 50%</button>
            <button onClick={() => setMenuAfterTop('80%')}>Top 80%</button>
          </div>
        </Main>
      </div>
    </>
  );
}

export default App;
