import 'modern-normalize/modern-normalize.css';
import './styles/fonts.scss';
import './styles/global.scss';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'; 

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route index element={<App />} />
        <Route path="/Strona glówna" element={<App />} />
        {/* <Route path="/Projekty" element={<Projects />} />
        <Route path="/O mnie" element={<About />} />
        <Route path="/Kontakt" element={<Contact />} /> */}
      </Routes>
    </Router>
  </StrictMode>,
);
