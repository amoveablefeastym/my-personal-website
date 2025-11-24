import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import Home from "./pages/Home.jsx"
import Projects from "./pages/Projects.jsx"
import Writing from "./pages/Writing.jsx"
import Learning from "./pages/Learning.jsx"
import Funsies from "./pages/Funsies.jsx"

function App() {
  return (
    <div id="top">
      <Navbar />

      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/writing" element={<Writing />} /> {/* Creative writing page */}
          <Route path="/learning" element={<Learning />} /> {/* Learning blog page */}
          <Route path="/funsies" element={<Funsies />} />
        </Routes>
      </main>
    </div>
  )
}

export default App


