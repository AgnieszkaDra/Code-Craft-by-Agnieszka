import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import ProjectsMain from "./pages/projects/ProjectsMain";
import '../src/styles/index.scss';

function App() {
  return (
    <div className="container">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/projects"
          element={ <ProjectsMain /> }
        />
      </Routes>
    </div>
  )
}

export default App