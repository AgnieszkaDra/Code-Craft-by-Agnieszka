import 'modern-normalize/modern-normalize.css';
import './styles/fonts.scss';
import './styles/global.scss';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App.tsx';
import Projects from './pages/Projects/Projects.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} >
          <Route path="/Strona glówna" element={<App />} />
          <Route path="/Projekty" element={<Projects />}>
            {/* <Route index element={<ProjectsList />} />
            <Route path=":id" element={<ProjectDetail />} /> */}
          </Route>
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
