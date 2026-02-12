// import { Header } from './components';
// import { ProjectsHero, Panel, About, Contact } from './components';
// import { Routes, Route } from 'react-router-dom';
// import Hero from './components/hero/Hero';
// import '../src/styles/index.scss';
// import ProjectsInfo from './components/ProjectsInfo';
// import GitHubNotice from './components/GithubNotice';

// function App() {
//   return (
//     <div className="container">
//       <Header />
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <Hero />
//               <main>
//                 <GitHubNotice className="section" />
//                 <ProjectsHero
//                   id="projects"
//                   blockName="projects-hero"
//                   className="section"
//                 />
         
                
//                 <section id="panel">
//                   <Panel className="main__panel" />
//                 </section>

//                 <section id="O-mnie">
//                   <About />
//                 </section>

//                 <section id="Kontakt">
//                   <Contact />
//                 </section>
//               </main>
//             </>
//           }
//         />
//         <Route
//           path="/projects"
//           element={
//             <main className="projects-page section">
//               <ProjectsInfo className="section" />
              
//             </main>
//           }
//         />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProjectsLayout from "./pages/projects/ProjectsLayout";
import ProjectsInfo from "./pages/projects/ProjectsInfo";
import Header from "./components/Header";
import '../src/styles/index.scss';
// import ProjectDetails from "./components/ProjectDetails";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsLayout />}>
          <Route index element={<ProjectsInfo />} />
          {/* <Route path=":projectId" element={<ProjectDetails />} />  */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;