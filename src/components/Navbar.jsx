// Navbar.jsx
// -------------
// This component renders the top navigation bar for your site.
// It uses Tailwind CSS for styling and React Router for navigation.

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

const navItems = [
  { label: "Projects", to: "/projects" },
  { label: "Writing", to: "/writing" }, // Creative writing and essays
  { label: "Learning Blog", to: "/learning" }, // Learning and blog content
  { label: "Funsies", to: "/funsies" },
]

function Navbar() {
  // clickedItem holds the label of the nav item that was most recently clicked.
  const [clickedItem, setClickedItem] = useState(null)
  const location = useLocation()

  const handleClick = (label) => {
    setClickedItem(label)
    setTimeout(() => {
      setClickedItem(null)
    }, 400)
  }

  return (
    <nav className="px-8 py-4 bg-white text-black border-b border-[#e0e0e0]">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* LEFT SIDE: Site title / logo */}
        <Link
          to="/"
          onClick={() => handleClick("logo")}
          className={`
            font-serif text-2xl font-bold tracking-tight no-underline text-black
            transition-all duration-300 ease-out
            ${clickedItem === "logo" ? "scale-110 font-extrabold" : "scale-100"}
          `}
        >
          Yimin Huang
        </Link>

        {/* RIGHT SIDE: Navigation Links */}
        <div className="flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={() => handleClick(item.label)}
              className={`
                font-serif text-lg no-underline text-black relative
                transition-all duration-300 ease-out
                hover:text-[#555]
                ${clickedItem === item.label ? "scale-110 font-bold" : "scale-100 font-normal"}
                ${location.pathname === item.to ? "font-semibold border-b-2 border-black pb-1" : ""}
              `}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar