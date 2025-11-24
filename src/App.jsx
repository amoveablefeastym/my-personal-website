import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import Home from "./pages/Home.jsx"
import Projects from "./pages/Projects.jsx"
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
          <Route path="/writing" element={<Learning />} /> {/* Combined Learning/Blog route */}
          <Route path="/funsies" element={<Funsies />} />
        </Routes>
      </main>
    </div>
  )
}

export default App


