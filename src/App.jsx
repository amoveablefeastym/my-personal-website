import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import Home from "./pages/Home.jsx"
import Projects from "./pages/Projects.jsx"
import ProjectDetail from "./pages/ProjectDetail.jsx"
import Writing from "./pages/Writing.jsx"
import WritingDetail from "./pages/WritingDetail.jsx"
import Learning from "./pages/Learning.jsx"
import LearningDetail from "./pages/LearningDetail.jsx"
import Funsies from "./pages/Funsies.jsx"
import FunsiesDetail from "./pages/FunsiesDetail.jsx"

function App() {
  return (
    <div id="top">
      <Navbar />

      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/writing" element={<Writing />} /> {/* Creative writing page */}
          <Route path="/writing/:slug" element={<WritingDetail />} />
          <Route path="/learning" element={<Learning />} /> {/* Learning blog page */}
          <Route path="/learning/:slug" element={<LearningDetail />} />
          <Route path="/funsies" element={<Funsies />} />
          <Route path="/funsies/:slug" element={<FunsiesDetail />} />
        </Routes>
      </main>
    </div>
  )
}

export default App


